$siteRoot = 'C:\xampp\htdocs\portifolio-2'
$scriptPath = Join-Path $siteRoot 'script.js'
$script = [System.IO.File]::ReadAllText($scriptPath)
$script = $script.Replace('window.__framer__appearAnimationsContent.text', 'document.getElementById("__framer__appearAnimationsContent").textContent')
$script = $script.Replace('window.__framer__breakpoints.text', 'document.getElementById("__framer__breakpoints").textContent')
[System.IO.File]::WriteAllText($scriptPath, $script, [System.Text.UTF8Encoding]::new($false))
Write-Output 'Acesso aos dados de animação ajustado.'
