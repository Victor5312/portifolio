<script setup>
import { profile } from "./data/perfil";
import { gsap } from "gsap";

const menuOpen = ref(false);
const dark = ref(false);
const motion = ref(true);
const progressoCampo = ref(0);
const selectedFilter = ref("Todas");
const selectedProject = ref(null);
const dialog = ref(null);
const briefDialog = ref(null);
const brief = ref("");
const saved = ref(false);
const filters = ["Todas", "Front-end", "Back-end", "Banco de dados"];
const technologies = [
  {
    name: "PHP",
    category: "Back-end",
    label: "Aplicações & lógica de servidor",
    mark: "<?>",
  },
  {
    name: "Python",
    category: "Back-end",
    label: "Automação & desenvolvimento web",
    mark: "Py",
  },
  {
    name: "Flask",
    category: "Back-end",
    label: "APIs & aplicações leves",
    mark: "Fl",
  },
  {
    name: "Django",
    category: "Back-end",
    label: "Aplicações web estruturadas",
    mark: "Dj",
  },
  {
    name: "MySQL",
    category: "Banco de dados",
    label: "Dados & consultas relacionais",
    mark: "My",
  },
  {
    name: "JavaScript",
    category: "Front-end",
    label: "Interatividade & comportamento",
    mark: "Js",
  },
  {
    name: "HTML",
    category: "Front-end",
    label: "Estrutura & semântica",
    mark: "</>",
  },
  {
    name: "CSS",
    category: "Front-end",
    label: "Design & responsividade",
    mark: "#",
  },
];
const filtered = computed(() =>
  technologies.filter(
    (t) =>
      selectedFilter.value === "Todas" || t.category === selectedFilter.value,
  ),
);
const projects = [
  {
    id: "01",
    name: "Código com intenção.",
    type: "ESTE PORTFÓLIO",
    tags: "NUXT · VUE · GSAP",
    class: "portfolio",
    title: "Uma identidade feita de código.",
    description:
      "Este portfólio une uma interface responsiva, navegação por seções, transições com GSAP e um campo procedural em Three.js. Uma experiência original inspirada na linguagem visual da Emotion Agency.",
    stack: ["Nuxt", "Vue", "JavaScript", "HTML", "CSS", "GSAP", "Three.js"],
  },
  {
    id: "02",
    name: "Natureza em movimento.",
    type: "EXPERIMENTO INTERATIVO",
    tags: "THREE.JS · WEBGL",
    class: "experimento",
    title: "Um campo que ganha vida.",
    description:
      "Um percurso em tempo real por colinas, um riacho e grama ao vento. Role para caminhar pelo campo; mova o mouse para afastar as folhas desde o primeiro instante. Movimentos rápidos criam rajadas mais fortes. Você pode pausar ou pular o percurso a qualquer momento.",
    stack: ["Three.js", "WebGL", "JavaScript"],
  },
];
function openProject(project) {
  selectedProject.value = project;
  nextTick(() => dialog.value.showModal());
}
function closeMenu() {
  menuOpen.value = false;
}
function navegar(evento) {
  const link = evento.target.closest('a[href^="#"]');
  if (!link) return;
  const destino = document.getElementById(link.getAttribute("href").slice(1));
  if (!destino) return;
  evento.preventDefault();
  destino.scrollIntoView({ behavior: motion.value ? "smooth" : "instant" });
}
function toggleTheme() {
  dark.value = !dark.value;
  try {
    localStorage.setItem("victor-theme", dark.value ? "dark" : "light");
  } catch {}
}
function downloadBrief() {
  if (!brief.value.trim()) return;
  const blob = new Blob(
    [
      `IDEIA DE PROJETO\n\n${brief.value.trim()}\n\nRascunho criado no portfólio de Victor. Este arquivo não foi enviado.\n`,
    ],
    { type: "text/plain;charset=utf-8" },
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "minha-ideia.txt";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  saved.value = true;
}
let context;
onMounted(() => {
  try {
    dark.value = localStorage.getItem("victor-theme") === "dark";
  } catch {}
  motion.value = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (motion.value)
    context = gsap.context(() => {
      gsap.from(".titulo-abertura > span", {
        y: 75,
        opacity: 0,
        duration: 1.2,
        stagger: 0.13,
        ease: "power3.out",
      });
      gsap.from(".introducao-abertura, .rodape-abertura", {
        opacity: 0,
        y: 18,
        duration: 1,
        delay: 0.4,
        clearProps: "opacity,transform",
      });
    });
});
onBeforeUnmount(() => context?.revert());
</script>

<template>
  <div
    class="site"
    :class="{ escuro: dark, 'movimento-desativado': !motion }"
    @click="navegar"
  >
    <a class="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>
    <header class="cabecalho">
      <a class="marca" href="#inicio" aria-label="Victor, início"
        >victor<span class="simbolo-marca">✳</span></a
      >
      <p class="descricao-cabecalho">
        DESENVOLVIMENTO WEB<br />& EXPERIÊNCIAS DIGITAIS
      </p>
      <nav class="navegacao-principal" aria-label="Navegação principal">
        <a href="#sobre">Sobre <sup>01</sup></a
        ><a href="#tecnologias">Tecnologias <sup>02</sup></a
        ><a href="#projetos">Projetos <sup>03</sup></a>
      </nav>
      <a class="link-contato" href="#contato">Vamos conversar <span>↗</span></a>
      <button
        class="alternar-menu"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-controls="menu-movel"
      >
        {{ menuOpen ? "Fechar −" : "Menu +" }}
      </button>
    </header>
    <nav
      v-if="menuOpen"
      id="menu-movel"
      class="navegacao-movel"
      aria-label="Navegação móvel"
    >
      <a
        v-for="(label, index) in [
          'Sobre',
          'Tecnologias',
          'Projetos',
          'Contato',
        ]"
        :key="label"
        :href="'#' + label.toLowerCase()"
        @click="closeMenu"
        ><sup>0{{ index + 1 }}</sup
        >{{ label }} ↗</a
      >
    </nav>

    <main id="conteudo">
      <div id="inicio" class="percurso-campo">
        <section
          class="abertura"
          :style="{ '--progresso': progressoCampo }"
          aria-label="Percurso interativo pelo campo"
        >
          <div class="introducao-abertura">
            <span class="sobretitulo"
              ><i class="ponto-destaque"></i> OLÁ, EU SOU O VICTOR</span
            >
            <p>Entre boas ideias<br />e experiências reais, existe código.</p>
          </div>
          <div class="arte-abertura">
            <ClientOnly
              ><Campo :movimento="motion" @progresso="progressoCampo = $event"
            /></ClientOnly>
          </div>
          <div class="legenda-arte">
            <span>UM CAMPO DE POSSIBILIDADES</span
            ><span>ROLE PARA CAMINHAR. MOVA O MOUSE PARA EXPLORAR.</span>
          </div>
          <h1 class="titulo-abertura">
            <span>Um pouco</span
            ><span class="segunda-linha"
              ><em>do que</em
              ><span class="asterisco-titulo" aria-hidden="true">✳</span></span
            ><span>eu <em>faço.</em></span>
          </h1>
          <div
            class="mensagem-percurso"
            :class="{
              visivel: progressoCampo > 0.2 && progressoCampo < 0.94,
              'mensagem-clareira': progressoCampo > 0.58,
            }"
          >
            <span class="sobretitulo">{{
              progressoCampo < 0.58
                ? "01 / EXPLORE"
                : progressoCampo < 0.7
                  ? "02 / RESPIRE"
                  : progressoCampo < 0.83
                    ? "03 / AMPLIE"
                    : "04 / NOVOS ÂNGULOS"
            }}</span>
            <h2 v-if="progressoCampo < 0.58">
              Fique à vontade.<br /><em>A casa é sua.</em>
            </h2>
            <h2 v-else-if="progressoCampo < 0.7">
              Pode ir<br /><em>sem pressa.</em>
            </h2>
            <h2 v-else-if="progressoCampo < 0.83">
              De longe,<br /><em>tudo muda.</em>
            </h2>
            <h2 v-else>Agora, vamos<br /><em>aos projetos.</em></h2>
          </div>
          <div class="controles-percurso">
            <span
              >PERCURSO
              {{
                String(Math.round(progressoCampo * 100)).padStart(3, "0")
              }}%</span
            >
            <div class="barra-percurso" aria-hidden="true">
              <span :style="{ transform: `scaleX(${progressoCampo})` }"></span>
            </div>
            <button @click="motion = !motion" :aria-pressed="!motion">
              {{ motion ? "Pausar movimento" : "Retomar movimento" }}
            </button>
            <a href="#sobre">Pular percurso ↗</a>
          </div>
          <div class="rodape-abertura">
            <a class="link-circular" href="#projetos"
              ><span class="circulo">↗</span> Explore meu trabalho</a
            >
            <p>
              DO BACK-END À INTERFACE.<br />DA PRIMEIRA LINHA AO ÚLTIMO DETALHE.
            </p>
            <a href="#sobre" class="link-rolagem"
              >ROLE PARA DESCOBRIR <span>↓</span></a
            >
          </div>
          <div class="indice-abertura">
            <span>PORTFÓLIO PESSOAL</span
            ><span>CRIATIVIDADE ENCONTRA TECNOLOGIA</span
            ><span>© {{ new Date().getFullYear() }}</span>
          </div>
        </section>
      </div>

      <section id="sobre" class="sobre espacamento-secao">
        <div class="rotulo-secao">
          <span>01 / SOBRE MIM</span><span>IDEIAS → CÓDIGO → EXPERIÊNCIAS</span>
        </div>
        <div class="composicao-sobre">
          <div class="simbolo-sobre" aria-hidden="true">↳</div>
          <div>
            <h2>Por trás de cada tela,<br />uma <em>boa ideia.</em></h2>
            <div class="texto-sobre">
              <p>{{ profile.bio }}</p>
              <p>
                Acredito no encontro entre o que funciona bem e o que faz
                sentir. Código com propósito, atenção aos detalhes e espaço para
                experimentar.
              </p>
            </div>
            <a href="#tecnologias" class="link-texto"
              >Conheça meu universo de tecnologias <span>↘</span></a
            >
          </div>
        </div>
      </section>

      <section id="tecnologias" class="tecnologias espacamento-secao">
        <div class="rotulo-secao">
          <span>02 / TECNOLOGIAS</span
          ><span>AS FERRAMENTAS. AS POSSIBILIDADES.</span>
        </div>
        <div class="cabecalho-secao">
          <h2>O que uso<br /><em>para criar.</em></h2>
          <p>
            Da estrutura visual à lógica de negócio.<br />Tecnologias que fazem
            parte do meu universo.
          </p>
        </div>
        <div class="filtros" role="group" aria-label="Filtrar tecnologias">
          <button
            v-for="filter in filters"
            :key="filter"
            :aria-pressed="selectedFilter === filter"
            :class="{ ativo: selectedFilter === filter }"
            @click="selectedFilter = filter"
          >
            {{ filter }}<span v-if="filter === 'Todas'">08</span>
          </button>
        </div>
        <div class="grade-tecnologias">
          <article
            v-for="(tech, index) in filtered"
            :key="tech.name"
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">{{ tech.mark }}</span
              ><span class="categoria-tecnologia">{{ tech.category }}</span>
            </div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.label }}</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section id="projetos" class="projetos espacamento-secao">
        <div class="rotulo-secao">
          <span>03 / PROJETOS & EXPLORAÇÕES</span
          ><span>FEITO PARA EXPLORAR</span>
        </div>
        <div class="cabecalho-secao">
          <h2>Do conceito<br />ao <em>primeiro clique.</em></h2>
          <p>
            Um portfólio em construção constante.<br />Conheça este site e o
            experimento que vive nele.
          </p>
        </div>
        <div class="grade-projetos">
          <button
            v-for="project in projects"
            :key="project.id"
            class="cartao-projeto"
            @click="openProject(project)"
            :aria-label="'Ver detalhes: ' + project.name"
          >
            <div class="visual-projeto" :class="project.class">
              <div class="topo-visual">
                <span>V / {{ project.id }}</span
                ><span>{{ project.type }}</span>
              </div>
              <template v-if="project.id === '01'"
                ><div class="miniatura-site">
                  <div class="miniatura-navegacao">
                    victor✳ <span>DESIGN & CÓDIGO ↗</span>
                  </div>
                  <div class="miniatura-titulo">
                    Ideias que<br />ganham <em>vida.</em>
                  </div>
                  <div class="miniatura-orbita" aria-hidden="true"></div>
                  <div class="miniatura-rodape">
                    DO CONCEITO AO DIGITAL. <span>↗</span>
                  </div>
                </div></template
              ><template v-else
                ><div class="arte-geometrica" aria-hidden="true">
                  <span
                    v-for="n in 12"
                    :key="n"
                    :style="{ transform: `rotate(${n * 15}deg)` }"
                  ></span>
                </div>
                <span class="rotulo-experimento"
                  >EXPERIMENTO / 001<br />FOLHAS × VENTO</span
                ></template
              ><span class="abrir-projeto">↗</span>
            </div>
            <div class="informacoes-projeto">
              <h3>{{ project.name }}</h3>
              <span>{{ project.tags }}</span>
            </div>
          </button>
        </div>
      </section>

      <section class="feito-com espacamento-secao">
        <div class="rotulo-secao">
          <span>NOS BASTIDORES</span><span>ESTE SITE TAMBÉM É UM PROJETO.</span>
        </div>
        <div class="conteudo-construcao">
          <h2>Feito com código.<br /><em>E um pouco de curiosidade.</em></h2>
          <div>
            <p>A experiência que você está explorando foi construída com:</p>
            <div class="etiquetas-tecnologias">
              <span
                v-for="tech in [
                  'Nuxt',
                  'Vue',
                  'JavaScript',
                  'HTML',
                  'CSS',
                  'GSAP',
                  'Three.js',
                  'WebGL',
                ]"
                :key="tech"
                >{{ tech }}</span
              >
            </div>
            <p class="nota-construcao">
              Nuxt & Vue na estrutura. GSAP no movimento.<br />Three.js & WebGL
              na dimensão extra.
            </p>
          </div>
        </div>
      </section>

      <footer id="contato" class="rodape espacamento-secao">
        <div class="rotulo-secao">
          <span>04 / O PRÓXIMO PASSO</span
          ><span class="destaque-rodape">● UMA IDEIA PODE SER O COMEÇO.</span>
        </div>
        <div class="titulo-rodape">
          <h2>Vamos criar<br />algo <em>interessante?</em></h2>
          <a
            v-if="profile.email"
            :href="'mailto:' + profile.email"
            class="seta-grande"
            aria-label="Enviar e-mail"
            >↗</a
          ><button
            v-else
            class="seta-grande"
            aria-label="Preparar uma ideia de projeto"
            @click="briefDialog.showModal()"
          >
            ↗
          </button>
        </div>
        <div class="contato-rodape">
          <p>
            Todo projeto começa com uma conversa.<br />E toda conversa, com uma
            boa ideia.
          </p>
          <a
            v-if="profile.email"
            :href="'mailto:' + profile.email"
            class="link-texto"
            >{{ profile.email }} ↗</a
          ><button v-else class="link-texto" @click="briefDialog.showModal()">
            Prepare sua ideia <span>↗</span>
          </button>
          <div class="redes-sociais">
            <a
              v-if="profile.github"
              :href="profile.github"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub ↗</a
            ><a
              v-if="profile.linkedin"
              :href="profile.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn ↗</a
            >
          </div>
        </div>
        <div class="base-rodape">
          <a class="marca" href="#inicio"
            >victor<span class="simbolo-marca">✳</span></a
          ><span
            >© {{ new Date().getFullYear() }} VICTOR · FEITO COM INTENÇÃO.</span
          >
          <div class="preferencias">
            <button @click="toggleTheme" :aria-pressed="dark">
              {{ dark ? "◑ Tema escuro" : "◐ Tema claro" }}</button
            ><button @click="motion = !motion" :aria-pressed="motion">
              Movimento {{ motion ? "ativado" : "desativado" }}</button
            ><a href="#inicio" aria-label="Voltar ao topo">↑</a>
          </div>
        </div>
      </footer>
    </main>

    <dialog
      ref="dialog"
      :aria-label="selectedProject?.title || 'Detalhes do projeto'"
      class="janela-detalhes"
      @click="
        (e) => {
          if (e.target === dialog) dialog.close();
        }
      "
    >
      <div v-if="selectedProject" class="conteudo-janela">
        <button
          class="fechar-janela"
          @click="dialog.close()"
          aria-label="Fechar detalhes"
        >
          ✕</button
        ><span class="sobretitulo"
          >{{ selectedProject.type }} / {{ selectedProject.id }}</span
        >
        <h2>{{ selectedProject.title }}</h2>
        <p>{{ selectedProject.description }}</p>
        <div class="etiquetas-tecnologias">
          <span v-for="tech in selectedProject.stack" :key="tech">{{
            tech
          }}</span>
        </div>
        <a class="link-circular" href="#inicio" @click="dialog.close()"
          ><span class="circulo">↗</span> Explorar a experiência</a
        >
      </div>
    </dialog>
    <dialog
      ref="briefDialog"
      aria-label="Preparar uma ideia de projeto"
      class="janela-detalhes"
      @click="
        (e) => {
          if (e.target === briefDialog) briefDialog.close();
        }
      "
    >
      <form class="conteudo-janela" @submit.prevent="downloadBrief">
        <button
          type="button"
          class="fechar-janela"
          @click="briefDialog.close()"
          aria-label="Fechar rascunho"
        >
          ✕</button
        ><span class="sobretitulo">DO PRIMEIRO INSIGHT AO PRÓXIMO PASSO</span>
        <h2>Qual é a <em>sua ideia?</em></h2>
        <p>
          Os canais de contato serão adicionados em breve. Por enquanto,
          organize sua ideia e salve um rascunho no seu dispositivo.
        </p>
        <label for="ideia">O que você quer construir?</label
        ><textarea
          id="ideia"
          v-model="brief"
          required
          maxlength="5000"
          rows="5"
          placeholder="Conte sobre o projeto, o objetivo e o que você imagina…"
          @input="saved = false"
        ></textarea
        ><button class="salvar-ideia" type="submit">
          Salvar minha ideia <span>↓</span>
        </button>
        <p class="nota-formulario" role="status">
          {{
            saved
              ? "Rascunho preparado para download. Nenhuma mensagem foi enviada."
              : "Seu texto permanece no navegador. Nada é enviado."
          }}
        </p>
      </form>
    </dialog>
  </div>
</template>
