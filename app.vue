<script setup>
import { gsap } from "gsap";
import rajaScreenshot from "~/assets/projetos/rajahub-inicio.jpg";
import alfredLogo from "~/assets/marcas/alfred.png";
import rajaLogo from "~/assets/marcas/rajahub.png";
import gostikiLogo from "~/assets/marcas/gostiki.png";
import iconePhp from "~/assets/tecnologias/php.svg";
import iconePython from "~/assets/tecnologias/python.svg";
import iconeDjango from "~/assets/tecnologias/django.svg";
import iconeFlask from "~/assets/tecnologias/flask.svg";
import iconeMysql from "~/assets/tecnologias/mysql.svg";
import iconeJs from "~/assets/tecnologias/javascript.svg";
import iconePostgres from "~/assets/tecnologias/postgresql.svg";

const icones = [
  iconePhp,
  iconePython,
  iconeJs,
  iconeMysql,
  iconeDjango,
  iconeFlask,
  iconePostgres,
];

const camadas = [
  {
    id: "tela",
    nome: "Na tela",
    texto: "O que a pessoa vê e toca.",
    itens: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "servidor",
    nome: "No servidor",
    texto: "As regras do negócio e as APIs.",
    itens: ["PHP", "Python", "Flask", "Django"],
  },
  {
    id: "banco",
    nome: "No banco",
    texto: "Onde os dados ficam guardados.",
    itens: ["MySQL", "PostgreSQL"],
  },
];

const marcas = [
  { nome: "Alfred", logo: alfredLogo },
  { nome: "RajaHub", logo: rajaLogo, invertida: true },
  { nome: "Gostiki", logo: gostikiLogo },
  { nome: "PersonalFit" },
];

const paradas = [
  { nome: "Riacho", em: 0.3 },
  { nome: "Clareira", em: 0.64 },
  { nome: "De longe", em: 0.8 },
  { nome: "Entardecer", em: 0.97 },
];

const logosPaused = ref(false);
const menuOpen = ref(false);
const dark = ref(false);
const motion = ref(true);
const progressoCampo = ref(0);
const camadaAtiva = ref(null);
const selectedProject = ref(null);
const dialog = ref(null);
const briefDialog = ref(null);
const brief = ref("");
const saved = ref(false);
const cabecalhoSolido = ref(false);
const cabecalhoOculto = ref(false);

