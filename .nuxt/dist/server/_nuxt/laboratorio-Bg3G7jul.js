import { ref, mergeProps, createVNode, resolveDynamicComponent, withCtx, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Bancada",
  __ssrInlineRender: true,
  props: {
    blocos: { type: Array, required: true },
    interativa: { type: Boolean, default: false },
    movimento: { type: Boolean, default: true }
  },
  emits: ["escolher"],
  setup(__props) {
    const raiz = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "raiz",
        ref: raiz,
        class: "bancada",
        "aria-hidden": __props.interativa ? void 0 : "true"
      }, _attrs))}><div class="bancada-mesa"><!--[-->`);
      ssrRenderList(__props.blocos, (bloco, i) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.interativa ? "button" : "span"), {
          key: bloco.id,
          class: ["bloco", { "em-construcao": bloco.estado === "construcao" }],
          style: {
            "--cor": bloco.cor,
            "--tinta": bloco.tinta,
            "--alt": bloco.altura,
            "--col": i % 3,
            "--lin": Math.floor(i / 3)
          },
          type: __props.interativa ? "button" : void 0,
          "aria-label": __props.interativa ? `${bloco.nome}: ${bloco.estado === "construcao" ? "em construção" : "funcionando"}` : void 0,
          onClick: ($event) => __props.interativa && _ctx.$emit("escolher", bloco.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="bloco-corpo"${_scopeId}><span class="bloco-topo"${_scopeId}>${ssrInterpolate(bloco.curto)}</span><span class="bloco-frente"${_scopeId}></span><span class="bloco-lado"${_scopeId}></span></span>`);
            } else {
              return [
                createVNode("span", { class: "bloco-corpo" }, [
                  createVNode("span", { class: "bloco-topo" }, toDisplayString(bloco.curto), 1),
                  createVNode("span", { class: "bloco-frente" }),
                  createVNode("span", { class: "bloco-lado" })
                ])
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bancada.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projetos = [
  {
    id: "este-site",
    nome: "Este site",
    curto: "Este site",
    estado: "funcionando",
    cor: "#e5471d",
    tinta: "#17160f",
    altura: 1.15,
    resumo: "Portfólio com um passeio em 3D. A paisagem da abertura é toda gerada por código, sem nenhuma imagem.",
    tecnologias: ["Nuxt", "GSAP", "Three.js"],
    rota: "/",
    rotulo: "Ver o passeio"
  },
  {
    id: "folha",
    nome: "Folha",
    curto: "Folha",
    estado: "funcionando",
    cor: "#f3eee3",
    tinta: "#17160f",
    altura: 0.7,
    resumo: "Editor de PDF e documentos em português. Edita o texto do PDF de verdade, faz anotações e assinaturas, junta e reordena páginas e exporta para PDF, DOCX, HTML e TXT. Nada é enviado para fora.",
    tecnologias: ["JavaScript", "Vite", "MuPDF", "TinyMCE", "IndexedDB"]
  },
  {
    id: "convite",
    nome: "Convite",
    curto: "Convite",
    estado: "funcionando",
    cor: "#f4b52e",
    tinta: "#17160f",
    altura: 0.9,
    resumo: "Convite de casamento interativo, com um envelope que se abre na tela. Atende vários eventos e cuida da lista de convidados e da confirmação de presença.",
    tecnologias: ["Vue 3", "Three.js", "Django REST", "PostgreSQL"]
  },
  {
    id: "simulados",
    nome: "Simulados",
    curto: "Simulados",
    estado: "funcionando",
    cor: "#2f7a52",
    tinta: "#fff",
    altura: 0.5,
    resumo: "Simuladores de prova para estudar para os concursos do IBGE e do CREA-MG.",
    tecnologias: ["PHP 8", "MySQL"]
  },
  {
    id: "biblioteca",
    nome: "Biblioteca de elementos",
    curto: "Elementos",
    estado: "construcao",
    altura: 0.95,
    resumo: "Um lugar para guardar e organizar por categoria os elementos que uso nos projetos.",
    feito: ["Login e cadastro", "Painel administrativo", "Cadastro de categorias e de elementos"],
    falta: ["A página inicial, que ainda está em branco"],
    tecnologias: ["PHP", "Bootstrap 5"]
  },
  {
    id: "cofre",
    nome: "Cofre de Senhas",
    curto: "Cofre",
    estado: "construcao",
    altura: 0.6,
    resumo: "Cofre de credenciais com várias contas separadas no mesmo sistema.",
    feito: ["Criptografia das credenciais", "Senhas de acesso com hash", "Registro de auditoria"],
    falta: ["Sincronizar a versão local com a online"],
    tecnologias: ["Python", "Flask", "MySQL", "SQLite"]
  }
];
const elementosExemplo = [
  { id: "botao", nome: "Botão", categoria: "Botões", formas: ["cheio"] },
  { id: "contorno", nome: "Botão de contorno", categoria: "Botões", formas: ["vazado"] },
  { id: "cartao", nome: "Cartão simples", categoria: "Cartões", formas: ["linha", "linha", "linha wf-curta"] },
  { id: "imagem", nome: "Cartão com imagem", categoria: "Cartões", formas: ["caixa", "linha", "linha wf-curta"] },
  { id: "campo", nome: "Campo de texto", categoria: "Formulários", formas: ["linha wf-curta", "vazado"] },
  { id: "selecao", nome: "Caixa de seleção", categoria: "Formulários", formas: ["marca"] },
  { id: "menu", nome: "Menu", categoria: "Navegação", formas: ["vazado"] },
  { id: "abas", nome: "Abas", categoria: "Navegação", formas: ["linha wf-curta", "caixa"] }
];
export {
  _sfc_main as _,
  elementosExemplo as e,
  projetos as p
};
//# sourceMappingURL=laboratorio-Bg3G7jul.js.map
