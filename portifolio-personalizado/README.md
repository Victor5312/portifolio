# Portfólio do Victor

Portfólio autoral em Nuxt e Vue, com animações GSAP e um campo procedural em Three.js/WebGL: colinas, riacho, grama ao vento e folhas em movimento. A paleta combina verde, preto e branco. A referência visual foi a Emotion Agency; textos, composição, geometria e componentes foram criados para este projeto.

## Abrir no XAMPP

Com o Apache iniciado, acesse `http://localhost/portifolio-personalizado/`.

A configuração `.htaccess` serve os arquivos gerados em `.output/public`. Depois de editar o código, execute `npm run generate` para atualizar a versão do XAMPP.

## Desenvolvimento

```sh
npm install
npm run dev
```

Acesse `http://127.0.0.1:3000/portifolio-personalizado/`.

## Conteúdo pessoal

Os dados ficam em `data/perfil.ts`. Nome e tecnologias foram baseados nas informações disponíveis. A apresentação é um texto editorial editável; não foram adicionados formação, tempo de experiência, clientes ou resultados não confirmados.

E-mail, GitHub e LinkedIn só aparecem quando preenchidos. Até lá, o botão de contato permite salvar uma ideia em um arquivo local e informa claramente que nenhuma mensagem foi enviada.

Os dois itens na seção de projetos documentam este próprio portfólio e seu experimento 3D. Não representam trabalhos para clientes.

## Tecnologias

- Construção: Nuxt, Vue, JavaScript, HTML, CSS, GSAP, Three.js e WebGL.
- Tecnologias apresentadas no perfil: PHP, Python, Flask, Django, MySQL, JavaScript, HTML e CSS.
- PHP, Python e MySQL não são dependências de execução deste site estático.

Os nomes de classes e IDs próprios estão em português. Os nomes reservados das bibliotecas seguem suas APIs.

## Recursos

A rolagem tem quatro etapas: atravessar o túnel de folhas, chegar à clareira com árvore e flores, afastar a câmera e orbitar 270 graus ao redor da clareira. O trecho de túnel percorre 140 unidades; a sequência completa oferece 18 alturas de tela de rolagem no desktop e 15,6 no celular. As folhas reagem ao mouse desde a abertura, com dispersão, retorno suave e rajadas. A água tem superfície transparente, ondulações e leito procedural. Os controles permitem pausar o movimento ou pular diretamente para o conteúdo. O trajeto pode ser percorrido nos dois sentidos.

Layout responsivo, filtros de tecnologias, detalhes de projetos em janelas acessíveis, tema claro/escuro, controle de movimento e respeito à preferência do sistema por movimento reduzido. Em dispositivos sem WebGL, o campo tem uma alternativa visual em CSS. O cenário não usa imagens ou modelos externos.

As fontes DM Sans e Instrument Serif estão instaladas localmente via Fontsource e são incluídas na versão gerada. O site não usa CDN e funciona sem internet depois da instalação e geração.
