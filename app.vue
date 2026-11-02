<script setup>
import { profile } from "./data/perfil";
import { gsap } from "gsap";
import rajaScreenshot from "./assets/projetos/rajahub.png";
import alfredLogo from "./assets/marcas/alfred.png";
import rajaLogo from "./assets/marcas/raja.png";
import gostikiLogo from "./assets/marcas/gostiki.png";

const logosPaused = ref(false);

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
      <a href="#sobre" @click="closeMenu"><sup>01</sup>Sobre ↗</a>
      <a href="#tecnologias" @click="closeMenu"><sup>02</sup>Tecnologias ↗</a>
      <a href="#projetos" @click="closeMenu"><sup>03</sup>Projetos ↗</a>
      <a href="#contato" @click="closeMenu"><sup>04</sup>Contato ↗</a>
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
          <span>01 / SOBRE MIM</span><span>UM POUCO SOBRE MEU TRABALHO</span>
        </div>
        <div class="composicao-sobre">
          <div class="simbolo-sobre" aria-hidden="true">↳</div>
          <div>
            <h2>Entre sites<br />e <em>sistemas.</em></h2>
            <div class="texto-sobre">
              <p>{{ profile.bio }}</p>
              <p>
                Gosto de entender como as coisas funcionam antes de sair
                programando. O que precisa aparecer na tela? O que dá para
                simplificar? É a partir dessas perguntas que começo a trabalhar.
              </p>
            </div>
            <a href="#tecnologias" class="link-texto"
              >Veja as tecnologias que uso <span>↘</span></a
            >
          </div>
        </div>
      </section>

      <section
        id="marcas"
        class="faixa-marcas"
        aria-label="Marcas e projetos em que trabalhei"
      >
        <div class="cabecalho-marcas">
          <p>MARCAS E PROJETOS EM QUE TRABALHEI</p>
          <button
            v-if="motion"
            @click="logosPaused = !logosPaused"
            :aria-pressed="logosPaused"
          >
            {{ logosPaused ? "Retomar faixa" : "Pausar faixa" }}
          </button>
        </div>
        <div class="janela-marcas">
          <div class="trilho-marcas" :class="{ pausado: logosPaused }">
            <div class="grupo-marcas">
              <div class="marca-projeto">
                <img :src="alfredLogo" alt="Alfred" loading="lazy" />
              </div>
              <div class="marca-projeto">
                <img
                  :src="rajaLogo"
                  alt="RajaHub"
                  class="invertida"
                  loading="lazy"
                />
              </div>
              <div class="marca-projeto">
                <img :src="gostikiLogo" alt="Gostiki" loading="lazy" />
              </div>
              <div class="marca-projeto">
                <span class="marca-tipografica">PersonalFit</span>
              </div>
            </div>
            <div class="grupo-marcas" aria-hidden="true">
              <div class="marca-projeto">
                <img :src="alfredLogo" alt="" loading="lazy" />
              </div>
              <div class="marca-projeto">
                <img :src="rajaLogo" alt="" class="invertida" loading="lazy" />
              </div>
              <div class="marca-projeto">
                <img :src="gostikiLogo" alt="" loading="lazy" />
              </div>
              <div class="marca-projeto">
                <span class="marca-tipografica">PersonalFit</span>
              </div>
            </div>
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
            Da tela ao banco de dados.<br />Estas são as tecnologias que uso nos
            meus projetos.
          </p>
        </div>
        <div class="filtros" role="group" aria-label="Filtrar tecnologias">
          <button
            :aria-pressed="selectedFilter === 'Todas'"
            :class="{ ativo: selectedFilter === 'Todas' }"
            @click="selectedFilter = 'Todas'"
          >
            Todas<span>08</span>
          </button>
          <button
            :aria-pressed="selectedFilter === 'Front-end'"
            :class="{ ativo: selectedFilter === 'Front-end' }"
            @click="selectedFilter = 'Front-end'"
          >
            Front-end
          </button>
          <button
            :aria-pressed="selectedFilter === 'Back-end'"
            :class="{ ativo: selectedFilter === 'Back-end' }"
            @click="selectedFilter = 'Back-end'"
          >
            Back-end
          </button>
          <button
            :aria-pressed="selectedFilter === 'Banco de dados'"
            :class="{ ativo: selectedFilter === 'Banco de dados' }"
            @click="selectedFilter = 'Banco de dados'"
          >
            Banco de dados
          </button>
        </div>
        <div class="grade-tecnologias">
          <article
            v-show="selectedFilter === 'Todas' || selectedFilter === 'Back-end'"
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">&lt;?&gt;</span
              ><span class="categoria-tecnologia">BACK-END</span>
            </div>
            <h3>PHP</h3>
            <p>Aplicações &amp; lógica de servidor</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
          <article
            v-show="selectedFilter === 'Todas' || selectedFilter === 'Back-end'"
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">Py</span
              ><span class="categoria-tecnologia">BACK-END</span>
            </div>
            <h3>Python</h3>
            <p>Automação &amp; desenvolvimento web</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
          <article
            v-show="selectedFilter === 'Todas' || selectedFilter === 'Back-end'"
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">Fl</span
              ><span class="categoria-tecnologia">BACK-END</span>
            </div>
            <h3>Flask</h3>
            <p>APIs &amp; aplicações leves</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
          <article
            v-show="selectedFilter === 'Todas' || selectedFilter === 'Back-end'"
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">Dj</span
              ><span class="categoria-tecnologia">BACK-END</span>
            </div>
            <h3>Django</h3>
            <p>Aplicações web estruturadas</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
          <article
            v-show="
              selectedFilter === 'Todas' || selectedFilter === 'Banco de dados'
            "
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">My</span
              ><span class="categoria-tecnologia">BANCO DE DADOS</span>
            </div>
            <h3>MySQL</h3>
            <p>Dados &amp; consultas relacionais</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
          <article
            v-show="
              selectedFilter === 'Todas' || selectedFilter === 'Front-end'
            "
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">Js</span
              ><span class="categoria-tecnologia">FRONT-END</span>
            </div>
            <h3>JavaScript</h3>
            <p>Interatividade &amp; comportamento</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
          <article
            v-show="
              selectedFilter === 'Todas' || selectedFilter === 'Front-end'
            "
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">&lt;/&gt;</span
              ><span class="categoria-tecnologia">FRONT-END</span>
            </div>
            <h3>HTML</h3>
            <p>Estrutura &amp; semântica</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
          <article
            v-show="
              selectedFilter === 'Todas' || selectedFilter === 'Front-end'
            "
            class="cartao-tecnologia"
          >
            <div class="topo-tecnologia">
              <span class="simbolo-tecnologia">#</span
              ><span class="categoria-tecnologia">FRONT-END</span>
            </div>
            <h3>CSS</h3>
            <p>Design &amp; responsividade</p>
            <span class="seta-tecnologia" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section id="projetos" class="projetos espacamento-secao">
        <div class="rotulo-secao">
          <span>03 / PROJETOS</span><span>SITES E SISTEMAS</span>
        </div>
        <div class="cabecalho-secao">
          <h2>Alguns trabalhos<br />de que <em>fiz parte.</em></h2>
          <p>
            Sites para apresentar uma empresa e sistemas para organizar a
            rotina. Selecione um projeto para saber mais.
          </p>
        </div>
        <div class="grade-projetos">
          <button
            class="cartao-projeto"
            @click="openProject('PersonalFit')"
            aria-label="Ver detalhes: PersonalFit"
          >
            <div class="visual-projeto projeto-personalfit">
              <div class="topo-visual">
                <span>V / 01</span><span>SISTEMA WEB</span>
              </div>
              <div class="capa-projeto">
                <span class="nome-capa">PersonalFit</span
                ><span class="legenda-capa"
                  >A rotina do treino, organizada.</span
                >
                <div class="recursos-capa">
                  <span>Alunos</span><span>Treinos</span><span>Avaliações</span>
                </div>
              </div>
              <span class="abrir-projeto">↗</span>
            </div>
            <div class="informacoes-projeto">
              <h3>PersonalFit</h3>
              <span>PHP · MYSQL · JAVASCRIPT</span>
            </div>
            <p class="resumo-projeto">
              Gestão de alunos e treinos, com acesso para o personal e o aluno.
            </p>
          </button>
          <button
            class="cartao-projeto"
            @click="openProject('Alfred')"
            aria-label="Ver detalhes: Alfred"
          >
            <div class="visual-projeto projeto-alfred">
              <div class="topo-visual">
                <span>V / 02</span><span>SISTEMA HOSPITALAR</span>
              </div>
              <div class="capa-projeto">
                <span class="nome-capa">Alfred</span
                ><span class="legenda-capa">Presente em 27 cidades.</span>
                <div class="recursos-capa">
                  <span>Gestão hospitalar</span><span>Atendimentos</span
                  ><span>Agendas</span>
                </div>
              </div>
              <span class="abrir-projeto">↗</span>
            </div>
            <div class="informacoes-projeto">
              <h3>Alfred</h3>
              <span>PHP · MYSQL · JAVASCRIPT</span>
            </div>
            <p class="resumo-projeto">
              Sistema hospitalar utilizado em 27 cidades, em cujo
              desenvolvimento participei.
            </p>
          </button>
          <button
            class="cartao-projeto"
            @click="openProject('RajaHub')"
            aria-label="Ver detalhes: RajaHub"
          >
            <div class="visual-projeto projeto-raja">
              <div class="topo-visual">
                <span>V / 03</span><span>SITE INSTITUCIONAL</span>
              </div>
              <div class="print-projeto">
                <div class="barra-print" aria-hidden="true">
                  <span>● ● ●</span> rajahub.com.br
                </div>
                <img
                  :src="rajaScreenshot"
                  alt="Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação."
                  loading="lazy"
                  width="1265"
                  height="712"
                />
              </div>
              <span class="abrir-projeto">↗</span>
            </div>
            <div class="informacoes-projeto">
              <h3>RajaHub</h3>
              <span>WORDPRESS · PHP · JAVASCRIPT</span>
            </div>
            <p class="resumo-projeto">
              Site do RajaHub, que apresenta suas frentes de atuação e conecta
              empreendedores e investidores.
            </p>
          </button>
          <button
            class="cartao-projeto"
            @click="openProject('Gostiki')"
            aria-label="Ver detalhes: Gostiki"
          >
            <div class="visual-projeto projeto-gostiki">
              <div class="topo-visual">
                <span>V / 04</span><span>SISTEMA DE GESTÃO</span>
              </div>
              <div class="capa-projeto">
                <span class="nome-capa">Gostiki</span
                ><span class="legenda-capa">Do balcão ao delivery.</span>
                <div class="recursos-capa">
                  <span>PDV</span><span>Pedidos</span><span>Impressão</span>
                </div>
              </div>
              <span class="abrir-projeto">↗</span>
            </div>
            <div class="informacoes-projeto">
              <h3>Gostiki</h3>
              <span>PHP · MYSQL · JAVASCRIPT</span>
            </div>
            <p class="resumo-projeto">
              Sistema para a Gostiki Açaí &amp; Sorvete, com vendas, pedidos e
              gestão de lojas.
            </p>
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
              <span>Nuxt</span><span>Vue</span><span>JavaScript</span
              ><span>HTML</span><span>CSS</span><span>GSAP</span
              ><span>Three.js</span><span>WebGL</span>
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
          ✕
        </button>
        <template v-if="selectedProject === 'PersonalFit'">
          <span class="sobretitulo">SISTEMA WEB / 01</span>
          <h2>PersonalFit · Alunos e treinos</h2>
          <p>
            Sistema com áreas separadas para personal e aluno. Reúne cadastro de
            alunos, montagem de treinos, agenda e avaliações físicas. O aluno
            pode consultar seus treinos e acompanhar o histórico. Também conta
            com uma API para acesso aos dados do aluno.
          </p>
          <div class="etiquetas-tecnologias">
            <span>PHP</span><span>MySQL</span><span>JavaScript</span
            ><span>HTML</span><span>CSS</span>
          </div>
        </template>
        <template v-else-if="selectedProject === 'Alfred'">
          <span class="sobretitulo">SISTEMA HOSPITALAR / 02</span>
          <h2>Alfred · Gestão hospitalar</h2>
          <p>
            Participei do desenvolvimento do Alfred, sistema hospitalar
            utilizado em 27 cidades. O sistema reúne recursos para organizar
            atendimentos, agendas e outras rotinas da saúde, com módulos para
            diferentes etapas da gestão hospitalar.
          </p>
          <div class="etiquetas-tecnologias">
            <span>PHP</span><span>MySQL</span><span>JavaScript</span
            ><span>HTML</span><span>CSS</span>
          </div>
        </template>
        <template v-else-if="selectedProject === 'RajaHub'">
          <span class="sobretitulo">SITE INSTITUCIONAL / 03</span>
          <h2>RajaHub · Site institucional</h2>
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
          <div class="etiquetas-tecnologias">
            <span>WordPress</span><span>PHP</span><span>JavaScript</span
            ><span>HTML</span><span>CSS</span>
          </div>
          <a
            class="link-texto visitar-projeto"
            href="https://rajahub.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            >Visitar site <span>↗</span></a
          >
        </template>
        <template v-else-if="selectedProject === 'Gostiki'">
          <span class="sobretitulo">SISTEMA DE GESTÃO / 04</span>
          <h2>Gostiki · Vendas e operação</h2>
          <p>
            Participei do desenvolvimento do sistema da Gostiki Açaí &amp;
            Sorvete. O projeto reúne ponto de venda, mesas, delivery, cadastro
            de produtos e complementos, além da gestão de lojas e clientes.
            Também inclui recursos de integração com o iFood e impressão de
            comandas pelo Gostiki Print.
          </p>
          <div class="etiquetas-tecnologias">
            <span>PHP</span><span>MySQL</span><span>JavaScript</span
            ><span>HTML</span><span>CSS</span>
          </div>
        </template>
        <button class="link-texto" @click="dialog.close()">
          Voltar aos projetos <span>↙</span>
        </button>
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
