# Portfólio do Victor

Portfólio autoral em Nuxt e Vue, com animações GSAP e um campo procedural em Three.js/WebGL: colinas, riacho, grama ao vento e folhas em movimento. A paleta combina verde, preto e branco. A referência visual foi a Emotion Agency; textos, composição, geometria e componentes foram criados para este projeto.

## Abrir no XAMPP

Para a pasta atual `C:\xampp\htdocs\portifolio`, gere a versão com o prefixo local no PowerShell:

```powershell
$env:NUXT_APP_BASE_URL = '/portifolio/'
npm run generate
Remove-Item Env:NUXT_APP_BASE_URL
```

Com o Apache iniciado, acesse `http://localhost/portifolio/`. Essa geração local tem prefixo diferente da publicação na VPS.

A configuração `.htaccess` serve os arquivos gerados em `.output/public`. Depois de editar o código, execute `npm run generate` para atualizar a versão do XAMPP.

## Desenvolvimento

```sh
npm install
npm run dev
```

Acesse `http://127.0.0.1:3000/`.

## Publicação na VPS

O domínio serve o projeto na raiz `/`. O container `portfolio_php` usa Apache, publica a porta `127.0.0.1:8100` e monta `/srv/apps/portfolio/src` em `/var/www/html` como somente leitura. O `.htaccess` serve a versão estática em `.output/public`; não é necessário Node ou MySQL para executar essa versão.

Para gerar uma nova versão destinada à VPS, execute `npm ci` e `npm run generate` em um ambiente de construção com Node compatível com o `package-lock.json`, sem definir `NUXT_APP_BASE_URL` (ou com valor `/`). Publique o conteúdo gerado em `.output/public` junto do `.htaccess`. Apenas `git pull` não recompila o Nuxt: a saída gerada precisa acompanhar a publicação ou ser construída antes de servir a nova versão.

O `.htaccess` também aceita os caminhos antigos `/portifolio-personalizado/`, usados pela versão que já estava gerada. Não adicione `RewriteBase /portifolio-personalizado/` na VPS.

Na correção de 29/09/2026, `.htaccess` e `nuxt.config.ts` foram ajustados tanto localmente quanto na VPS, sem commit ou push automático. Antes de atualizar com Git, registre e envie as alterações locais e confira `git diff` na VPS: as cópias editadas no servidor podem impedir o próximo pull. Os backups anteriores à correção estão em `/srv/apps/portfolio/htaccess.before-route-fix-20260929` e `/srv/apps/portfolio/nuxt.config.before-route-fix-20260929.ts`.

O repositório atualmente versiona `node_modules` e arquivos de construção. Em uma manutenção separada, retire dependências e caches do índice do Git e configure um processo de geração/publicação; adicionar regras ao `.gitignore` sozinho não remove arquivos já versionados. Não remova `.output/public` da publicação enquanto o Apache depender dessa pasta.

## Conteúdo pessoal

Os dados ficam em `data/perfil.ts`. Nome e tecnologias foram baseados nas informações disponíveis. A apresentação é um texto editorial editável; não foram adicionados formação, tempo de experiência, clientes ou resultados não confirmados.

E-mail, GitHub e LinkedIn só aparecem quando preenchidos. Até lá, o botão de contato permite salvar uma ideia em um arquivo local e informa claramente que nenhuma mensagem foi enviada.

A seção de projetos apresenta trabalhos informados pelo Victor e conferidos nos arquivos locais: PBA Contabilidade (`sites/lp-cartorio`), PersonalFit (`personalfit`), Controle Financeiro (`controle-financeiro`) e Cardápio Digital (`cardapio-digital`). Os cartões são capas gráficas, não capturas das telas dos sistemas. As descrições não atribuem resultados comerciais ou autoria exclusiva. Os projetos de origem foram apenas consultados; nenhum dado de usuários ou credencial foi copiado.

## Tecnologias

- Construção: Nuxt, Vue, JavaScript, HTML, CSS, GSAP, Three.js e WebGL.
- Tecnologias apresentadas no perfil: PHP, Python, Flask, Django, MySQL, JavaScript, HTML e CSS.
- PHP, Python e MySQL não são dependências de execução deste site estático.

Os nomes de classes e IDs próprios estão em português. Os nomes reservados das bibliotecas seguem suas APIs.

## Recursos

A rolagem tem quatro etapas: atravessar o túnel de folhas, chegar à clareira com árvore e flores, afastar a câmera e orbitar 270 graus ao redor da clareira. O trecho de túnel percorre 140 unidades; a sequência completa oferece 18 alturas de tela de rolagem no desktop e 15,6 no celular. As folhas reagem ao mouse desde a abertura, com dispersão, retorno suave e rajadas. A água tem superfície transparente, ondulações e leito procedural. Os controles permitem pausar o movimento ou pular diretamente para o conteúdo. O trajeto pode ser percorrido nos dois sentidos.

Layout responsivo, filtros de tecnologias, detalhes de projetos em janelas acessíveis, tema claro/escuro, controle de movimento e respeito à preferência do sistema por movimento reduzido. Em dispositivos sem WebGL, o campo tem uma alternativa visual em CSS. O cenário não usa imagens ou modelos externos.

As fontes DM Sans e Instrument Serif estão instaladas localmente via Fontsource e são incluídas na versão gerada. O site não usa CDN e funciona sem internet depois da instalação e geração.
