<?php
$anoAtual = date('Y');
$protocolo = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https' ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$pasta = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
$urlBase = $protocolo . '://' . $host . ($pasta === '/' ? '' : $pasta);
$imagemSocial = $urlBase . '/assets/og.png';

$tecnologias = [
    ['nome' => 'PHP', 'tipo' => 'back-end'],
    ['nome' => 'MySQL', 'tipo' => 'dados'],
    ['nome' => 'JavaScript', 'tipo' => 'interação'],
    ['nome' => 'HTML + CSS', 'tipo' => 'interface'],
    ['nome' => 'Python', 'tipo' => 'automação'],
];

$projetos = [
    [
        'numero' => '01',
        'tipo' => 'Produto web',
        'titulo' => 'Cardápio Digital',
        'descricao' => 'Uma experiência simples para o cliente e uma operação organizada para quem vende. Pedidos, catálogo e integração com WhatsApp pensados como um único fluxo.',
        'tags' => ['PHP', 'MySQL', 'WhatsApp API', 'JavaScript'],
        'destaque' => true,
    ],
    [
        'numero' => '02',
        'tipo' => 'Back-end',
        'titulo' => 'APIs e integrações',
        'descricao' => 'Conexões entre sistemas, regras de negócio e rotinas que trabalham nos bastidores sem transformar manutenção em dor de cabeça.',
        'tags' => ['PHP', 'REST', 'MySQL'],
        'destaque' => false,
    ],
    [
        'numero' => '03',
        'tipo' => 'Automação',
        'titulo' => 'Ferramentas sob medida',
        'descricao' => 'Scripts e painéis para tirar tarefas repetitivas do caminho, organizar dados e devolver tempo para o que realmente importa.',
        'tags' => ['Python', 'JavaScript', 'Dados'],
        'destaque' => false,
    ],
];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfólio de Victor Emanuel, desenvolvedor PHP, MySQL, JavaScript e Python.">
    <meta name="theme-color" content="#11110f">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="Victor Emanuel — Desenvolvedor Web">
    <meta property="og:description" content="PHP, MySQL, JavaScript e Python para construir software que funciona.">
    <meta property="og:image" content="<?= htmlspecialchars($imagemSocial, ENT_QUOTES) ?>">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Victor Emanuel — Desenvolvedor Web">
    <meta name="twitter:description" content="PHP, MySQL, JavaScript e Python para construir software que funciona.">
    <meta name="twitter:image" content="<?= htmlspecialchars($imagemSocial, ENT_QUOTES) ?>">
    <title>Victor Emanuel — Desenvolvedor</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="noise" aria-hidden="true"></div>

    <header class="site-header" data-header>
        <a class="brand" href="#inicio" aria-label="Voltar ao início">
            <span class="brand-mark">VE</span>
            <span class="brand-status"><i></i> disponível para projetos</span>
        </a>

        <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-menu" data-menu-button>
            <span></span><span></span>
            <span class="sr-only">Abrir menu</span>
        </button>

        <nav class="main-menu" id="main-menu" aria-label="Navegação principal" data-menu>
            <a href="#sobre">Sobre</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#processo">Processo</a>
            <a class="nav-contact" href="#contato">Vamos conversar <span>↗</span></a>
        </nav>
    </header>

    <main>
        <section class="hero section" id="inicio">
            <div class="hero-kicker reveal">
                <span>Desenvolvedor web</span>
                <span>Brasil · <?= $anoAtual ?></span>
            </div>

            <h1 class="hero-title reveal">
                Eu transformo<br>
                <span class="title-indent">problema chato</span><br>
                em <em>software</em> que funciona.
            </h1>

            <div class="hero-bottom reveal">
                <p>Sou <strong>Victor Emanuel</strong>. Construo sistemas com lógica sólida, interface bem resolvida e código feito para continuar funcionando depois da entrega.</p>
                <a class="circle-link" href="#trabalhos" aria-label="Ver meus trabalhos">
                    <span>ver<br>trabalhos</span>
                    <b>↓</b>
                </a>
            </div>

            <div class="marquee" aria-label="Tecnologias que utilizo">
                <div class="marquee-track">
                    <?php for ($repeticao = 0; $repeticao < 2; $repeticao++): ?>
                        <?php foreach ($tecnologias as $tecnologia): ?>
                            <span><?= htmlspecialchars($tecnologia['nome']) ?></span><i>✦</i>
                        <?php endforeach; ?>
                    <?php endfor; ?>
                </div>
            </div>
        </section>

        <section class="about section" id="sobre">
            <div class="section-label reveal"><span>01</span> Sobre mim</div>
            <div class="about-grid">
                <div class="about-statement reveal">
                    <p>Não programo para encher a tela de coisa.</p>
                    <p>Programo para <mark>resolver.</mark></p>
                </div>
                <div class="about-copy reveal">
                    <p>Meu ponto de partida é o back-end: <strong>PHP e MySQL</strong> para transformar regra de negócio em algo confiável. Quando o projeto pede, levo a mesma atenção para o front com HTML, CSS e JavaScript.</p>
                    <p>Python entra como meu braço de automação — porque repetir manualmente o que um script pode fazer nunca foi uma boa ideia.</p>
                    <a class="text-link" href="#processo">Como eu trabalho <span>→</span></a>
                </div>
            </div>

            <div class="stack-grid reveal">
                <?php foreach ($tecnologias as $indice => $tecnologia): ?>
                    <article class="stack-item">
                        <span class="stack-index">0<?= $indice + 1 ?></span>
                        <div>
                            <h3><?= htmlspecialchars($tecnologia['nome']) ?></h3>
                            <p><?= htmlspecialchars($tecnologia['tipo']) ?></p>
                        </div>
                        <span class="stack-arrow">↗</span>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="work section section-dark" id="trabalhos">
            <div class="section-label section-label-light reveal"><span>02</span> Trabalho em foco</div>
            <div class="work-heading reveal">
                <h2>Coisas que eu gosto<br>de <em>colocar de pé.</em></h2>
                <p>Produto bom não é só código bonito. Precisa fazer sentido para quem usa, para quem mantém e para o negócio.</p>
            </div>

            <div class="projects">
                <?php foreach ($projetos as $projeto): ?>
                    <article class="project-card <?= $projeto['destaque'] ? 'project-featured' : '' ?> reveal">
                        <div class="project-topline">
                            <span><?= htmlspecialchars($projeto['numero']) ?></span>
                            <span><?= htmlspecialchars($projeto['tipo']) ?></span>
                        </div>
                        <div class="project-visual" aria-hidden="true">
                            <?php if ($projeto['destaque']): ?>
                                <div class="browser-bar"><i></i><i></i><i></i><span>meucardapio.local</span></div>
                                <div class="menu-mockup">
                                    <div class="mock-sidebar"><b>menu.</b><span></span><span></span><span></span></div>
                                    <div class="mock-content">
                                        <small>Hoje combina com</small>
                                        <strong>Comida boa.<br>Sem espera.</strong>
                                        <div class="mock-foods"><i></i><i></i><i></i></div>
                                    </div>
                                </div>
                            <?php else: ?>
                                <div class="code-lines">
                                    <span></span><span></span><span></span><span></span><span></span>
                                    <b><?= $projeto['numero'] === '02' ? '{ API }' : '>_ run' ?></b>
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="project-info">
                            <h3><?= htmlspecialchars($projeto['titulo']) ?></h3>
                            <p><?= htmlspecialchars($projeto['descricao']) ?></p>
                            <div class="tag-list">
                                <?php foreach ($projeto['tags'] as $tag): ?>
                                    <span><?= htmlspecialchars($tag) ?></span>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="process section" id="processo">
            <div class="section-label reveal"><span>03</span> Jeito de trabalhar</div>
            <div class="process-layout">
                <div class="process-title reveal">
                    <h2>Menos mistério.<br>Mais <em>clareza.</em></h2>
                    <p>Do primeiro “e se?” até o sistema rodando.</p>
                </div>
                <div class="process-list">
                    <article class="process-item reveal">
                        <span>01</span>
                        <div><h3>Entender de verdade</h3><p>Antes do código, eu separo o problema real das ideias que só parecem solução.</p></div>
                    </article>
                    <article class="process-item reveal">
                        <span>02</span>
                        <div><h3>Construir o essencial</h3><p>Organizo banco, regras e interface para entregar valor cedo e evoluir sem bagunça.</p></div>
                    </article>
                    <article class="process-item reveal">
                        <span>03</span>
                        <div><h3>Testar no mundo real</h3><p>O fluxo precisa funcionar no celular, com dados reais e sem depender de sorte.</p></div>
                    </article>
                    <article class="process-item reveal">
                        <span>04</span>
                        <div><h3>Entregar sem sumir</h3><p>Deixo tudo compreensível para que o projeto continue saudável depois do lançamento.</p></div>
                    </article>
                </div>
            </div>
        </section>

        <section class="contact section section-accent" id="contato">
            <div class="contact-eyebrow reveal">Tem um projeto na cabeça?</div>
            <h2 class="reveal">Vamos tirar<br>do <em>“um dia”</em>.</h2>
            <div class="contact-bottom reveal">
                <p>Me conta a ideia, o problema ou até a bagunça atual. A gente começa por aí.</p>
                <button class="contact-button" type="button" data-copy-intro>
                    <span data-copy-label>Copiar apresentação</span>
                    <b>↗</b>
                </button>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <a class="brand footer-brand" href="#inicio"><span class="brand-mark">VE</span></a>
        <p>Victor Emanuel — desenvolvedor web</p>
        <p>Feito com café, PHP e atenção aos detalhes · <?= $anoAtual ?></p>
    </footer>

    <div class="toast" role="status" aria-live="polite" data-toast>Apresentação copiada. Agora é só colar onde quiser.</div>
    <script src="script.js" defer></script>
</body>
</html>
