<script setup>
import { gsap } from "gsap";
import { projetos } from "~/data/laboratorio";

const descricao =
  "Projetos pessoais de Victor, desenvolvedor web: os que já funcionam e os que ainda estão em construção.";
useSeoMeta({
  title: "Laboratório do Victor",
  description: descricao,
  ogTitle: "Laboratório do Victor",
  ogDescription: descricao,
});

const funcionando = projetos.filter((p) => p.estado === "funcionando");
const emConstrucao = projetos.filter((p) => p.estado === "construcao");

const dark = ref(false);
const motion = ref(true);
const cabecalhoSolido = ref(false);
const cabecalhoOculto = ref(false);

function rolarAte(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: motion.value ? "smooth" : "instant",
    block: "center",
  });
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
let ultimaRolagem = 0;
function acompanharCabecalho() {
  const atual = window.scrollY;
  const abertura = document.querySelector(".lab-abertura");
  cabecalhoSolido.value = atual > abertura.offsetHeight - 90;
  if (Math.abs(atual - ultimaRolagem) < 6) return;
  cabecalhoOculto.value = atual > ultimaRolagem && atual > 200;
  ultimaRolagem = atual;
}

let contexto;
let ScrollTrigger;
function iniciarAnimacoes() {
  if (!motion.value || !ScrollTrigger) return;
  contexto = gsap.context(() => {
    gsap.from(".lab-abertura .bloco-corpo", {
      z: 120,
      duration: 0.9,
      ease: "bounce.out",
      stagger: 0.09,
    });
    gsap.utils.toArray(".revelar").forEach((elemento) => {
      gsap.from(elemento, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: elemento, start: "top 90%", once: true },
      });
    });
  });
}
function pararAnimacoes() {
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
  ({ ScrollTrigger } = await import("gsap/ScrollTrigger"));
  gsap.registerPlugin(ScrollTrigger);
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
    class="site laboratorio"
    :class="{ escuro: dark, 'movimento-desativado': !motion }"
    @click="navegar"
  >
    <a class="pular-conteudo" href="#funcionando">Pular para os projetos</a>
    <header
      class="cabecalho"
      :class="{ solido: cabecalhoSolido, oculto: cabecalhoOculto }"
    >
      <NuxtLink class="marca" to="/" aria-label="Victor, portfólio"
        >victor<i>.</i></NuxtLink
      >
      <nav class="navegacao-principal" aria-label="Seções do laboratório">
        <a href="#funcionando">Já funcionam</a>
        <a href="#construcao">Em construção</a>
        <a href="#experimentar">Biblioteca</a>
      </nav>
      <NuxtLink class="link-lab" to="/">Portfólio</NuxtLink>
    </header>

    <main id="conteudo">
      <section class="lab-abertura">
        <div class="lab-abertura-texto">
          <h1>Laboratório</h1>
          <p>
            O que faço por conta própria: projetos que já funcionam e outros que
            ainda estão na bancada.
          </p>
          <ul class="lab-legenda">
            <li>
              <span class="amostra"></span>{{ funcionando.length }} funcionando
            </li>
            <li>
              <span class="amostra amostra-obra"></span
              >{{ emConstrucao.length }} em construção
            </li>
          </ul>
        </div>
        <Bancada
          :blocos="projetos"
          :movimento="motion"
          interativa
          @escolher="rolarAte"
        />
      </section>

      <section id="funcionando" class="secao">
        <div class="cabecalho-secao">
          <h2 class="revelar">Já <u>funcionam</u></h2>
          <p class="revelar">
            Estes já dá para usar.
          </p>
        </div>
        <ul class="lab-lista">
          <li
            v-for="projeto in funcionando"
            :id="projeto.id"
            :key="projeto.id"
            class="lab-item revelar"
            :style="{ '--cor': projeto.cor }"
          >
            <h3>{{ projeto.nome }}</h3>
            <div>
              <p>{{ projeto.resumo }}</p>
              <p class="lab-pilha">{{ projeto.tecnologias.join(", ") }}</p>
              <NuxtLink
                v-if="projeto.rota"
                class="link-texto"
                :to="projeto.rota"
                >{{ projeto.rotulo }}</NuxtLink
              >
            </div>
          </li>
        </ul>
      </section>

      <section id="construcao" class="lab-construcao secao">
        <div class="cabecalho-secao">
          <h2 class="revelar">Na <u>bancada</u></h2>
          <p class="revelar">
            Ainda não estão prontos. Aqui fica o que já existe e o que falta.
          </p>
        </div>
        <div class="lab-obras">
          <article
            v-for="projeto in emConstrucao"
            :id="projeto.id"
            :key="projeto.id"
            class="lab-obra revelar"
          >
            <h3>{{ projeto.nome }}</h3>
            <p>{{ projeto.resumo }}</p>
            <div class="lab-andamento">
              <div>
                <h4>Já tem</h4>
                <ul>
                  <li v-for="item in projeto.feito" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div>
                <h4>Falta</h4>
                <ul>
                  <li v-for="item in projeto.falta" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
            <p class="lab-pilha">{{ projeto.tecnologias.join(", ") }}</p>
          </article>
        </div>
      </section>

      <section id="experimentar" class="secao">
        <div class="cabecalho-secao">
          <h2 class="revelar">Mexa na <u>biblioteca</u></h2>
          <p class="revelar">
            Rascunho da página da biblioteca, já funcionando aqui. Por enquanto,
            os elementos são de exemplo.
          </p>
        </div>
        <BibliotecaWireframe class="revelar" />
      </section>

      <footer class="rodape secao">
        <div class="chamada">
          <h2 class="chamada-texto">Quer ver o trabalho para clientes?</h2>
          <NuxtLink class="botao-ideia" to="/">Ver o portfólio</NuxtLink>
        </div>
        <div class="base-rodape">
          <span>© {{ new Date().getFullYear() }} Victor</span>
          <div class="preferencias">
            <button @click="toggleTheme" :aria-pressed="dark">
              {{ dark ? "Tema claro" : "Tema escuro" }}
            </button>
            <button @click="motion = !motion" :aria-pressed="!motion">
              {{ motion ? "Desligar movimento" : "Ligar movimento" }}
            </button>
            <NuxtLink to="/#contato">Contato</NuxtLink>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>
