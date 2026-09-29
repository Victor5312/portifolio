$ErrorActionPreference = 'Continue'

$siteRoot = 'C:\xampp\htdocs\portifolio-2'
$indexPath = Join-Path $siteRoot 'index.html'
$assetRoot = Join-Path $siteRoot 'assets'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$html = [System.IO.File]::ReadAllText($indexPath)

New-Item -ItemType Directory -Force -Path $assetRoot | Out-Null

$allowedHosts = @('framerusercontent.com', 'fonts.gstatic.com')
$urlPattern = 'https?://[^"''\s<>()]+'
$allUrls = [regex]::Matches($html, $urlPattern) | ForEach-Object {
    [System.Net.WebUtility]::HtmlDecode($_.Value).TrimEnd('.', ',', ';')
} | Where-Object { $_ -match '^https?://' } | Sort-Object -Unique

$urlMap = @{}
$downloadQueue = [System.Collections.Generic.Queue[string]]::new()
$queued = [System.Collections.Generic.HashSet[string]]::new()

function Get-UriKey([string]$url) {
    try {
        $u = [Uri]$url
        return "$($u.Scheme)://$($u.Host)$($u.AbsolutePath)"
    } catch {
        return $null
    }
}

function Get-LocalRelativePath([string]$url) {
    $u = [Uri]$url
    $path = $u.AbsolutePath.TrimStart('/')
    $leaf = [System.IO.Path]::GetFileName($path)
    if ([string]::IsNullOrWhiteSpace($leaf)) { $leaf = 'index' }

    if ($path -like 'images/*') {
        return "assets/images/$leaf"
    }
    if ($path -like 'assets/*' -or $path -like 'third-party-assets/fontshare/*') {
        return "assets/fonts/$leaf"
    }
    if ($path -like 'sites/*') {
        return "assets/framer/$path"
    }
    return "assets/external/$($u.Host)/$leaf"
}

function Is-Downloadable([string]$url) {
    try {
        $u = [Uri]$url
        if ($allowedHosts -notcontains $u.Host) { return $false }
        return $u.AbsolutePath -match '\.(?:png|jpe?g|gif|webp|svg|woff2?|ttf|otf|m?js|json|css)$'
    } catch {
        return $false
    }
}

foreach ($url in $allUrls) {
    if (-not (Is-Downloadable $url)) { continue }
    $key = Get-UriKey $url
    if (-not $key) { continue }
    $relative = Get-LocalRelativePath $url
    if (-not $urlMap.ContainsKey($key)) { $urlMap[$key] = $relative }
    if ($queued.Add($key)) { $downloadQueue.Enqueue($url) }
}

