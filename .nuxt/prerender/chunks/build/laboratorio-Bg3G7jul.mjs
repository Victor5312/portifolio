import { ref, mergeProps, createVNode, resolveDynamicComponent, withCtx, toDisplayString, useSSRContext } from 'file://C:/xampp/htdocs/portifolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'file://C:/xampp/htdocs/portifolio/node_modules/vue/server-renderer/index.mjs';

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
          "aria-label": __props.interativa ? `${bloco.nome}: ${bloco.estado === "construcao" ? "em constru\xE7\xE3o" : "funcionando"}` : void 0,
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
    resumo: "Portf\xF3lio com um passeio em 3D. A paisagem da abertura \xE9 toda gerada por c\xF3digo, sem nenhuma imagem.",
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
    resumo: "Editor de PDF e documentos em portugu\xEAs. Edita o texto do PDF de verdade, faz anota\xE7\xF5es e assinaturas, junta e reordena p\xE1ginas e exporta para PDF, DOCX, HTML e TXT. Nada \xE9 enviado para fora.",
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
    resumo: "Convite de casamento interativo, com um envelope que se abre na tela. Atende v\xE1rios eventos e cuida da lista de convidados e da confirma\xE7\xE3o de presen\xE7a.",
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
    falta: ["A p\xE1gina inicial, que ainda est\xE1 em branco"],
    tecnologias: ["PHP", "Bootstrap 5"]
  },
  {
    id: "cofre",
    nome: "Cofre de Senhas",
    curto: "Cofre",
    estado: "construcao",
    altura: 0.6,
    resumo: "Cofre de credenciais com v\xE1rias contas separadas no mesmo sistema.",
    feito: ["Criptografia das credenciais", "Senhas de acesso com hash", "Registro de auditoria"],
    falta: ["Sincronizar a vers\xE3o local com a online"],
    tecnologias: ["Python", "Flask", "MySQL", "SQLite"]
  }
];
const elementosExemplo = [
  { id: "botao", nome: "Bot\xE3o", categoria: "Bot\xF5es", formas: ["cheio"] },
  { id: "contorno", nome: "Bot\xE3o de contorno", categoria: "Bot\xF5es", formas: ["vazado"] },
  { id: "cartao", nome: "Cart\xE3o simples", categoria: "Cart\xF5es", formas: ["linha", "linha", "linha wf-curta"] },
  { id: "imagem", nome: "Cart\xE3o com imagem", categoria: "Cart\xF5es", formas: ["caixa", "linha", "linha wf-curta"] },
  { id: "campo", nome: "Campo de texto", categoria: "Formul\xE1rios", formas: ["linha wf-curta", "vazado"] },
  { id: "selecao", nome: "Caixa de sele\xE7\xE3o", categoria: "Formul\xE1rios", formas: ["marca"] },
  { id: "menu", nome: "Menu", categoria: "Navega\xE7\xE3o", formas: ["vazado"] },
  { id: "abas", nome: "Abas", categoria: "Navega\xE7\xE3o", formas: ["linha wf-curta", "caixa"] }
];

export { _sfc_main as _, elementosExemplo as e, projetos as p };
//# sourceMappingURL=laboratorio-Bg3G7jul.mjs.map
