$siteRoot = 'C:\xampp\htdocs\portifolio-2'
$sourceHtml = Join-Path $siteRoot 'index copy.html'
$assetDir = Join-Path $siteRoot 'assets\images'
$mirrorDir = Join-Path $siteRoot 'images'

$html = [System.IO.File]::ReadAllText($sourceHtml)
$matches = [regex]::Matches($html, 'https://framerusercontent\.com/images/[^"''\s<]+')
$candidates = @{}

foreach ($match in $matches) {
    $url = [System.Net.WebUtility]::HtmlDecode($match.Value).TrimEnd(')', ',')
    $name = [System.IO.Path]::GetFileName(([uri]$url).AbsolutePath)
    $widths = [regex]::Matches($url, '(?:width|height|scale-down-to)=(\d+)') | ForEach-Object { [int]$_.Groups[1].Value }
    $score = if ($widths) { ($widths | Measure-Object -Maximum).Maximum } else { 0 }
    if (-not $candidates.ContainsKey($name) -or $score -gt $candidates[$name].Score) {
        $candidates[$name] = [pscustomobject]@{ Url = $url; Score = $score }
    }
}

$client = [System.Net.WebClient]::new()
$client.Headers['User-Agent'] = 'Mozilla/5.0'
$downloaded = 0
$failed = 0

foreach ($file in Get-ChildItem -LiteralPath $assetDir -File) {
    if (-not $candidates.ContainsKey($file.Name)) { continue }
    try {
        $bytes = $client.DownloadData($candidates[$file.Name].Url)
        [System.IO.File]::WriteAllBytes($file.FullName, $bytes)
        $downloaded++
    } catch {
        $failed++
        Write-Warning ('Falha em ' + $file.Name + ': ' + $_.Exception.Message)
    }
}

New-Item -ItemType Directory -Path $mirrorDir -Force | Out-Null
Get-ChildItem -LiteralPath $assetDir -File | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $mirrorDir $_.Name) -Force
}

$client.Dispose()
Write-Output ('Imagens rebaixadas: ' + $downloaded + ' | Falhas: ' + $failed)
