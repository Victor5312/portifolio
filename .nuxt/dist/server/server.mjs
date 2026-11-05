import { shallowReactive, reactive, effectScope, getCurrentScope, hasInjectionContext, getCurrentInstance, inject, toRef, computed, defineComponent, h, isReadonly, isRef, isShallow, isReactive, toRaw, createElementBlock, shallowRef, provide, cloneVNode, ref, watch, nextTick, mergeProps, unref, useSSRContext, defineAsyncComponent, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, createApp } from "vue";
import { $fetch } from "C:/xampp/htdocs/portifolio/node_modules/ofetch/dist/node.mjs";
import { baseURL } from "#internal/nuxt/paths";
import { createHooks } from "C:/xampp/htdocs/portifolio/node_modules/hookable/dist/index.mjs";
import { getContext } from "C:/xampp/htdocs/portifolio/node_modules/unctx/dist/index.mjs";
import { sanitizeStatusCode, createError as createError$1 } from "C:/xampp/htdocs/portifolio/node_modules/h3/dist/index.mjs";
import { hasProtocol, joinURL, withQuery, parseURL, encodePath, decodePath, isScriptProtocol, isEqual, stringifyParsedURL, stringifyQuery, parseQuery } from "C:/xampp/htdocs/portifolio/node_modules/ufo/dist/index.mjs";
import { defu } from "C:/xampp/htdocs/portifolio/node_modules/defu/dist/defu.mjs";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { gsap } from "gsap";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const nuxtDefaultErrorValue = null;
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.11";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    const unresolvedPluginsForThisPlugin = plugin.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.add(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
import.meta.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
function isScopeWithinInstance(instance) {
  const instanceScope = instance.scope;
  let scope = getCurrentScope();
  while (scope) {
    if (scope === instanceScope) {
      return true;
    }
    scope = scope.parent;
  }
  return false;
}
const useRoute = () => {
  if (hasInjectionContext()) {
    const instance = getCurrentInstance();
    if (!instance || isScopeWithinInstance(instance)) {
      return inject(PageRouteSymbol, useNuxtApp()._route);
    }
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const HTML_ATTR_UNSAFE_RE = /[&"'<>]/g;
const HTML_ATTR_ENCODE_MAP = {
  "&": "%26",
  '"': "%22",
  "'": "%27",
  "<": "%3C",
  ">": "%3E"
};
function encodeForHtmlAttr(value) {
  return value.replace(HTML_ATTR_UNSAFE_RE, (c) => HTML_ATTR_ENCODE_MAP[c]);
}
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedHeader = encodeURL(location2, isExternalHost);
        const encodedLoc = encodeForHtmlAttr(encodedHeader);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    const pathname = url.pathname.replace(/^\/{2,}/, "/");
    return pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = /* @__PURE__ */ useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = nuxtDefaultErrorValue;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function freezeHead(head) {
  const realPush = head.push;
  head.push = () => ({ dispose: () => {
  }, patch: () => {
  }, _poll: () => {
  } });
  return () => {
    head.push = realPush;
  };
}
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    if (nuxtApp.ssrContext.islandContext) {
      const unfreeze = freezeHead(head);
      nuxtApp.hooks.hookOnce("app:created", unfreeze);
    }
    nuxtApp.vueApp.use(head);
  }
});
const routerOptions = {};
const sensitiveMatcher = (m, p) => {
  return [];
};
const foldedMatcher = sensitiveMatcher;
const decodeRoutePath = function decodeRoutePath2(path) {
  if (!path.includes("%")) return path;
  const queryIndex = path.indexOf("?");
  const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
  try {
    return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
  } catch {
    return path;
  }
};
const normalizePath = (path, fold) => {
  if (typeof path !== "string") {
    return path;
  }
  const decoded = decodeRoutePath(path);
  return fold ? decoded.toLowerCase() : decoded;
};
const _routeRulesMatcher = (path) => routerOptions.sensitive ? defu({}, ...sensitiveMatcher("", normalizePath(path, false)).map((r) => r.data).reverse()) : defu({}, ...foldedMatcher("", normalizePath(path, true)).map((r) => r.data).reverse());
const routeRulesMatcher = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  const route = fullPath && typeof fullPath === "object" ? fullPath : {};
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), "http://localhost");
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: route.params || {},
    name: void 0,
    matched: route.matched || [],
    redirectedFrom: void 0,
    meta: route.meta || {},
    href: fullPath
  };
}
const router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => {
        const index = hooks[hook].indexOf(guard);
        if (index !== -1) {
          hooks[hook].splice(index, 1);
        }
      };
    };
    const baseURL2 = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    let navigationCounter = 0;
    async function handleNavigation(url, replace) {
      const navigationId = ++navigationCounter;
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (navigationId !== navigationCounter) {
            return;
          }
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return await handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
          if (navigationId !== navigationCounter) {
            return;
          }
        }
        Object.assign(route, to);
        if (false) ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url, false),
      replace: (url) => handleNavigation(url, true),
      back: () => (void 0).history.go(-1),
      go: (delta) => (void 0).history.go(delta),
      forward: () => (void 0).history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          const route2 = router.resolve(props.to);
          return props.custom ? slots.default?.({ href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    nuxtApp._route = route;
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    const initialLayoutProps = nuxtApp.payload.state._layoutProps;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
          to.meta.layoutProps = initialLayoutProps;
        }
        nuxtApp._processingMiddleware = true;
        {
          nuxtApp._middlewareTo = to;
        }
        if (!nuxtApp.ssrContext?.islandContext) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          const routeRules = getRouteRules({ path: to.path });
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              const guard = nuxtApp._middleware.named[key];
              if (!guard) {
                continue;
              }
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(guard);
              } else {
                middlewareEntries.delete(guard);
              }
            }
          }
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`,
                  data: {
                    path: initialURL
                  }
                });
                delete nuxtApp._processingMiddleware;
                delete nuxtApp._middlewareTo;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
        {
          delete nuxtApp._middlewareTo;
        }
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  router_DclsWNDeVV7SyG4lslgLnjbQUK1ws8wgf2FHaAbo7Cw,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const VALID_TAG_RE = /^[a-z][a-z0-9-]*$/i;
function sanitizeTag(tag, fallback) {
  return tag && VALID_TAG_RE.test(tag) ? tag : fallback;
}
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = sanitizeTag(props.fallbackTag || props.placeholderTag, "span");
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const rajaScreenshot = "" + __buildAssetsURL("rajahub-inicio.BPvnoCJd.jpg");
const alfredLogo = "" + __buildAssetsURL("alfred.XsGMWS5U.png");
const rajaLogo = "" + __buildAssetsURL("rajahub.CFyN9aW7.png");
const gostikiLogo = "" + __buildAssetsURL("gostiki.BxmHK_iT.png");
const iconePhp = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiM3NzdiYjMiLz48dGV4dCB4PSIzMiIgeT0iNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjI1IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZmZmIj5waHA8L3RleHQ+PC9zdmc+";
const iconePython = "data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%233776ab'%20d='M31%205c-13%200-12%206-12%206v9h13v3H14S5%2022%205%2034s8%2011%208%2011h6v-8s0-9%209-9h15s8%200%208-8V14s1-9-20-9zm-7%207a3%203%200%20110%206%203%203%200%20010-6z'/%3e%3cpath%20fill='%23ffd43b'%20d='M33%2059c13%200%2012-6%2012-6v-9H32v-3h18s9%201%209-11-8-11-8-11h-6v8s0%209-9%209H21s-8%200-8%208v6s-1%209%2020%209zm7-7a3%203%200%20110-6%203%203%200%20010%206z'/%3e%3c/svg%3e";
const iconeDjango = "data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23092e20'%20d='M16%208h12v39c-4%201-7%202-12%202C7%2049%203%2045%203%2037s5-13%2014-13h2V8zm3%2021h-2c-4%200-6%202-6%207%200%204%202%206%205%206h3V29zm26-7H33V8h12v14zm0%205v24c0%208-1%2012-5%2016-3%203-8%205-15%207l-5-9c5-2%208-3%2010-6%202-2%203-5%203-10V27h12z'/%3e%3c/svg%3e";
const iconeFlask = "data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23222'%20d='M25%205h14v4h-3v15l17%2027c3%205%200%209-6%209H17c-6%200-9-4-6-9l17-27V9h-3V5zm6%2023L18%2049h28L33%2028v-4h-2v4z'/%3e%3cpath%20fill='%23fff'%20d='M22%2043h20l4%206H18z'/%3e%3c/svg%3e";
const iconeMysql = "data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2300758f'%20d='M8%2045c7-2%2011-9%2015-15%204-7%208-12%2014-11%205%201%207%206%2010%2010%202%203%204%205%209%205v4c-7%200-11-3-14-7-3-4-4-7-7-7-4-1-7%204-10%209-5%208-10%2015-20%2016z'/%3e%3cpath%20fill='%23f29111'%20d='M33%2020c7-5%2016-3%2021%204l-3%202c-4-5-10-6-15-3z'/%3e%3c/svg%3e";
const iconeJs = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iI2Y3ZGYxZSIvPjx0ZXh0IHg9IjQ0IiB5PSI1MSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMxMTEiPkpTPC90ZXh0Pjwvc3ZnPg==";
const iconePostgres = "data:image/svg+xml,%3csvg%20viewBox='0%200%2064%2064'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23336791'%20d='M32%205c-11%200-20%207-20%2020%200%209%204%2015%2010%2018l-1%209%208-5c2%201%205%201%208%201%2012%200%2019-8%2019-21S47%205%2032%205zm-8%2017a3%203%200%20110%206%203%203%200%20010-6zm17%200a3%203%200%20110%206%203%203%200%20010-6zm-16%2012c5%205%2011%205%2016%200l3%203c-7%208-16%208-23%200z'/%3e%3cpath%20fill='none'%20stroke='%23336791'%20stroke-width='3'%20d='M13%2023c-6-1-8%202-7%206%201%203%205%203%208%202m37-8c6-1%208%202%207%206-1%203-5%203-8%202'/%3e%3c/svg%3e";
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const icones = [
      iconePhp,
      iconePython,
      iconeJs,
      iconeMysql,
      iconeDjango,
      iconeFlask,
      iconePostgres
    ];
    const camadas = [
      {
        id: "tela",
        nome: "Na tela",
        texto: "O que a pessoa vê e toca.",
        itens: ["JavaScript", "HTML", "CSS"]
      },
      {
        id: "servidor",
        nome: "No servidor",
        texto: "As regras do negócio e as APIs.",
        itens: ["PHP", "Python", "Flask", "Django"]
      },
      {
        id: "banco",
        nome: "No banco",
        texto: "Onde os dados ficam guardados.",
        itens: ["MySQL", "PostgreSQL"]
      }
    ];
    const marcas = [
      { nome: "Alfred", logo: alfredLogo },
      { nome: "RajaHub", logo: rajaLogo, invertida: true },
      { nome: "Gostiki", logo: gostikiLogo },
      { nome: "PersonalFit" }
    ];
    const paradas = [
      { nome: "Riacho", em: 0.3 },
      { nome: "Clareira", em: 0.64 },
      { nome: "De longe", em: 0.8 },
      { nome: "Entardecer", em: 0.97 }
    ];
    const logosPaused = ref(false);
    const menuOpen = ref(false);
    const dark = ref(false);
    const motion = ref(true);
    const progressoCampo = ref(0);
    const camadaAtiva = ref(null);
    const selectedProject = ref(null);
    ref(null);
    ref(null);
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
    let contexto;
    let pararOrbita;
    function iniciarOrbita() {
      const palco = (void 0).querySelector(".orbita");
      const itens = gsap.utils.toArray(".orbita-item");
      if (!palco || !itens.length) return () => {
      };
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
          const a = instante * 0.32 + i / itens.length * Math.PI * 2 + giro.x;
          const fundo = Math.sin(a);
          const inclinacao = 0.34 + giro.y;
          const escala = 0.68 + (fundo + 1) * 0.26;
          item.style.transform = `translate3d(${(Math.cos(a) * raio).toFixed(1)}px, ${(fundo * raio * inclinacao).toFixed(1)}px, 0) scale(${escala.toFixed(3)})`;
          item.style.zIndex = fundo > 0 ? 3 : 1;
          item.style.opacity = (0.55 + (fundo + 1) * 0.225).toFixed(2);
        });
      };
      posicionar(0.6);
      if (!motion.value) return () => {
      };
      const passo = (instante) => posicionar(instante);
      gsap.ticker.add(passo);
      (void 0).addEventListener("pointermove", mover, { passive: true });
      return () => {
        gsap.ticker.remove(passo);
        (void 0).removeEventListener("pointermove", mover);
      };
    }
    function iniciarAnimacoes() {
      pararOrbita = iniciarOrbita();
      if (!motion.value || true) return;
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["site", { escuro: unref(dark), "movimento-desativado": !unref(motion) }]
      }, _attrs))}><a class="pular-conteudo" href="#sobre">Pular para o conteúdo</a><header class="${ssrRenderClass([{ solido: unref(cabecalhoSolido), oculto: unref(cabecalhoOculto) }, "cabecalho"])}"><a class="marca" href="#inicio" aria-label="Victor, início">victor<i>.</i></a><nav class="navegacao-principal" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#tecnologias">Tecnologias</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a></nav><button class="alternar-menu"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-controls="menu-movel">${ssrInterpolate(unref(menuOpen) ? "Fechar" : "Menu")}</button></header>`);
      if (unref(menuOpen)) {
        _push(`<nav id="menu-movel" class="navegacao-movel" aria-label="Navegação móvel"><a href="#sobre">Sobre</a><a href="#tecnologias">Tecnologias</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main id="conteudo"><div id="inicio" class="percurso-campo"><section class="abertura" style="${ssrRenderStyle({ "--progresso": unref(progressoCampo) })}" aria-label="Passeio pelo campo em 3D"><div class="arte-abertura">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="apresentacao"><h1 class="titulo-abertura"><span>Oi, eu sou</span><span>o Victor.</span></h1><p class="subtitulo-abertura"> Desenvolvedor web. Faço sites e sistemas, da tela ao banco de dados. Role a página: tem um caminho até os projetos. </p></div><div class="${ssrRenderClass([{ visivel: unref(progressoCampo) > 0.2 && unref(progressoCampo) < 0.97 }, "mensagem-percurso"])}"><h2><span>${ssrInterpolate(unref(frase).a)}</span><span>${ssrInterpolate(unref(frase).b)}</span></h2></div><div class="controles-percurso"><div class="paradas" role="group" aria-label="Paradas do passeio"><!--[-->`);
      ssrRenderList(paradas, (parada) => {
        _push(`<button class="${ssrRenderClass({ passou: unref(progressoCampo) >= parada.em - 0.01 })}">${ssrInterpolate(parada.nome)}</button>`);
      });
      _push(`<!--]--><span class="barra-percurso" aria-hidden="true" style="${ssrRenderStyle({ transform: `scaleX(${unref(progressoCampo)})` })}"></span></div><button class="pausar"${ssrRenderAttr("aria-pressed", !unref(motion))}>${ssrInterpolate(unref(motion) ? "Pausar" : "Retomar")}</button><a href="#sobre" class="pular">Pular o passeio</a></div><div class="cortina" aria-hidden="true" style="${ssrRenderStyle({ opacity: Math.max(0, (unref(progressoCampo) - 0.975) / 0.025) })}"></div></section></div><section id="sobre" class="sobre secao"><div class="orbita-area revelar" aria-hidden="true"><div class="orbita"><span class="orbita-centro">v.</span><!--[-->`);
      ssrRenderList(icones, (icone) => {
        _push(`<span class="orbita-item"><img${ssrRenderAttr("src", icone)} alt="" width="44" height="44"></span>`);
      });
      _push(`<!--]--></div></div><div class="sobre-texto"><h2 class="revelar">Entre sites<br><u>e sistemas</u></h2><p class="revelar"> Sou o Victor, desenvolvedor web. Já trabalhei em sites para empresas e sistemas de gestão, cuidando tanto das telas quanto da lógica e do banco de dados. Aqui reuni alguns desses projetos para mostrar um pouco do que faço. </p><p class="revelar"> Gosto de entender como as coisas funcionam antes de sair programando. O que precisa aparecer na tela? O que dá para simplificar? É a partir dessas perguntas que começo a trabalhar. </p></div></section><section id="marcas" class="faixa-marcas" aria-label="Marcas e projetos em que trabalhei"><div class="cabecalho-marcas"><p>Marcas e projetos em que trabalhei</p>`);
      if (unref(motion)) {
        _push(`<button${ssrRenderAttr("aria-pressed", unref(logosPaused))}>${ssrInterpolate(unref(logosPaused) ? "Girar de novo" : "Parar de girar")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="cilindro-palco"><div class="${ssrRenderClass([{ pausado: unref(logosPaused) }, "cilindro"])}"><!--[-->`);
      ssrRenderList(8, (n) => {
        _push(`<div class="face-marca" style="${ssrRenderStyle({ "--face": n - 1 })}"${ssrRenderAttr("aria-hidden", n > 4)}>`);
        if (marcas[(n - 1) % 4].logo) {
          _push(`<img${ssrRenderAttr("src", marcas[(n - 1) % 4].logo)}${ssrRenderAttr("alt", n > 4 ? "" : marcas[(n - 1) % 4].nome)} class="${ssrRenderClass({ invertida: marcas[(n - 1) % 4].invertida })}" loading="lazy">`);
        } else {
          _push(`<span>${ssrInterpolate(marcas[(n - 1) % 4].nome)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section id="tecnologias" class="tecnologias secao"><div class="pilha-area" aria-hidden="true"><div class="pilha"><!--[-->`);
      ssrRenderList(camadas, (camada, i) => {
        _push(`<div class="${ssrRenderClass([[`placa-${camada.id}`, { ativa: unref(camadaAtiva) === i }], "placa"])}" style="${ssrRenderStyle({ "--nivel": 1 - i })}"><b>${ssrInterpolate(camada.nome)}</b><!--[-->`);
        ssrRenderList(camada.itens, (item) => {
          _push(`<span>${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div><div class="tecnologias-texto"><h2 class="revelar">O que eu <u>uso</u></h2><p class="revelar"> Um sistema tem camadas, e eu trabalho em todas elas. </p><ul class="lista-camadas"><!--[-->`);
      ssrRenderList(camadas, (camada, i) => {
        _push(`<li class="revelar"><h3>${ssrInterpolate(camada.nome)}</h3><p>${ssrInterpolate(camada.texto)}</p><p class="itens-camada">${ssrInterpolate(camada.itens.join(", "))}</p></li>`);
      });
      _push(`<!--]--></ul></div></section><section id="projetos" class="projetos secao"><div class="cabecalho-secao"><h2 class="revelar">Alguns <u>trabalhos</u></h2><p class="revelar"> Sites para apresentar uma empresa e sistemas para organizar a rotina. Clique em um projeto para ver mais. </p></div><div class="grade-projetos"><article class="projeto projeto-largo"><button class="capa capa-raja" aria-label="Ver detalhes: RajaHub"><span class="capa-fundo"></span><img class="capa-print"${ssrRenderAttr("src", unref(rajaScreenshot))} alt="Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação." loading="lazy" width="1265" height="712"></button><h3>RajaHub</h3><p> Site do RajaHub, que apresenta suas frentes de atuação e conecta empreendedores e investidores. WordPress, PHP e JavaScript. </p></article><article class="projeto projeto-estreito"><button class="capa capa-alfred" aria-label="Ver detalhes: Alfred"><span class="capa-fundo"></span><img class="capa-logo"${ssrRenderAttr("src", unref(alfredLogo))} alt="" loading="lazy"><span class="capa-numero">27 cidades</span></button><h3>Alfred</h3><p> Sistema hospitalar utilizado em 27 cidades, em cujo desenvolvimento participei. PHP, MySQL e JavaScript. </p></article><article class="projeto projeto-estreito"><button class="capa capa-gostiki" aria-label="Ver detalhes: Gostiki"><span class="capa-fundo"></span><img class="capa-logo"${ssrRenderAttr("src", unref(gostikiLogo))} alt="" loading="lazy"><span class="capa-numero">Do balcão ao delivery</span></button><h3>Gostiki</h3><p> Sistema para a Gostiki Açaí &amp; Sorvete, com vendas, pedidos e gestão de lojas. PHP, MySQL e JavaScript. </p></article><article class="projeto projeto-largo"><button class="capa capa-personal" aria-label="Ver detalhes: PersonalFit"><span class="capa-fundo"></span><span class="capa-nome">PersonalFit</span><span class="capa-numero">Alunos, treinos e avaliações</span></button><h3>PersonalFit</h3><p> Gestão de alunos e treinos, com acesso para o personal e o aluno. PHP, MySQL e JavaScript. </p></article></div></section><footer id="contato" class="rodape secao"><div class="chamada"><h2 class="chamada-texto">Tem um projeto em mente?</h2><button class="botao-ideia"> Escrever minha ideia </button></div><p class="bastidores"> Este site foi feito com Nuxt, GSAP e Three.js. A paisagem lá de cima é toda gerada por código, sem nenhuma imagem. </p><div class="base-rodape"><span>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Victor</span><div class="preferencias"><button${ssrRenderAttr("aria-pressed", unref(dark))}>${ssrInterpolate(unref(dark) ? "Tema claro" : "Tema escuro")}</button><button${ssrRenderAttr("aria-pressed", !unref(motion))}>${ssrInterpolate(unref(motion) ? "Desligar movimento" : "Ligar movimento")}</button><a href="#inicio">Voltar ao topo</a></div></div></footer></main><dialog${ssrRenderAttr(
        "aria-label",
        unref(selectedProject) ? "Detalhes do projeto: " + unref(selectedProject) : "Detalhes do projeto"
      )} class="janela-detalhes">`);
      if (unref(selectedProject)) {
        _push(`<div class="conteudo-janela"><button class="fechar-janela" aria-label="Fechar detalhes"> Fechar </button>`);
        if (unref(selectedProject) === "PersonalFit") {
          _push(`<!--[--><h2>PersonalFit</h2><p> Sistema com áreas separadas para personal e aluno. Reúne cadastro de alunos, montagem de treinos, agenda e avaliações físicas. O aluno pode consultar seus treinos e acompanhar o histórico. Também conta com uma API para acesso aos dados do aluno. </p><p class="pilha-projeto">PHP, MySQL, JavaScript, HTML e CSS</p><!--]-->`);
        } else if (unref(selectedProject) === "Alfred") {
          _push(`<!--[--><h2>Alfred</h2><p> Participei do desenvolvimento do Alfred, sistema hospitalar utilizado em 27 cidades. O sistema reúne recursos para organizar atendimentos, agendas e outras rotinas da saúde, com módulos para diferentes etapas da gestão hospitalar. </p><p class="pilha-projeto">PHP, MySQL, JavaScript, HTML e CSS</p><!--]-->`);
        } else if (unref(selectedProject) === "RajaHub") {
          _push(`<!--[--><h2>RajaHub</h2><p> Participei do desenvolvimento do site do RajaHub, voltado a empreendedorismo, tecnologia e inovação. O site apresenta as frentes de atuação do grupo e os caminhos para quem busca investimento ou quer investir. O projeto local utiliza WordPress, com templates em PHP e estilos próprios. </p><img class="print-detalhes"${ssrRenderAttr("src", unref(rajaScreenshot))} alt="Página inicial do RajaHub, com navegação preta, detalhes verdes e apresentação sobre empreendedorismo, tecnologia e inovação." width="1265" height="712"><p class="pilha-projeto">WordPress, PHP, JavaScript, HTML e CSS</p><a class="link-texto" href="https://rajahub.com.br/" target="_blank" rel="noopener noreferrer">Visitar o site</a><!--]-->`);
        } else if (unref(selectedProject) === "Gostiki") {
          _push(`<!--[--><h2>Gostiki</h2><p> Participei do desenvolvimento do sistema da Gostiki Açaí &amp; Sorvete. O projeto reúne ponto de venda, mesas, delivery, cadastro de produtos e complementos, além da gestão de lojas e clientes. Também inclui recursos de integração com o iFood e impressão de comandas pelo Gostiki Print. </p><p class="pilha-projeto">PHP, MySQL, JavaScript, HTML e CSS</p><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dialog><dialog aria-label="Escrever uma ideia de projeto" class="janela-detalhes"><form class="conteudo-janela"><button type="button" class="fechar-janela" aria-label="Fechar rascunho"> Fechar </button><h2>Qual é a sua ideia?</h2><p> Os canais de contato serão adicionados em breve. Por enquanto, organize sua ideia e salve um rascunho no seu dispositivo. </p><label for="ideia">O que você quer construir?</label><textarea id="ideia" required maxlength="5000" rows="5" placeholder="Conte sobre o projeto, o objetivo e o que você imagina…">${ssrInterpolate(unref(brief))}</textarea><button class="salvar-ideia" type="submit">Salvar minha ideia</button><p class="nota-formulario" role="status">${ssrInterpolate(unref(saved) ? "Rascunho preparado para download. Nenhuma mensagem foi enviada." : "Seu texto permanece no navegador. Nada é enviado.")}</p></form></dialog></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-mPoZZr7A.js"));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-C46XOCRf.js"));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));
export {
  useNuxtApp as a,
  useRuntimeConfig as b,
  nuxtLinkDefaults as c,
  entry_default as default,
  encodeRoutePath as e,
  navigateTo as n,
  resolveRouteObject as r,
  tryUseNuxtApp as t,
  useRouter as u
};
//# sourceMappingURL=server.mjs.map
