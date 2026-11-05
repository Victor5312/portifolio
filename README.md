# Portfólio do Victor

Portfólio autoral em Nuxt e Vue, com animações GSAP e um campo procedural em Three.js/WebGL: riacho, floresta, grama ao vento, folhas, pássaros, borboletas e vaga-lumes, com céu que passa da manhã ao entardecer. A página usa Bricolage Grotesque e DM Sans sobre papel claro, tinta e laranja. Textos, composição, geometria e componentes foram criados para este projeto.

## Abrir no XAMPP

Para a pasta atual `C:\xampp\htdocs\portifolio`, gere a versão com o prefixo local no PowerShell:

```powershell
$env:NUXT_APP_BASE_URL = '/portifolio/'
npm run generate
Remove-Item Env:NUXT_APP_BASE_URL
```

Com o Apache iniciado, acesse `http://localhost/portifolio/`. Essa geração local tem prefixo diferente da publicação na VPS.

Use o PowerShell nesse comando: o Git Bash converte `/portifolio/` em um caminho do Windows e a geração sai quebrada, sem `index.html`.

A configuração `.htaccess` serve os arquivos gerados em `.output/public`. Depois de editar o código, execute `npm run generate` para atualizar a versão do XAMPP.

## Desenvolvimento

```sh
npm install
npm run dev
```

Acesse `http://127.0.0.1:3000/`.

O `npm run dev` apaga `.output`, a pasta que o XAMPP serve. Depois de usar o modo de desenvolvimento, encerre o servidor e gere a versão local de novo.

## Publicação na VPS

O domínio serve o projeto na raiz `/`. O container `portfolio_php` usa Apache, publica a porta `127.0.0.1:8100` e monta `/srv/apps/portfolio/src` em `/var/www/html` como somente leitura. O `.htaccess` serve a versão estática em `.output/public`; não é necessário Node ou MySQL para executar essa versão.

Para gerar uma versão destinada à VPS sem afetar o preview local, execute `npm ci` e `npm run generate:vps` em um ambiente de construção com Node compatível com o `package-lock.json`. O comando usa a raiz `/` e grava a saída em `.output-vps/public`. Envie o conteúdo dessa pasta para `.output/public` no servidor, mantendo o `.htaccess` na raiz do projeto. Não envie a geração local de `/portifolio/`: ela aponta os scripts para o subcaminho local e impede que animações e recursos JavaScript carreguem na raiz do domínio. Apenas `git pull` não recompila o Nuxt: a saída gerada precisa acompanhar a publicação ou ser construída antes de servir a nova versão.

O `.htaccess` também aceita os caminhos antigos `/portifolio-personalizado/`, usados pela versão que já estava gerada. Não adicione `RewriteBase /portifolio-personalizado/` na VPS.

Na correção de 29/09/2026, `.htaccess` e `nuxt.config.ts` foram ajustados tanto localmente quanto na VPS, sem commit ou push automático. Antes de atualizar com Git, registre e envie as alterações locais e confira `git diff` na VPS: as cópias editadas no servidor podem impedir o próximo pull. Os backups anteriores à correção estão em `/srv/apps/portfolio/htaccess.before-route-fix-20260929` e `/srv/apps/portfolio/nuxt.config.before-route-fix-20260929.ts`.

O repositório atualmente versiona `node_modules` e arquivos de construção. Em uma manutenção separada, retire dependências e caches do índice do Git e configure um processo de geração/publicação; adicionar regras ao `.gitignore` sozinho não remove arquivos já versionados. Não remova `.output/public` da publicação enquanto o Apache depender dessa pasta.

## Conteúdo pessoal

Os textos da página ficam no template `app.vue`. As imagens ficam em `assets/marcas`, `assets/projetos` e `assets/tecnologias` e são importadas no `app.vue`: o Vite as publica em `_nuxt/`, a rota que o `.htaccess` já libera nos dois ambientes. Não coloque imagens novas em `public/`: o `.htaccess` só entrega `_nuxt/`, `_payload.json` e `favicon.svg`. O conteúdo não inclui formação, tempo de experiência, clientes ou resultados não confirmados.

O botão de contato permite salvar uma ideia em um arquivo local e informa claramente que nenhuma mensagem foi enviada.

A seção de projetos apresenta trabalhos informados pelo Victor e conferidos nos arquivos locais: PersonalFit (`personalfit`), Alfred (`alfred`), RajaHub (`rajahub`) e Gostiki (`gostiki`). A presença do Alfred em 27 cidades foi informada pelo Victor. O card do RajaHub usa uma captura real da página inicial pública; os demais usam capas gráficas. As descrições não atribuem autoria exclusiva. Os projetos de origem foram apenas consultados; nenhum dado de usuários ou credencial foi copiado.

## Tecnologias

A faixa de marcas é um cilindro 3D com as logos públicas de Alfred, RajaHub e Gostiki. PersonalFit aparece apenas como nome. Fontes: `https://alfredsistemas.com.br/assets/img/logo-alfred.png`, `https://rajahub.com.br/wp-content/uploads/2025/01/logo-Photoroom.png` e `https://gostiki.com.br/img/logo.png`. O movimento pode ser pausado e respeita a preferência por movimento reduzido.

- Construção: Nuxt, Vue, JavaScript, HTML, CSS, GSAP, Three.js e WebGL.
- Tecnologias apresentadas na página: PHP, Python, Flask, Django, MySQL, JavaScript, HTML e CSS.
- PHP, Python e MySQL não são dependências de execução deste site estático.

Os nomes de classes e IDs próprios estão em português. Os nomes reservados das bibliotecas seguem suas APIs.

## Recursos

A rolagem tem quatro etapas: atravessar o túnel de folhas, chegar à clareira com árvore e flores, afastar a câmera e orbitar 270 graus ao redor da clareira. O trecho de túnel percorre 140 unidades; a sequência completa oferece 18 alturas de tela de rolagem no desktop e 15,6 no celular. As folhas reagem ao mouse desde a abertura, com dispersão, retorno suave e rajadas. A água tem superfície transparente, ondulações e leito procedural. Os controles permitem ir direto a cada parada, pausar o vento e as folhas ou pular para o conteúdo; a câmera continua acompanhando a rolagem mesmo com o movimento pausado. O trajeto pode ser percorrido nos dois sentidos. Em aparelhos lentos a resolução da cena cai sozinha.

Fora da cena WebGL, o 3D é feito com CSS e GSAP: anel de tecnologias em `Sobre`, pilha de camadas em `Tecnologias`, capas de projeto que seguem o ponteiro e títulos que se erguem na rolagem. Tudo isso é desligado por "Desligar movimento" e pela preferência de movimento reduzido.

Layout responsivo, filtros de tecnologias, detalhes de projetos em janelas acessíveis, tema claro/escuro, controle de movimento e respeito à preferência do sistema por movimento reduzido. Em dispositivos sem WebGL, o campo tem uma alternativa visual em CSS. O cenário não usa imagens ou modelos externos.

As fontes DM Sans e Instrument Serif estão instaladas localmente via Fontsource e são incluídas na versão gerada. O site não usa CDN e funciona sem internet depois da instalação e geração.
