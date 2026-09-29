$siteRoot = 'C:\xampp\htdocs\portifolio-2'
$sourcePath = Join-Path $siteRoot 'index copy.html'
$indexPath = Join-Path $siteRoot 'index.html'

$source = [System.IO.File]::ReadAllText($sourcePath)
$index = [System.IO.File]::ReadAllText($indexPath)
$dataTags = [regex]::Matches($source, '<script[^>]*(?:__framer__|type="application/json")[^>]*>.*?</script>', 'Singleline') | ForEach-Object { $_.Value }

if ($dataTags.Count -eq 2) {
    $index = [regex]::Replace($index, '\s*<script src="script\.js"></script>', '')
    $insertion = "`r`n" + ($dataTags -join "`r`n") + "`r`n<script src='script.js'></script>`r`n</body>"
    $index = $index.Replace('</body>', $insertion)
    [System.IO.File]::WriteAllText($indexPath, $index, [System.Text.UTF8Encoding]::new($false))
}

Write-Output ('Dados de animação restaurados: ' + $dataTags.Count)
