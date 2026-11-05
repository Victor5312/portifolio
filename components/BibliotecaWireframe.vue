<script setup>
// Rascunho da página da biblioteca. Os elementos são de exemplo, até ligar com a biblioteca real.
import { elementosExemplo as elementos } from "~/data/laboratorio";

const categorias = ["Todos", ...new Set(elementos.map((e) => e.categoria))];
const tamanhos = [
  { nome: "P", escala: 0.85 },
  { nome: "M", escala: 1 },
  { nome: "G", escala: 1.25 },
];
const abas = ["Início", "Sobre", "Contato"];

const categoria = ref("Todos");
const busca = ref("");
const selecionado = ref(elementos[0]);
const escala = ref(1);
const redondo = ref(false);
const cliques = ref(0);
const texto = ref("");
const marcado = ref(false);
const aba = ref(0);
const detalhe = ref(null);

// Em telas estreitas a prévia fica abaixo da lista, fora da vista.
function escolher(elemento) {
  selecionado.value = elemento;
  if (window.matchMedia("(max-width: 1000px)").matches) {
    detalhe.value.scrollIntoView({ behavior: "instant", block: "nearest" });
  }
}

const visiveis = computed(() => {
  const termo = busca.value.trim().toLowerCase();
  return elementos.filter(
    (e) =>
      (categoria.value === "Todos" || e.categoria === categoria.value) &&
      e.nome.toLowerCase().includes(termo),
  );
});
</script>

<template>
  <div class="wf" aria-label="Rascunho da biblioteca de elementos" role="group">
    <div class="wf-topo">
      <b>Biblioteca</b>
      <input
        v-model="busca"
        type="search"
        placeholder="Buscar elemento"
        aria-label="Buscar elemento"
      />
    </div>

    <div class="wf-corpo">
      <nav class="wf-categorias" aria-label="Categorias">
        <button
          v-for="item in categorias"
          :key="item"
          :aria-pressed="categoria === item"
          @click="categoria = item"
        >
          {{ item }}
        </button>
      </nav>

      <div class="wf-grade">
        <button
          v-for="elemento in visiveis"
          :key="elemento.id"
          class="wf-item"
          :aria-pressed="selecionado.id === elemento.id"
          @click="escolher(elemento)"
        >
          <span class="wf-miniatura" aria-hidden="true">
            <span
              v-for="(forma, i) in elemento.formas"
              :key="i"
              :class="`wf-${forma}`"
            ></span>
          </span>
          {{ elemento.nome }}
        </button>
        <p v-if="!visiveis.length" class="wf-vazio">Nada encontrado.</p>
      </div>

      <section ref="detalhe" class="wf-detalhe" :aria-label="selecionado.nome">
        <h3>{{ selecionado.nome }}</h3>
        <div
          class="wf-palco"
          :style="{
            '--wf-escala': escala,
            '--wf-raio': redondo ? '1em' : '0px',
          }"
        >
          <button
            v-if="selecionado.id === 'botao' || selecionado.id === 'contorno'"
            class="wf-botao"
            :class="{ 'wf-botao-contorno': selecionado.id === 'contorno' }"
            @click="cliques++"
          >
            {{ cliques ? `Clicado ${cliques}x` : "Clique aqui" }}
          </button>
          <div
            v-else-if="selecionado.id === 'cartao' || selecionado.id === 'imagem'"
            class="wf-cartao"
          >
            <span v-if="selecionado.id === 'imagem'" class="wf-foto"></span>
            <b>Título</b>
            <span class="wf-linha"></span>
            <span class="wf-linha wf-curta"></span>
          </div>
          <label v-else-if="selecionado.id === 'campo'" class="wf-campo">
            Seu nome
            <input v-model="texto" type="text" placeholder="Digite aqui" />
          </label>
          <label v-else-if="selecionado.id === 'selecao'" class="wf-selecao">
            <input v-model="marcado" type="checkbox" />
            {{ marcado ? "Marcado" : "Marque aqui" }}
          </label>
          <div v-else class="wf-abas" :class="{ 'wf-menu': selecionado.id === 'menu' }">
            <div>
              <button
                v-for="(item, i) in abas"
                :key="item"
                :aria-pressed="aba === i"
                @click="aba = i"
              >
                {{ item }}
              </button>
            </div>
            <p v-if="selecionado.id === 'abas'">Conteúdo: {{ abas[aba] }}</p>
          </div>
        </div>

        <div class="wf-controles">
          <div role="group" aria-label="Tamanho">
            <span>Tamanho</span>
            <button
              v-for="item in tamanhos"
              :key="item.nome"
              :aria-pressed="escala === item.escala"
              @click="escala = item.escala"
            >
              {{ item.nome }}
            </button>
          </div>
          <label>
            <input v-model="redondo" type="checkbox" />
            Cantos redondos
          </label>
        </div>
      </section>
    </div>
  </div>
</template>