$downloaded = 0
$failed = 0
while ($downloadQueue.Count -gt 0) {
    $url = $downloadQueue.Dequeue()
    $key = Get-UriKey $url
    if (-not $key -or -not $urlMap.ContainsKey($key)) { continue }
    $relative = $urlMap[$key]
    $destination = Join-Path $siteRoot ($relative -replace '/', '\')
    New-Item -ItemType Directory -Force -Path (Split-Path $destination -Parent) | Out-Null

    if (-not (Test-Path -LiteralPath $destination)) {
        try {
            Invoke-WebRequest -Uri $url -OutFile $destination -UseBasicParsing -TimeoutSec 90
            $downloaded++
        } catch {
            $failed++
            Write-Warning "Falha ao baixar $url : $($_.Exception.Message)"
            continue
        }
    }

    if ($destination -match '\.(m?js|css)$') {
        try {
            $moduleText = [System.IO.File]::ReadAllText($destination)
            $imports = [regex]::Matches($moduleText, '(?m)(?:from\s*|import\s*\()\s*["'']([^"'']+)["'']') | ForEach-Object { $_.Groups[1].Value }
            foreach ($spec in $imports) {
                if ($spec -match '^(?:data:|blob:|#)') { continue }
                try {
                    $resolved = [Uri]::new([Uri]$url, $spec).AbsoluteUri
                    if (Is-Downloadable $resolved) {
                        $resolvedKey = Get-UriKey $resolved
                        if (-not $urlMap.ContainsKey($resolvedKey)) { $urlMap[$resolvedKey] = Get-LocalRelativePath $resolved }
                        if ($queued.Add($resolvedKey)) { $downloadQueue.Enqueue($resolved) }
                    }
                } catch { }
            }
        } catch { }
    }
}

function Replace-RemoteUrls([string]$text, [string]$fromRelative = '') {
    foreach ($key in ($urlMap.Keys | Sort-Object Length -Descending)) {
        $targetRelative = $urlMap[$key]
        $target = $targetRelative
        if ($fromRelative) {
            $fromDir = Join-Path $siteRoot ((Split-Path $fromRelative -Parent) -replace '/', '\')
            $targetAbs = Join-Path $siteRoot ($targetRelative -replace '/', '\')
            $fromUri = [Uri](("file:///" + ($fromDir -replace '\\', '/') + '/'))
            $targetUri = [Uri]("file:///" + ($targetAbs -replace '\\', '/'))
            $target = $fromUri.MakeRelativeUri($targetUri).ToString()
        }
        $text = $text.Replace($key, $target)
        $text = $text.Replace([System.Net.WebUtility]::HtmlEncode($key), $target)
    }
    return $text
}

$html = Replace-RemoteUrls $html

# Pull every inline stylesheet into one local stylesheet while preserving order.
$stylePattern = '(?is)<style\b[^>]*>(.*?)</style>'
$styleParts = [regex]::Matches($html, $stylePattern) | ForEach-Object { $_.Groups[1].Value }
$styleText = $styleParts -join "`r`n"
$styleText = Replace-RemoteUrls $styleText
[System.IO.File]::WriteAllText((Join-Path $siteRoot 'style.css'), $styleText, $utf8NoBom)
$html = [regex]::Replace($html, $stylePattern, '<link rel="stylesheet" href="style.css">')

# Keep Framer's JSON animation data in HTML, but move executable inline scripts to script.js.
$scriptPattern = '(?is)<script\b(?<attrs>[^>]*)>(?<body>.*?)</script>'
$scriptParts = New-Object System.Collections.Generic.List[string]
$scriptJsInserted = $false
$html = [regex]::Replace($html, $scriptPattern, {
    param($match)
    $attrs = $match.Groups['attrs'].Value
    $body = $match.Groups['body'].Value
    $srcMatch = [regex]::Match($attrs, '(?i)\bsrc\s*=\s*["'']([^"'']+)["'']')
    if ($srcMatch.Success) {
        $srcUrl = [System.Net.WebUtility]::HtmlDecode($srcMatch.Groups[1].Value)
        $srcKey = Get-UriKey $srcUrl
        if ($srcKey -and $urlMap.ContainsKey($srcKey)) {
            $attrs = $attrs.Replace($srcMatch.Groups[1].Value, $urlMap[$srcKey])
        }
        if ($srcUrl -match 'events\.framer\.com|static\.cloudflareinsights\.com|framer\.com/edit/init') { return '' }
        return "<script$attrs>$body</script>"
    }
    if ($attrs -match '(?i)type\s*=\s*["''](?:application/(?:ld\+json|json)|importmap)["'']') {
        return $match.Value
    }
    if ($body -match '__framer_force_showing_editorbar_since') { return '' }
    $scriptParts.Add($body)
    if (-not $scriptJsInserted) {
        $scriptJsInserted = $true
        return '<script src="script.js"></script>'
    }
    return ''
})

$scriptText = ($scriptParts -join "`r`n;")
$scriptText = Replace-RemoteUrls $scriptText 'script.js'
[System.IO.File]::WriteAllText((Join-Path $siteRoot 'script.js'), $scriptText, $utf8NoBom)

# Rewrite downloaded module/CSS files after the recursive import scan.
Get-ChildItem -LiteralPath $assetRoot -Recurse -File | Where-Object { $_.Extension -in @('.mjs', '.js', '.css') } | ForEach-Object {
    $relative = $_.FullName.Substring($siteRoot.Length + 1).Replace('\', '/')
    $content = [System.IO.File]::ReadAllText($_.FullName)
    $content = Replace-RemoteUrls $content $relative
    [System.IO.File]::WriteAllText($_.FullName, $content, $utf8NoBom)
}

[System.IO.File]::WriteAllText($indexPath, $html, $utf8NoBom)
Write-Output "Baixados: $downloaded | Falhas: $failed | Mapeados: $($urlMap.Count)"
Write-Output "Arquivos: index.html, style.css, script.js"
