$siteRoot = 'C:\xampp\htdocs\portifolio-2'
$scriptPath = Join-Path $siteRoot 'script.js'
$lines = @(Get-Content -LiteralPath $scriptPath)

if ($lines.Count -ge 8) {
    $clean = @($lines[0..3] + $lines[6..($lines.Count - 1)])
    [System.IO.File]::WriteAllLines($scriptPath, $clean, [System.Text.UTF8Encoding]::new($false))
}

Write-Output ('Linhas finais em script.js: ' + (Get-Content -LiteralPath $scriptPath).Count)
