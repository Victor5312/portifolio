<?php
function h(string $valor): string
{
    return htmlspecialchars($valor, ENT_QUOTES, 'UTF-8');
}

$anoAtual = date('Y');
$protocolo = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https' ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$pasta = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
$urlBase = $protocolo . '://' . $host . ($pasta === '/' ? '' : $pasta);
$imagemSocial = $urlBase . '/assets/og.png';

$tecnologias = [
    ['nome' => 'PHP', 'tipo' => 'back-end'],
    ['nome' => 'Python', 'tipo' => 'back-end'],
    ['nome' => 'MySQL', 'tipo' => 'banco de dados'],
    ['nome' => 'JavaScript', 'tipo' => 'interface'],
    ['nome' => 'HTML + CSS', 'tipo' => 'interface'],
];

$projetos = [
    [
        'numero' => '01',
        'tipo' => 'Sistema de gestão',
        'titulo' => 'PDV Sorveteria Gostiki',
        'descricao' => 'Desenvolvi um ponto de venda para a rotina da Sorveteria Gostiki, reunindo atendimento, registro de vendas e controle da operação em um fluxo direto.',
        'tags' => ['PHP', 'MySQL', 'JavaScript', 'PDV'],
        'destaque' => true,
        'visual' => 'gostiki',
    ],
    [
        'numero' => '02',
        'tipo' => 'Plataforma web',
        'titulo' => 'PersonalFit',
        'descricao' => 'Sistema web construído para o PersonalFit, transformando as necessidades específicas do projeto em um fluxo organizado, rápido e fácil de usar.',
        'tags' => ['PHP', 'MySQL', 'HTML + CSS', 'JavaScript'],
        'destaque' => true,
        'visual' => 'personalfit',
    ],
];

$principios = [
    [
        'titulo' => 'Contexto antes do código',
        'descricao' => 'Primeiro eu entendo a regra, o usuário e o impacto da mudança. Isso evita implementar rápido a coisa errada.',
    ],
    [
        'titulo' => 'Back-end fácil de acompanhar',
        'descricao' => 'Prefiro nomes claros, responsabilidades bem separadas e código que outro desenvolvedor consiga continuar.',
    ],
    [
        'titulo' => 'Banco pensado com calma',
        'descricao' => 'Modelo os dados olhando para consistência, consultas e evolução — não apenas para fazer a primeira tela funcionar.',
    ],
    [
        'titulo' => 'Feedback faz parte',
        'descricao' => 'Gosto de revisar, perguntar e melhorar. Código bom também nasce de conversa honesta dentro do time.',
    ],
];

