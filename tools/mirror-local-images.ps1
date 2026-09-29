$siteRoot = 'C:\xampp\htdocs\portifolio-2'
$source = Join-Path $siteRoot 'assets\images'
$target = Join-Path $siteRoot 'images'

New-Item -ItemType Directory -Path $target -Force | Out-Null
Get-ChildItem -LiteralPath $source -File | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $target $_.Name) -Force
}

Write-Output ('Imagens locais espelhadas: ' + (Get-ChildItem -LiteralPath $target -File).Count)