const frase = computed(() => {
  const p = progressoCampo.value;
  if (p < 0.58) return { id: 1, a: "Fique à vontade.", b: "A casa é sua." };
  if (p < 0.7) return { id: 2, a: "Pode ir", b: "sem pressa." };
  if (p < 0.83) return { id: 3, a: "De longe,", b: "tudo muda." };
  return { id: 4, a: "Agora, vamos", b: "aos projetos." };
});

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
function irParaParada(fracao) {
  const percurso = document.querySelector(".percurso-campo");
  window.scrollTo({
    top:
      percurso.offsetTop + (percurso.offsetHeight - window.innerHeight) * fracao,
    behavior: motion.value ? "smooth" : "instant",
  });
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

// Cabeçalho: some ao descer, volta ao subir e ganha fundo depois do percurso.
let ultimaRolagem = 0;
function acompanharCabecalho() {
  const atual = window.scrollY;
  const percurso = document.querySelector(".percurso-campo");
  cabecalhoSolido.value =
    percurso.offsetHeight > 0 &&
    atual > percurso.offsetTop + percurso.offsetHeight - 90;
  if (Math.abs(atual - ultimaRolagem) < 6) return;
  cabecalhoOculto.value = atual > ultimaRolagem && atual > 200 && !menuOpen.value;
  ultimaRolagem = atual;
}

// Cartões 3D: seguem o ponteiro; os elementos internos têm alturas diferentes.
function inclinarCapa(evento) {
  if (!motion.value || evento.pointerType === "touch") return;
  const capa = evento.currentTarget;
  const area = capa.getBoundingClientRect();
  const x = (evento.clientX - area.left) / area.width - 0.5;
  const y = (evento.clientY - area.top) / area.height - 0.5;
  capa.style.setProperty("--giro-x", `${(-y * 11).toFixed(2)}deg`);
  capa.style.setProperty("--giro-y", `${(x * 13).toFixed(2)}deg`);
}
function soltarCapa(evento) {
  evento.currentTarget.style.setProperty("--giro-x", "0deg");
  evento.currentTarget.style.setProperty("--giro-y", "0deg");
}

let contexto;
let pararOrbita;
let ScrollTrigger;

// Logos giram em um anel 3D de verdade: profundidade define tamanho e ordem.
function iniciarOrbita() {
  const palco = document.querySelector(".orbita");
  const itens = gsap.utils.toArray(".orbita-item");
  if (!palco || !itens.length) return () => {};
  const giro = { alvoX: 0, alvoY: 0, x: 0, y: 0 };
  const mover = (evento) => {
    const area = palco.getBoundingClientRect();
    giro.alvoX = ((evento.clientX - area.left) / area.width - 0.5) * 0.5;
    giro.alvoY = ((evento.clientY - area.top) / area.height - 0.5) * 0.35;
  };
  const posicionar = (instante) => {
    giro.x += (giro.alvoX - giro.x) * 0.06;
    giro.y += (giro.alvoY - giro.y) * 0.06;
    const raio = palco.offsetWidth * 0.46;
    itens.forEach((item, i) => {
      const a = instante * 0.32 + (i / itens.length) * Math.PI * 2 + giro.x;
      const fundo = Math.sin(a);
      const inclinacao = 0.34 + giro.y;
      const escala = 0.68 + (fundo + 1) * 0.26;
      item.style.transform = `translate3d(${(Math.cos(a) * raio).toFixed(1)}px, ${(fundo * raio * inclinacao).toFixed(1)}px, 0) scale(${escala.toFixed(3)})`;
      item.style.zIndex = fundo > 0 ? 3 : 1;
      item.style.opacity = (0.55 + (fundo + 1) * 0.225).toFixed(2);
    });
  };
  posicionar(0.6);
  if (!motion.value) return () => {};
  const passo = (instante) => posicionar(instante);
  gsap.ticker.add(passo);
  window.addEventListener("pointermove", mover, { passive: true });
  return () => {
    gsap.ticker.remove(passo);
    window.removeEventListener("pointermove", mover);
  };
}

function iniciarAnimacoes() {
  pararOrbita = iniciarOrbita();
  if (!motion.value || !ScrollTrigger) return;
  contexto = gsap.context(() => {
    gsap.utils.toArray(".revelar").forEach((elemento) => {
      gsap.from(elemento, {
        y: 46,
        rotateX: -14,
        transformOrigin: "50% 100%",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: elemento, start: "top 88%", once: true },
      });
    });

    // A pilha se abre conforme a rolagem: tela, servidor e banco se separam.
    gsap.fromTo(
      ".pilha",
      { "--abertura": 0, "--giro-pilha": "-18deg" },
      {
        "--abertura": 1,
        "--giro-pilha": "-40deg",
        ease: "none",
        scrollTrigger: {
          trigger: ".tecnologias",
          start: "top 75%",
          end: "center 45%",
          scrub: 0.8,
        },
      },
    );

    gsap.utils.toArray(".projeto").forEach((projeto) => {
      gsap.from(projeto.querySelector(".capa"), {
        rotateX: 22,
        y: 90,
        scale: 0.93,
        ease: "none",
        scrollTrigger: {
          trigger: projeto,
          start: "top 98%",
          end: "top 45%",
          scrub: 0.6,
        },
      });
    });

    gsap.fromTo(
      ".chamada-texto",
      { rotateX: 42, y: 70, opacity: 0.2 },
      {
        rotateX: 0,
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".rodape",
          start: "top 92%",
          end: "top 35%",
          scrub: 0.6,
        },
      },
    );
  });
}
function pararAnimacoes() {
  pararOrbita?.();
  pararOrbita = null;
  contexto?.revert();
  contexto = null;
}

watch(motion, async () => {
  pararAnimacoes();
  await nextTick();
  iniciarAnimacoes();
});

onMounted(async () => {
  try {
    dark.value = localStorage.getItem("victor-theme") === "dark";
  } catch {}
  motion.value = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.addEventListener("scroll", acompanharCabecalho, { passive: true });
  window.addEventListener("resize", acompanharCabecalho, { passive: true });
  acompanharCabecalho();
  // Carregado só no navegador; o conteúdo já está visível sem esse script.
  ({ ScrollTrigger } = await import("gsap/ScrollTrigger"));
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  iniciarAnimacoes();
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", acompanharCabecalho);
  window.removeEventListener("resize", acompanharCabecalho);
  pararAnimacoes();
});
</script>

