<script setup>
// Bancada 3D: cada projeto é um bloco. Cheio funciona; tracejado está em construção.
const props = defineProps({
  blocos: { type: Array, required: true },
  interativa: { type: Boolean, default: false },
  movimento: { type: Boolean, default: true },
});
defineEmits(["escolher"]);

const raiz = ref(null);
let visivel = false;
let observador;

function seguirPonteiro(evento) {
  if (!visivel || !props.movimento || evento.pointerType === "touch") return;
  const x = evento.clientX / window.innerWidth - 0.5;
  const y = evento.clientY / window.innerHeight - 0.5;
  raiz.value.style.setProperty("--giro-z", `${(x * 16).toFixed(2)}deg`);
  raiz.value.style.setProperty("--giro-x", `${(-y * 10).toFixed(2)}deg`);
}

onMounted(() => {
  observador = new IntersectionObserver(([item]) => {
    visivel = item.isIntersecting;
  });
  observador.observe(raiz.value);
  window.addEventListener("pointermove", seguirPonteiro, { passive: true });
});
onBeforeUnmount(() => {
  observador?.disconnect();
  window.removeEventListener("pointermove", seguirPonteiro);
});
</script>

<template>
  <div ref="raiz" class="bancada" :aria-hidden="interativa ? undefined : 'true'">
    <div class="bancada-mesa">
      <component
        :is="interativa ? 'button' : 'span'"
        v-for="(bloco, i) in blocos"
        :key="bloco.id"
        class="bloco"
        :class="{ 'em-construcao': bloco.estado === 'construcao' }"
        :style="{
          '--cor': bloco.cor,
          '--tinta': bloco.tinta,
          '--alt': bloco.altura,
          '--col': i % 3,
          '--lin': Math.floor(i / 3),
        }"
        :type="interativa ? 'button' : undefined"
        :aria-label="
          interativa
            ? `${bloco.nome}: ${bloco.estado === 'construcao' ? 'em construção' : 'funcionando'}`
            : undefined
        "
        @click="interativa && $emit('escolher', bloco.id)"
      >
        <span class="bloco-corpo">
          <span class="bloco-topo">{{ bloco.curto }}</span>
          <span class="bloco-frente"></span>
          <span class="bloco-lado"></span>
        </span>
      </component>
    </div>
  </div>
</template>