$experiencias = [
    [
        'area' => 'Saúde pública',
        'titulo' => 'Sistemas hospitalares',
        'descricao' => 'Atuação em sistemas hospitalares desenvolvidos para prefeituras, em contextos que exigem organização, responsabilidade e continuidade.',
    ],
    [
        'area' => 'Operações',
        'titulo' => 'Controle de embarcações',
        'descricao' => 'Experiência em diferentes sistemas voltados ao controle de embarcações e aos processos ligados à operação.',
    ],
    [
        'area' => 'Soluções sob medida',
        'titulo' => 'Outros sistemas',
        'descricao' => 'Desenvolvimento de soluções para necessidades específicas de negócio, além dos projetos apresentados neste portfólio.',
    ],
];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfólio de Victor Emanuel, desenvolvedor back-end com PHP, Python e MySQL.">
    <meta name="theme-color" content="#11110f">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:title" content="Victor Emanuel — Desenvolvedor Back-end">
    <meta property="og:description" content="PHP, Python e MySQL para construir software claro, útil e fácil de manter.">
    <meta property="og:image" content="<?= h($imagemSocial) ?>">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Victor Emanuel — Desenvolvedor Back-end">
    <meta name="twitter:description" content="PHP, Python e MySQL para construir software claro, útil e fácil de manter.">
    <meta name="twitter:image" content="<?= h($imagemSocial) ?>">
    <title>Victor Emanuel — Desenvolvedor Back-end</title>
    <link rel="icon" type="image/png" href="assets/logo-ve.png">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="site-header" data-header>
        <a class="brand" href="#inicio" aria-label="Voltar ao início">
            <img class="brand-logo" src="assets/logo-ve.png" alt="" width="512" height="369">
            <span class="brand-copy">
                <strong>Victor Emanuel</strong>
                <small>Back-end developer</small>
            </span>
        </a>

        <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-menu" data-menu-button>
            <span></span><span></span>
            <span class="sr-only">Abrir menu</span>
        </button>

        <nav class="main-menu" id="main-menu" aria-label="Navegação principal" data-menu>
            <a href="#sobre"><span>01</span> Sobre</a>
            <a href="#trabalhos"><span>02</span> Projetos</a>
            <a href="#processo"><span>03</span> Como trabalho</a>
            <a class="nav-contact" href="#contato">Oportunidades <b>↗</b></a>
        </nav>
    </header>

    <main>
        <section class="hero section" id="inicio">
            <div class="hero-kicker reveal">
                <span>Desenvolvedor back-end · PHP &amp; Python</span>
                <span>Brasil · aberto a oportunidades</span>
            </div>

            <h1 class="hero-title reveal">
                Eu transformo<br>
                <span class="title-indent">problema chato</span><br>
                <span class="title-final">em <em>software</em> que funciona.</span>
            </h1>

            <div class="hero-bottom reveal">
                <p>Sou <strong>Victor Emanuel</strong>. Trabalho com PHP, Python e MySQL para transformar regras de negócio em sistemas claros — e escrevo código pensando em quem vai continuar nele depois.</p>
                <a class="circle-link" href="#trabalhos" aria-label="Ver meus trabalhos">
                    <span>ver<br>trabalhos</span>
                    <b>↓</b>
                </a>
            </div>

            <div class="marquee" aria-label="Tecnologias que utilizo">
                <div class="marquee-track">
                    <?php for ($repeticao = 0; $repeticao < 2; $repeticao++): ?>
                        <?php foreach ($tecnologias as $tecnologia): ?>
                            <span><?= h($tecnologia['nome']) ?></span><i>✦</i>
                        <?php endforeach; ?>
                    <?php endfor; ?>
                </div>
            </div>
        </section>

        <section class="about section" id="sobre">
            <div class="section-label reveal"><span>01</span> Sobre mim</div>
            <div class="about-grid">
                <div class="about-statement reveal">
                    <p>Gosto de entender como as coisas funcionam.</p>
                    <p>Depois, faço funcionarem <mark>melhor.</mark></p>
                </div>
                <div class="about-copy reveal">
                    <p>Meu foco é back-end com <strong>PHP, Python e MySQL</strong>. Também trabalho com HTML, CSS e JavaScript, o que me ajuda a entender o fluxo completo e conversar melhor com quem cuida da interface.</p>
                    <p>Minha experiência também passa por <strong>sistemas hospitalares para prefeituras</strong> e por diferentes sistemas de <strong>controle de embarcações</strong>, além de outras soluções voltadas a operações reais.</p>
                    <p>Também coloquei em produção projetos como o PDV da Gostiki e o PersonalFit. Agora procuro uma equipe onde eu possa evoluir, receber feedback e contribuir de verdade — sem deixar de lado bons projetos independentes.</p>
                    <a class="text-link" href="#processo">Como eu contribuo em um time <span>→</span></a>
                </div>
            </div>

            <div class="experience-grid reveal" aria-label="Experiência profissional">
                <?php foreach ($experiencias as $experiencia): ?>
                    <article class="experience-card">
                        <span><?= h($experiencia['area']) ?></span>
                        <h3><?= h($experiencia['titulo']) ?></h3>
                        <p><?= h($experiencia['descricao']) ?></p>
                    </article>
                <?php endforeach; ?>
            </div>

            <div class="stack-grid reveal">
                <?php foreach ($tecnologias as $indice => $tecnologia): ?>
                    <article class="stack-item">
                        <span class="stack-index">0<?= $indice + 1 ?></span>
                        <div>
                            <h3><?= h($tecnologia['nome']) ?></h3>
                            <p><?= h($tecnologia['tipo']) ?></p>
                        </div>
                        <span class="stack-arrow">↗</span>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="work section section-dark" id="trabalhos">
            <div class="section-label section-label-light reveal"><span>02</span> Projetos selecionados</div>
            <div class="work-heading reveal">
                <h2>Código que saiu<br>do editor e <em>foi usado.</em></h2>
                <p>Projetos reais me ensinaram a equilibrar regra de negócio, experiência de uso e manutenção.</p>
            </div>

            <div class="projects">
                <?php foreach ($projetos as $projeto): ?>
                    <article class="project-card <?= $projeto['destaque'] ? 'project-featured' : '' ?> reveal">
                        <div class="project-topline">
                            <span><?= h($projeto['numero']) ?></span>
                            <span><?= h($projeto['tipo']) ?></span>
                        </div>
                        <div class="project-visual" aria-hidden="true">
                            <?php if ($projeto['visual'] === 'gostiki'): ?>
                                <div class="browser-bar"><i></i><i></i><i></i><span>pdv.gostiki</span></div>
                                <div class="pos-mockup">
                                    <div class="pos-main">
                                        <div class="pos-nav"><b>gostiki.</b><span>PDV</span></div>
                                        <div class="pos-products">
                                            <small>Escolha os produtos</small>
                                            <strong>Venda rápida,<br>operação leve.</strong>
                                            <div class="product-grid"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                                        </div>
                                    </div>
                                    <div class="pos-cart"><small>Pedido atual</small><span></span><span></span><span></span><div><b>Total</b><i>Finalizar venda</i></div></div>
                                </div>
                            <?php else: ?>
                                <div class="browser-bar"><i></i><i></i><i></i><span>personalfit.app</span></div>
                                <div class="fit-mockup">
                                    <div class="fit-sidebar"><b>PF</b><i></i><i></i><i></i><i></i></div>
                                    <div class="fit-content">
                                        <small>PersonalFit · visão geral</small>
                                        <strong>Acompanhamento<br>sem complicação.</strong>
                                        <div class="fit-stats"><span><b>Hoje</b><i></i></span><span><b>Semana</b><i></i></span><span><b>Evolução</b><i></i></span></div>
                                        <div class="fit-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="project-info">
                            <h3><?= h($projeto['titulo']) ?></h3>
                            <p><?= h($projeto['descricao']) ?></p>
                            <div class="tag-list">
                                <?php foreach ($projeto['tags'] as $tag): ?>
                                    <span><?= h($tag) ?></span>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="process section" id="processo">
            <div class="section-label reveal"><span>03</span> No time</div>
            <div class="process-layout">
                <div class="process-title reveal">
                    <h2>Trabalho bom não<br>termina no <em>commit.</em></h2>
                    <p>Meu jeito de contribuir, aprender e manter o projeto saudável.</p>
                </div>
                <div class="process-list">
                    <?php foreach ($principios as $indice => $principio): ?>
                        <article class="process-item reveal">
                            <span>0<?= $indice + 1 ?></span>
                            <div>
                                <h3><?= h($principio['titulo']) ?></h3>
                                <p><?= h($principio['descricao']) ?></p>
                            </div>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <section class="contact section section-accent" id="contato">
            <div class="contact-eyebrow reveal">Empresas · equipes · projetos independentes</div>
            <h2 class="reveal">Aberto a boas<br><em>oportunidades.</em></h2>
            <div class="contact-bottom reveal">
                <p>Se você procura alguém que goste de entender o problema, aprender rápido e cuidar do código, vale a conversa.</p>
                <button class="contact-button" type="button" data-copy-intro>
                    <span data-copy-label>Copiar resumo profissional</span>
                    <b>↗</b>
                </button>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <a class="brand footer-brand" href="#inicio" aria-label="Victor Emanuel — voltar ao início"><img class="brand-logo" src="assets/logo-ve.png" alt="" width="512" height="369"></a>
        <p>Victor Emanuel — desenvolvedor back-end</p>
        <p>Aberto a oportunidades e projetos selecionados · <?= $anoAtual ?></p>
    </footer>

    <div class="toast" role="status" aria-live="polite" data-toast>Resumo profissional copiado.</div>
    <script src="script.js" defer></script>
</body>
</html>