<template>
  <div
    class="site"
    :class="{ escuro: dark, 'movimento-desativado': !motion }"
    @click="navegar"
  >
    <a class="pular-conteudo" href="#sobre">Pular para o conteúdo</a>
    <header
      class="cabecalho"
      :class="{ solido: cabecalhoSolido, oculto: cabecalhoOculto }"
    >
      <a class="marca" href="#inicio" aria-label="Victor, início">victor<i>.</i></a>
      <nav class="navegacao-principal" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
      <button
        class="alternar-menu"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-controls="menu-movel"
      >
        {{ menuOpen ? "Fechar" : "Menu" }}
      </button>
    </header>
    <nav
      v-if="menuOpen"
      id="menu-movel"
      class="navegacao-movel"
      aria-label="Navegação móvel"
    >
      <a href="#sobre" @click="closeMenu">Sobre</a>
      <a href="#tecnologias" @click="closeMenu">Tecnologias</a>
      <a href="#projetos" @click="closeMenu">Projetos</a>
      <a href="#contato" @click="closeMenu">Contato</a>
    </nav>

    <main id="conteudo">
      <div id="inicio" class="percurso-campo">
        <section
          class="abertura"
          :style="{ '--progresso': progressoCampo }"
          aria-label="Passeio pelo campo em 3D"
        >
          <div class="arte-abertura">
            <ClientOnly
              ><Campo :movimento="motion" @progresso="progressoCampo = $event"
            /></ClientOnly>
          </div>
          <div class="apresentacao">
            <h1 class="titulo-abertura">
              <span>Oi, eu sou</span><span>o Victor.</span>
            </h1>
            <p class="subtitulo-abertura">
              Desenvolvedor web. Faço sites e sistemas, da tela ao banco de
              dados. Role a página: tem um caminho até os projetos.
            </p>
          </div>
          <div
            class="mensagem-percurso"
            :class="{ visivel: progressoCampo > 0.2 && progressoCampo < 0.97 }"
          >
            <Transition name="frase" mode="out-in">
              <h2 :key="frase.id">
                <span>{{ frase.a }}</span
                ><span>{{ frase.b }}</span>
              </h2>
            </Transition>
          </div>
          <div class="controles-percurso">
            <div class="paradas" role="group" aria-label="Paradas do passeio">
              <button
                v-for="parada in paradas"
                :key="parada.nome"
                :class="{ passou: progressoCampo >= parada.em - 0.01 }"
                @click="irParaParada(parada.em)"
              >
                {{ parada.nome }}
              </button>
              <span
                class="barra-percurso"
                aria-hidden="true"
                :style="{ transform: `scaleX(${progressoCampo})` }"
              ></span>
            </div>
            <button
              class="pausar"
              @click="motion = !motion"
              :aria-pressed="!motion"
            >
              {{ motion ? "Pausar" : "Retomar" }}
            </button>
            <a href="#sobre" class="pular">Pular o passeio</a>
          </div>
          <div
            class="cortina"
            aria-hidden="true"
            :style="{ opacity: Math.max(0, (progressoCampo - 0.975) / 0.025) }"
          ></div>
        </section>
      </div>

      <section id="sobre" class="sobre secao">
        <div class="orbita-area revelar" aria-hidden="true">
          <div class="orbita">
            <span class="orbita-centro">v.</span>
            <span v-for="icone in icones" :key="icone" class="orbita-item"
              ><img :src="icone" alt="" width="44" height="44"
            /></span>
          </div>
        </div>
        <div class="sobre-texto">
          <h2 class="revelar">Entre sites<br /><u>e sistemas</u></h2>
          <p class="revelar">
            Sou o Victor, desenvolvedor web. Já trabalhei em sites para empresas
            e sistemas de gestão, cuidando tanto das telas quanto da lógica e do
            banco de dados. Aqui reuni alguns desses projetos para mostrar um
            pouco do que faço.
          </p>
          <p class="revelar">
            Gosto de entender como as coisas funcionam antes de sair
            programando. O que precisa aparecer na tela? O que dá para
            simplificar? É a partir dessas perguntas que começo a trabalhar.
          </p>
        </div>
      </section>

      <section
        id="marcas"
        class="faixa-marcas"
        aria-label="Marcas e projetos em que trabalhei"
      >
        <div class="cabecalho-marcas">
          <p>Marcas e projetos em que trabalhei</p>
          <button
            v-if="motion"
            @click="logosPaused = !logosPaused"
            :aria-pressed="logosPaused"
          >
            {{ logosPaused ? "Girar de novo" : "Parar de girar" }}
          </button>
        </div>
        <div class="cilindro-palco">
          <div class="cilindro" :class="{ pausado: logosPaused }">
            <div
              v-for="n in 8"
              :key="n"
              class="face-marca"
              :style="{ '--face': n - 1 }"
              :aria-hidden="n > 4"
            >
              <img
                v-if="marcas[(n - 1) % 4].logo"
                :src="marcas[(n - 1) % 4].logo"
                :alt="n > 4 ? '' : marcas[(n - 1) % 4].nome"
                :class="{ invertida: marcas[(n - 1) % 4].invertida }"
                loading="lazy"
              />
              <span v-else>{{ marcas[(n - 1) % 4].nome }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologias" class="tecnologias secao">
        <div class="pilha-area" aria-hidden="true">
          <div class="pilha">
            <div
              v-for="(camada, i) in camadas"
              :key="camada.id"
              class="placa"
              :class="[`placa-${camada.id}`, { ativa: camadaAtiva === i }]"
              :style="{ '--nivel': 1 - i }"
            >
              <b>{{ camada.nome }}</b>
              <span v-for="item in camada.itens" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="tecnologias-texto">
          <h2 class="revelar">O que eu <u>uso</u></h2>
          <p class="revelar">
            Um sistema tem camadas, e eu trabalho em todas elas.
          </p>
          <ul class="lista-camadas">
            <li
              v-for="(camada, i) in camadas"
              :key="camada.id"
              class="revelar"
              @pointerenter="camadaAtiva = i"
              @pointerleave="camadaAtiva = null"
            >
              <h3>{{ camada.nome }}</h3>
              <p>{{ camada.texto }}</p>
              <p class="itens-camada">{{ camada.itens.join(", ") }}</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="projetos" class="projetos secao">
        <div class="cabecalho-secao">
          <h2 class="revelar">Alguns <u>trabalhos</u></h2>
          <p class="revelar">
            Sites para apresentar uma empresa e sistemas para organizar a
            rotina. Clique em um projeto para ver mais.
          </p>
        </div>
        <div class="grade-projetos">
          <article class="projeto projeto-largo">
            <button
              class="capa capa-raja"
              aria-label="Ver detalhes: RajaHub"
              @click="openProject('RajaHub')"
              @pointermove="inclinarCapa"
              @pointerleave="soltarCapa"
            >
              <span class="capa-fundo"></span>
              <img
                class="capa-print"
                :src="rajaScreenshot"
                alt="Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação."
                loading="lazy"
                width="1265"
                height="712"
              />
            </button>
            <h3>RajaHub</h3>
            <p>
              Site do RajaHub, que apresenta suas frentes de atuação e conecta
              empreendedores e investidores. WordPress, PHP e JavaScript.
            </p>
          </article>
          <article class="projeto projeto-estreito">
            <button
              class="capa capa-alfred"
              aria-label="Ver detalhes: Alfred"
              @click="openProject('Alfred')"
              @pointermove="inclinarCapa"
              @pointerleave="soltarCapa"
            >
              <span class="capa-fundo"></span>
              <img class="capa-logo" :src="alfredLogo" alt="" loading="lazy" />
              <span class="capa-numero">27 cidades</span>
            </button>
            <h3>Alfred</h3>
            <p>
              Sistema hospitalar utilizado em 27 cidades, em cujo
              desenvolvimento participei. PHP, MySQL e JavaScript.
            </p>
          </article>
          <article class="projeto projeto-estreito">
            <button
              class="capa capa-gostiki"
              aria-label="Ver detalhes: Gostiki"
              @click="openProject('Gostiki')"
              @pointermove="inclinarCapa"
              @pointerleave="soltarCapa"
            >
              <span class="capa-fundo"></span>
              <img class="capa-logo" :src="gostikiLogo" alt="" loading="lazy" />
              <span class="capa-numero">Do balcão ao delivery</span>
            </button>
            <h3>Gostiki</h3>
            <p>
              Sistema para a Gostiki Açaí &amp; Sorvete, com vendas, pedidos e
              gestão de lojas. PHP, MySQL e JavaScript.
            </p>
          </article>
          <article class="projeto projeto-largo">
            <button
              class="capa capa-personal"
              aria-label="Ver detalhes: PersonalFit"
              @click="openProject('PersonalFit')"
              @pointermove="inclinarCapa"
              @pointerleave="soltarCapa"
            >
              <span class="capa-fundo"></span>
              <span class="capa-nome">PersonalFit</span>
              <span class="capa-numero">Alunos, treinos e avaliações</span>
            </button>
            <h3>PersonalFit</h3>
            <p>
              Gestão de alunos e treinos, com acesso para o personal e o aluno.
              PHP, MySQL e JavaScript.
            </p>
          </article>
        </div>
      </section>

      <footer id="contato" class="rodape secao">
        <div class="chamada">
          <h2 class="chamada-texto">Tem um projeto em mente?</h2>
          <button class="botao-ideia" @click="briefDialog.showModal()">
            Escrever minha ideia
          </button>
        </div>
        <p class="bastidores">
          Este site foi feito com Nuxt, GSAP e Three.js. A paisagem lá de cima é
          toda gerada por código, sem nenhuma imagem.
        </p>
        <div class="base-rodape">
          <span>© {{ new Date().getFullYear() }} Victor</span>
          <div class="preferencias">
            <button @click="toggleTheme" :aria-pressed="dark">
              {{ dark ? "Tema claro" : "Tema escuro" }}
            </button>
            <button @click="motion = !motion" :aria-pressed="!motion">
              {{ motion ? "Desligar movimento" : "Ligar movimento" }}
            </button>
            <a href="#inicio">Voltar ao topo</a>
          </div>
        </div>
      </footer>
    </main>

    <dialog
      ref="dialog"
      :aria-label="
        selectedProject
          ? 'Detalhes do projeto: ' + selectedProject
          : 'Detalhes do projeto'
      "
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
          Fechar
        </button>
        <template v-if="selectedProject === 'PersonalFit'">
          <h2>PersonalFit</h2>
          <p>
            Sistema com áreas separadas para personal e aluno. Reúne cadastro de
            alunos, montagem de treinos, agenda e avaliações físicas. O aluno
            pode consultar seus treinos e acompanhar o histórico. Também conta
            com uma API para acesso aos dados do aluno.
          </p>
          <p class="pilha-projeto">PHP, MySQL, JavaScript, HTML e CSS</p>
        </template>
        <template v-else-if="selectedProject === 'Alfred'">
          <h2>Alfred</h2>
          <p>
            Participei do desenvolvimento do Alfred, sistema hospitalar
            utilizado em 27 cidades. O sistema reúne recursos para organizar
            atendimentos, agendas e outras rotinas da saúde, com módulos para
            diferentes etapas da gestão hospitalar.
          </p>
          <p class="pilha-projeto">PHP, MySQL, JavaScript, HTML e CSS</p>
        </template>
        <template v-else-if="selectedProject === 'RajaHub'">
          <h2>RajaHub</h2>
          <p>
            Participei do desenvolvimento do site do RajaHub, voltado a
            empreendedorismo, tecnologia e inovação. O site apresenta as frentes
            de atuação do grupo e os caminhos para quem busca investimento ou
            quer investir. O projeto local utiliza WordPress, com templates em
            PHP e estilos próprios.
          </p>
          <img
            class="print-detalhes"
            :src="rajaScreenshot"
            alt="Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação."
            width="1265"
            height="712"
          />
          <p class="pilha-projeto">WordPress, PHP, JavaScript, HTML e CSS</p>
          <a
            class="link-texto"
            href="https://rajahub.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            >Visitar o site</a
          >
        </template>
        <template v-else-if="selectedProject === 'Gostiki'">
          <h2>Gostiki</h2>
          <p>
            Participei do desenvolvimento do sistema da Gostiki Açaí &amp;
            Sorvete. O projeto reúne ponto de venda, mesas, delivery, cadastro
            de produtos e complementos, além da gestão de lojas e clientes.
            Também inclui recursos de integração com o iFood e impressão de
            comandas pelo Gostiki Print.
          </p>
          <p class="pilha-projeto">PHP, MySQL, JavaScript, HTML e CSS</p>
        </template>
      </div>
    </dialog>
    <dialog
      ref="briefDialog"
      aria-label="Escrever uma ideia de projeto"
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
          Fechar
        </button>
        <h2>Qual é a sua ideia?</h2>
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
        ><button class="salvar-ideia" type="submit">Salvar minha ideia</button>
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
