$ErrorActionPreference = 'Continue'
$siteRoot = 'C:\xampp\htdocs\portifolio-2'
$assetRoot = Join-Path $siteRoot 'assets'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$allowedHosts = @('framerusercontent.com', 'fonts.gstatic.com')

function Get-UriKey([string]$url) {
    try { $u = [Uri]$url; return "$($u.Scheme)://$($u.Host)$($u.AbsolutePath)" } catch { return $null }
}
function Get-LocalRelativePath([string]$url) {
    $u = [Uri]$url; $path = $u.AbsolutePath.TrimStart('/'); $leaf = [IO.Path]::GetFileName($path)
    if ([string]::IsNullOrWhiteSpace($leaf)) { $leaf = 'index' }
    if ($path -like 'images/*') { return "assets/images/$leaf" }
    if ($path -like 'assets/*' -or $path -like 'third-party-assets/fontshare/*') { return "assets/fonts/$leaf" }
    if ($path -like 'sites/*') { return "assets/framer/$path" }
    return "assets/external/$($u.Host)/$leaf"
}
function Is-Downloadable([string]$url) {
    try { $u=[Uri]$url; return ($allowedHosts -contains $u.Host -and $u.AbsolutePath -match '\.(?:png|jpe?g|gif|webp|svg|woff2?|ttf|otf|m?js|json|css)$') } catch { return $false }
}
function Get-RelativeUrl([string]$fromRelative, [string]$targetRelative) {
    $fromDir = Join-Path $siteRoot ((Split-Path $fromRelative -Parent) -replace '/', '\')
    $targetAbs = Join-Path $siteRoot ($targetRelative -replace '/', '\')
    $fromUri = [Uri]("file:///" + ($fromDir -replace '\\', '/') + '/')
    $targetUri = [Uri]("file:///" + ($targetAbs -replace '\\', '/'))
    return $fromUri.MakeRelativeUri($targetUri).ToString()
}

$urlMap = @{}
$queue = [System.Collections.Generic.Queue[string]]::new()
$seen = [System.Collections.Generic.HashSet[string]]::new()
$urlPattern = 'https?://[^"''\s<>()]+'

$files = @(Get-Item (Join-Path $siteRoot 'index.html'), (Join-Path $siteRoot 'style.css'), (Join-Path $siteRoot 'script.js')) + @(Get-ChildItem $assetRoot -Recurse -File)
foreach ($file in $files) {
    $text = [IO.File]::ReadAllText($file.FullName)
    foreach ($raw in ([regex]::Matches($text, $urlPattern) | ForEach-Object { [Net.WebUtility]::HtmlDecode($_.Value).TrimEnd('.', ',', ';') })) {
        if (-not (Is-Downloadable $raw)) { continue }
        $key = Get-UriKey $raw
        if (-not $key) { continue }
        if (-not $urlMap.ContainsKey($key)) { $urlMap[$key] = Get-LocalRelativePath $raw }
        if ($seen.Add($key)) { $queue.Enqueue($raw) }
    }
}

$downloaded = 0
while ($queue.Count -gt 0) {
    $url = $queue.Dequeue(); $key = Get-UriKey $url; if (-not $key) { continue }
    $relative = $urlMap[$key]; $destination = Join-Path $siteRoot ($relative -replace '/', '\')
    New-Item -ItemType Directory -Force -Path (Split-Path $destination -Parent) | Out-Null
    if (-not (Test-Path -LiteralPath $destination)) {
        try { Invoke-WebRequest -Uri $url -OutFile $destination -UseBasicParsing -TimeoutSec 90; $downloaded++ } catch { Write-Warning "Falha ao baixar $url : $($_.Exception.Message)"; continue }
    }
    if ($destination -match '\.(m?js|css)$') {
        $moduleText = [IO.File]::ReadAllText($destination)
        foreach ($raw in ([regex]::Matches($moduleText, $urlPattern) | ForEach-Object { $_.Value })) {
            if (-not (Is-Downloadable $raw)) { continue }
            $nextKey = Get-UriKey $raw
            if (-not $urlMap.ContainsKey($nextKey)) { $urlMap[$nextKey] = Get-LocalRelativePath $raw }
            if ($seen.Add($nextKey)) { $queue.Enqueue($raw) }
        }
    }
}

foreach ($file in $files) {
    if (-not (Test-Path -LiteralPath $file.FullName)) { continue }
    $relative = $file.FullName.Substring($siteRoot.Length + 1).Replace('\', '/')
    $text = [IO.File]::ReadAllText($file.FullName)
    foreach ($key in ($urlMap.Keys | Sort-Object Length -Descending)) {
        $target = Get-RelativeUrl $relative $urlMap[$key]
        $text = $text.Replace($key, $target)
        $text = $text.Replace([Net.WebUtility]::HtmlEncode($key), $target)
    }
    [IO.File]::WriteAllText($file.FullName, $text, $utf8NoBom)
}

$index = [IO.File]::ReadAllText((Join-Path $siteRoot 'index.html'))
$index = [regex]::Replace($index, '(?im)^\s*<link href="https://fonts\.gstatic\.com"[^>]*>\s*$', '')
[IO.File]::WriteAllText((Join-Path $siteRoot 'index.html'), $index, $utf8NoBom)
Write-Output "Assets adicionais baixados: $downloaded | URLs locais: $($urlMap.Count)"
