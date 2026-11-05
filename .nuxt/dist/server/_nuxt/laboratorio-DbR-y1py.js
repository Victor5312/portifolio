import { _ as __nuxt_component_0 } from "./nuxt-link-BrKG5To1.js";
import { e as elementosExemplo, p as projetos, _ as _sfc_main$2 } from "./laboratorio-Bg3G7jul.js";
import { ref, computed, mergeProps, unref, useSSRContext, watch, nextTick, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from "vue/server-renderer";
import { a as useSeoMeta } from "./v3-DtxWjGLp.js";
import "C:/xampp/htdocs/portifolio/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/xampp/htdocs/portifolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/xampp/htdocs/portifolio/node_modules/hookable/dist/index.mjs";
import "C:/xampp/htdocs/portifolio/node_modules/unctx/dist/index.mjs";
import "C:/xampp/htdocs/portifolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/xampp/htdocs/portifolio/node_modules/defu/dist/defu.mjs";
import "C:/xampp/htdocs/portifolio/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {
  __name: "BibliotecaWireframe",
  __ssrInlineRender: true,
  setup(__props) {
    const categorias = ["Todos", ...new Set(elementosExemplo.map((e) => e.categoria))];
    const tamanhos = [
      { nome: "P", escala: 0.85 },
      { nome: "M", escala: 1 },
      { nome: "G", escala: 1.25 }
    ];
    const abas = ["Início", "Sobre", "Contato"];
    const categoria = ref("Todos");
    const busca = ref("");
    const selecionado = ref(elementosExemplo[0]);
    const escala = ref(1);
    const redondo = ref(false);
    const cliques = ref(0);
    const texto = ref("");
    const marcado = ref(false);
    const aba = ref(0);
    ref(null);
    const visiveis = computed(() => {
      const termo = busca.value.trim().toLowerCase();
      return elementosExemplo.filter(
        (e) => (categoria.value === "Todos" || e.categoria === categoria.value) && e.nome.toLowerCase().includes(termo)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "wf",
        "aria-label": "Rascunho da biblioteca de elementos",
        role: "group"
      }, _attrs))}><div class="wf-topo"><b>Biblioteca</b><input${ssrRenderAttr("value", unref(busca))} type="search" placeholder="Buscar elemento" aria-label="Buscar elemento"></div><div class="wf-corpo"><nav class="wf-categorias" aria-label="Categorias"><!--[-->`);
      ssrRenderList(categorias, (item) => {
        _push(`<button${ssrRenderAttr("aria-pressed", unref(categoria) === item)}>${ssrInterpolate(item)}</button>`);
      });
      _push(`<!--]--></nav><div class="wf-grade"><!--[-->`);
      ssrRenderList(unref(visiveis), (elemento) => {
        _push(`<button class="wf-item"${ssrRenderAttr("aria-pressed", unref(selecionado).id === elemento.id)}><span class="wf-miniatura" aria-hidden="true"><!--[-->`);
        ssrRenderList(elemento.formas, (forma, i) => {
          _push(`<span class="${ssrRenderClass(`wf-${forma}`)}"></span>`);
        });
        _push(`<!--]--></span> ${ssrInterpolate(elemento.nome)}</button>`);
      });
      _push(`<!--]-->`);
      if (!unref(visiveis).length) {
        _push(`<p class="wf-vazio">Nada encontrado.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><section class="wf-detalhe"${ssrRenderAttr("aria-label", unref(selecionado).nome)}><h3>${ssrInterpolate(unref(selecionado).nome)}</h3><div class="wf-palco" style="${ssrRenderStyle({
        "--wf-escala": unref(escala),
        "--wf-raio": unref(redondo) ? "1em" : "0px"
      })}">`);
      if (unref(selecionado).id === "botao" || unref(selecionado).id === "contorno") {
        _push(`<button class="${ssrRenderClass([{ "wf-botao-contorno": unref(selecionado).id === "contorno" }, "wf-botao"])}">${ssrInterpolate(unref(cliques) ? `Clicado ${unref(cliques)}x` : "Clique aqui")}</button>`);
      } else if (unref(selecionado).id === "cartao" || unref(selecionado).id === "imagem") {
        _push(`<div class="wf-cartao">`);
        if (unref(selecionado).id === "imagem") {
          _push(`<span class="wf-foto"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<b>Título</b><span class="wf-linha"></span><span class="wf-linha wf-curta"></span></div>`);
      } else if (unref(selecionado).id === "campo") {
        _push(`<label class="wf-campo"> Seu nome <input${ssrRenderAttr("value", unref(texto))} type="text" placeholder="Digite aqui"></label>`);
      } else if (unref(selecionado).id === "selecao") {
        _push(`<label class="wf-selecao"><input${ssrIncludeBooleanAttr(Array.isArray(unref(marcado)) ? ssrLooseContain(unref(marcado), null) : unref(marcado)) ? " checked" : ""} type="checkbox"> ${ssrInterpolate(unref(marcado) ? "Marcado" : "Marque aqui")}</label>`);
      } else {
        _push(`<div class="${ssrRenderClass([{ "wf-menu": unref(selecionado).id === "menu" }, "wf-abas"])}"><div><!--[-->`);
        ssrRenderList(abas, (item, i) => {
          _push(`<button${ssrRenderAttr("aria-pressed", unref(aba) === i)}>${ssrInterpolate(item)}</button>`);
        });
        _push(`<!--]--></div>`);
        if (unref(selecionado).id === "abas") {
          _push(`<p>Conteúdo: ${ssrInterpolate(abas[unref(aba)])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="wf-controles"><div role="group" aria-label="Tamanho"><span>Tamanho</span><!--[-->`);
      ssrRenderList(tamanhos, (item) => {
        _push(`<button${ssrRenderAttr("aria-pressed", unref(escala) === item.escala)}>${ssrInterpolate(item.nome)}</button>`);
      });
      _push(`<!--]--></div><label><input${ssrIncludeBooleanAttr(Array.isArray(unref(redondo)) ? ssrLooseContain(unref(redondo), null) : unref(redondo)) ? " checked" : ""} type="checkbox"> Cantos redondos </label></div></section></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BibliotecaWireframe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const descricao = "Projetos pessoais de Victor, desenvolvedor web: os que já funcionam e os que ainda estão em construção.";
const _sfc_main = {
  __name: "laboratorio",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Laboratório do Victor",
      description: descricao,
      ogTitle: "Laboratório do Victor",
      ogDescription: descricao
    });
    const funcionando = projetos.filter((p) => p.estado === "funcionando");
    const emConstrucao = projetos.filter((p) => p.estado === "construcao");
    const dark = ref(false);
    const motion = ref(true);
    const cabecalhoSolido = ref(false);
    const cabecalhoOculto = ref(false);
    function rolarAte(id) {
      (void 0).getElementById(id)?.scrollIntoView({
        behavior: motion.value ? "smooth" : "instant",
        block: "center"
      });
    }
    let contexto;
    function iniciarAnimacoes() {
      if (!motion.value || true) return;
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Bancada = _sfc_main$2;
      const _component_BibliotecaWireframe = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["site laboratorio", { escuro: unref(dark), "movimento-desativado": !unref(motion) }]
      }, _attrs))}><a class="pular-conteudo" href="#funcionando">Pular para os projetos</a><header class="${ssrRenderClass([{ solido: unref(cabecalhoSolido), oculto: unref(cabecalhoOculto) }, "cabecalho"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "marca",
        to: "/",
        "aria-label": "Victor, portfólio"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`victor<i${_scopeId}>.</i>`);
          } else {
            return [
              createTextVNode("victor"),
              createVNode("i", null, ".")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="navegacao-principal" aria-label="Seções do laboratório"><a href="#funcionando">Já funcionam</a><a href="#construcao">Em construção</a><a href="#experimentar">Biblioteca</a></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link-lab",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfólio`);
          } else {
            return [
              createTextVNode("Portfólio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><main id="conteudo"><section class="lab-abertura"><div class="lab-abertura-texto"><h1>Laboratório</h1><p> O que faço por conta própria: projetos que já funcionam e outros que ainda estão na bancada. </p><ul class="lab-legenda"><li><span class="amostra"></span>${ssrInterpolate(unref(funcionando).length)} funcionando </li><li><span class="amostra amostra-obra"></span>${ssrInterpolate(unref(emConstrucao).length)} em construção </li></ul></div>`);
      _push(ssrRenderComponent(_component_Bancada, {
        blocos: unref(projetos),
        movimento: unref(motion),
        interativa: "",
        onEscolher: rolarAte
      }, null, _parent));
      _push(`</section><section id="funcionando" class="secao"><div class="cabecalho-secao"><h2 class="revelar">Já <u>funcionam</u></h2><p class="revelar"> Estes já dá para usar. </p></div><ul class="lab-lista"><!--[-->`);
      ssrRenderList(unref(funcionando), (projeto) => {
        _push(`<li${ssrRenderAttr("id", projeto.id)} class="lab-item revelar" style="${ssrRenderStyle({ "--cor": projeto.cor })}"><h3>${ssrInterpolate(projeto.nome)}</h3><div><p>${ssrInterpolate(projeto.resumo)}</p><p class="lab-pilha">${ssrInterpolate(projeto.tecnologias.join(", "))}</p>`);
        if (projeto.rota) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "link-texto",
            to: projeto.rota
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(projeto.rotulo)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(projeto.rotulo), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></section><section id="construcao" class="lab-construcao secao"><div class="cabecalho-secao"><h2 class="revelar">Na <u>bancada</u></h2><p class="revelar"> Ainda não estão prontos. Aqui fica o que já existe e o que falta. </p></div><div class="lab-obras"><!--[-->`);
      ssrRenderList(unref(emConstrucao), (projeto) => {
        _push(`<article${ssrRenderAttr("id", projeto.id)} class="lab-obra revelar"><h3>${ssrInterpolate(projeto.nome)}</h3><p>${ssrInterpolate(projeto.resumo)}</p><div class="lab-andamento"><div><h4>Já tem</h4><ul><!--[-->`);
        ssrRenderList(projeto.feito, (item) => {
          _push(`<li>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div><div><h4>Falta</h4><ul><!--[-->`);
        ssrRenderList(projeto.falta, (item) => {
          _push(`<li>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div></div><p class="lab-pilha">${ssrInterpolate(projeto.tecnologias.join(", "))}</p></article>`);
      });
      _push(`<!--]--></div></section><section id="experimentar" class="secao"><div class="cabecalho-secao"><h2 class="revelar">Mexa na <u>biblioteca</u></h2><p class="revelar"> Rascunho da página da biblioteca, já funcionando aqui. Por enquanto, os elementos são de exemplo. </p></div>`);
      _push(ssrRenderComponent(_component_BibliotecaWireframe, { class: "revelar" }, null, _parent));
      _push(`</section><footer class="rodape secao"><div class="chamada"><h2 class="chamada-texto">Quer ver o trabalho para clientes?</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "botao-ideia",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver o portfólio`);
          } else {
            return [
              createTextVNode("Ver o portfólio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="base-rodape"><span>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Victor</span><div class="preferencias"><button${ssrRenderAttr("aria-pressed", unref(dark))}>${ssrInterpolate(unref(dark) ? "Tema claro" : "Tema escuro")}</button><button${ssrRenderAttr("aria-pressed", !unref(motion))}>${ssrInterpolate(unref(motion) ? "Desligar movimento" : "Ligar movimento")}</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/#contato" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contato`);
          } else {
            return [
              createTextVNode("Contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/laboratorio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=laboratorio-DbR-y1py.js.map
