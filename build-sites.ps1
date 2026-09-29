$ErrorActionPreference = 'Stop'

$projectDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$distDirectory = Join-Path $projectDirectory 'dist'
$serverDirectory = Join-Path $distDirectory 'server'

New-Item -ItemType Directory -Force -Path $serverDirectory | Out-Null

$html = (Invoke-WebRequest -Uri 'http://127.0.0.1/phprender/' -UseBasicParsing -TimeoutSec 10).Content
$html = [regex]::Replace($html, 'https?://[^"'']+/assets/og\.png', '__BASE_URL__/assets/og.png')
$css = Get-Content -Raw -Encoding UTF8 (Join-Path $projectDirectory 'styles.css')
$javascript = Get-Content -Raw -Encoding UTF8 (Join-Path $projectDirectory 'script.js')
$socialImage = [System.IO.File]::ReadAllBytes((Join-Path $projectDirectory 'assets\og.png'))
$logoImage = [System.IO.File]::ReadAllBytes((Join-Path $projectDirectory 'assets\logo-ve.png'))

$htmlBase64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($html))
$cssBase64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($css))
$javascriptBase64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($javascript))
$imageBase64 = [Convert]::ToBase64String($socialImage)
$logoBase64 = [Convert]::ToBase64String($logoImage)

$worker = @"
const assets = {
  html: '$htmlBase64',
  css: '$cssBase64',
  js: '$javascriptBase64',
  image: '$imageBase64',
  logo: '$logoBase64'
};

const bytes = (value) => Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
const text = (value) => new TextDecoder().decode(bytes(value));

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const headers = { 'X-Content-Type-Options': 'nosniff' };

    if (url.pathname === '/' || url.pathname === '/index.php') {
      headers['Content-Type'] = 'text/html; charset=UTF-8';
      headers['Cache-Control'] = 'public, max-age=300';
      return new Response(text(assets.html).replaceAll('__BASE_URL__', url.origin), { headers });
    }

    if (url.pathname === '/styles.css') {
      headers['Content-Type'] = 'text/css; charset=UTF-8';
      headers['Cache-Control'] = 'public, max-age=86400';
      return new Response(text(assets.css), { headers });
    }

    if (url.pathname === '/script.js') {
      headers['Content-Type'] = 'text/javascript; charset=UTF-8';
      headers['Cache-Control'] = 'public, max-age=86400';
      return new Response(text(assets.js), { headers });
    }

    if (url.pathname === '/assets/og.png') {
      headers['Content-Type'] = 'image/png';
      headers['Cache-Control'] = 'public, max-age=604800';
      return new Response(bytes(assets.image), { headers });
    }

    if (url.pathname === '/assets/logo-ve.png') {
      headers['Content-Type'] = 'image/png';
      headers['Cache-Control'] = 'public, max-age=604800';
      return new Response(bytes(assets.logo), { headers });
    }

    return new Response('Página não encontrada.', {
      status: 404,
      headers: { ...headers, 'Content-Type': 'text/plain; charset=UTF-8' }
    });
  }
};
"@

[System.IO.File]::WriteAllText((Join-Path $serverDirectory 'index.js'), $worker, [Text.UTF8Encoding]::new($false))
Write-Output "Sites build created at $serverDirectory"
