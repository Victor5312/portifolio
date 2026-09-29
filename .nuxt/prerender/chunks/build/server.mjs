import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { hasInjectionContext, getCurrentInstance, defineComponent, createElementBlock, shallowRef, provide, cloneVNode, h, createApp, onErrorCaptured, onServerPrefetch, unref, createVNode, resolveDynamicComponent, shallowReactive, reactive, effectScope, inject, defineAsyncComponent, mergeProps, ref, computed, getCurrentScope, toRef, isReadonly, useSSRContext, isRef, isShallow, isReactive, toRaw } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1 } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/h3/dist/index.mjs';
import { parseURL, encodePath, decodePath, hasProtocol, isScriptProtocol, joinURL, withQuery, isEqual, stringifyParsedURL, stringifyQuery, parseQuery } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/ufo/dist/index.mjs';
import { defu } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/defu/dist/defu.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../_/nitro.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/destr/dist/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/unstorage/dist/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/xampp/htdocs/portifolio-personalizado/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/ohash/dist/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/klona/dist/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/scule/dist/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/pathe/dist/index.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/devalue/index.js';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/unhead/dist/utils.mjs';
import 'file://C:/xampp/htdocs/portifolio-personalizado/node_modules/unhead/dist/plugins.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
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
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
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
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
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
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
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
const profile = {
  name: "Victor",
  role: "Desenvolvimento web & experiências digitais",
  email: "",
  github: "",
  linkedin: "",
  bio: "Meu universo conecta interfaces, lógica e dados. Entre o front-end e o back-end, exploro formas de transformar ideias em experiências digitais claras, funcionais e cheias de personalidade."
};
const _sfc_main$2 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const menuOpen = ref(false);
    const dark = ref(false);
    const motion = ref(true);
    const progressoCampo = ref(0);
    const selectedFilter = ref("Todas");
    const selectedProject = ref(null);
    ref(null);
    ref(null);
    const brief = ref("");
    const saved = ref(false);
    const filters = ["Todas", "Front-end", "Back-end", "Banco de dados"];
    const technologies = [
      {
        name: "PHP",
        category: "Back-end",
        label: "Aplicações & lógica de servidor",
        mark: "<?>"
      },
      {
        name: "Python",
        category: "Back-end",
        label: "Automação & desenvolvimento web",
        mark: "Py"
      },
      {
        name: "Flask",
        category: "Back-end",
        label: "APIs & aplicações leves",
        mark: "Fl"
      },
      {
        name: "Django",
        category: "Back-end",
        label: "Aplicações web estruturadas",
        mark: "Dj"
      },
      {
        name: "MySQL",
        category: "Banco de dados",
        label: "Dados & consultas relacionais",
        mark: "My"
      },
      {
        name: "JavaScript",
        category: "Front-end",
        label: "Interatividade & comportamento",
        mark: "Js"
      },
      {
        name: "HTML",
        category: "Front-end",
        label: "Estrutura & semântica",
        mark: "</>"
      },
      {
        name: "CSS",
        category: "Front-end",
        label: "Design & responsividade",
        mark: "#"
      }
    ];
    const filtered = computed(
      () => technologies.filter(
        (t) => selectedFilter.value === "Todas" || t.category === selectedFilter.value
      )
    );
    const projects = [
      {
        id: "01",
        name: "Código com intenção.",
        type: "ESTE PORTFÓLIO",
        tags: "NUXT · VUE · GSAP",
        class: "portfolio",
        title: "Uma identidade feita de código.",
        description: "Este portfólio une uma interface responsiva, navegação por seções, transições com GSAP e um campo procedural em Three.js. Uma experiência original inspirada na linguagem visual da Emotion Agency.",
        stack: ["Nuxt", "Vue", "JavaScript", "HTML", "CSS", "GSAP", "Three.js"]
      },
      {
        id: "02",
        name: "Natureza em movimento.",
        type: "EXPERIMENTO INTERATIVO",
        tags: "THREE.JS · WEBGL",
        class: "experimento",
        title: "Um campo que ganha vida.",
        description: "Um percurso em tempo real por colinas, um riacho e grama ao vento. Role para caminhar pelo campo; mova o mouse para afastar as folhas desde o primeiro instante. Movimentos rápidos criam rajadas mais fortes. Você pode pausar ou pular o percurso a qualquer momento.",
        stack: ["Three.js", "WebGL", "JavaScript"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["site", { escuro: unref(dark), "movimento-desativado": !unref(motion) }]
      }, _attrs))}><a class="pular-conteudo" href="#conteudo">Pular para o conteúdo</a><header class="cabecalho"><a class="marca" href="#inicio" aria-label="Victor, início">victor<span class="simbolo-marca">✳</span></a><p class="descricao-cabecalho"> DESENVOLVIMENTO WEB<br>&amp; EXPERIÊNCIAS DIGITAIS </p><nav class="navegacao-principal" aria-label="Navegação principal"><a href="#sobre">Sobre <sup>01</sup></a><a href="#tecnologias">Tecnologias <sup>02</sup></a><a href="#projetos">Projetos <sup>03</sup></a></nav><a class="link-contato" href="#contato">Vamos conversar <span>↗</span></a><button class="alternar-menu"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-controls="menu-movel">${ssrInterpolate(unref(menuOpen) ? "Fechar −" : "Menu +")}</button></header>`);
      if (unref(menuOpen)) {
        _push(`<nav id="menu-movel" class="navegacao-movel" aria-label="Navegação móvel"><!--[-->`);
        ssrRenderList([
          "Sobre",
          "Tecnologias",
          "Projetos",
          "Contato"
        ], (label, index) => {
          _push(`<a${ssrRenderAttr("href", "#" + label.toLowerCase())}><sup>0${ssrInterpolate(index + 1)}</sup>${ssrInterpolate(label)} ↗</a>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main id="conteudo"><div id="inicio" class="percurso-campo"><section class="abertura" style="${ssrRenderStyle({ "--progresso": unref(progressoCampo) })}" aria-label="Percurso interativo pelo campo"><div class="introducao-abertura"><span class="sobretitulo"><i class="ponto-destaque"></i> OLÁ, EU SOU O VICTOR</span><p>Entre boas ideias<br>e experiências reais, existe código.</p></div><div class="arte-abertura">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="legenda-arte"><span>UM CAMPO DE POSSIBILIDADES</span><span>ROLE PARA CAMINHAR. MOVA O MOUSE PARA EXPLORAR.</span></div><h1 class="titulo-abertura"><span>Tem que ver </span><span class="segunda-linha"><em>oque.</em><span class="asterisco-titulo" aria-hidden="true">✳</span></span><span>Colocar <em>aqui.</em></span></h1><div class="${ssrRenderClass([{
        visivel: unref(progressoCampo) > 0.2 && unref(progressoCampo) < 0.94,
        "mensagem-clareira": unref(progressoCampo) > 0.58
      }, "mensagem-percurso"])}"><span class="sobretitulo">${ssrInterpolate(unref(progressoCampo) < 0.58 ? "01 / EXPLORE" : unref(progressoCampo) < 0.7 ? "02 / RESPIRE" : unref(progressoCampo) < 0.83 ? "03 / AMPLIE" : "04 / NOVOS ÂNGULOS")}</span>`);
      if (unref(progressoCampo) < 0.58) {
        _push(`<h2> Cada movimento<br>abre <em>um caminho.</em></h2>`);
      } else if (unref(progressoCampo) < 0.7) {
        _push(`<h2> Um lugar<br>para <em>florescer.</em></h2>`);
      } else if (unref(progressoCampo) < 0.83) {
        _push(`<h2> Veja além<br>do <em>primeiro olhar.</em></h2>`);
      } else {
        _push(`<h2>A mesma ideia.<br><em>Outros pontos de vista.</em></h2>`);
      }
      _push(`</div><div class="controles-percurso"><span>PERCURSO ${ssrInterpolate(String(Math.round(unref(progressoCampo) * 100)).padStart(3, "0"))}%</span><div class="barra-percurso" aria-hidden="true"><span style="${ssrRenderStyle({ transform: `scaleX(${unref(progressoCampo)})` })}"></span></div><button${ssrRenderAttr("aria-pressed", !unref(motion))}>${ssrInterpolate(unref(motion) ? "Pausar movimento" : "Retomar movimento")}</button><a href="#sobre">Pular percurso ↗</a></div><div class="rodape-abertura"><a class="link-circular" href="#projetos"><span class="circulo">↗</span> Explore meu trabalho</a><p> DO BACK-END À INTERFACE.<br>DA PRIMEIRA LINHA AO ÚLTIMO DETALHE. </p><a href="#sobre" class="link-rolagem">ROLE PARA DESCOBRIR <span>↓</span></a></div><div class="indice-abertura"><span>PORTFÓLIO PESSOAL</span><span>CRIATIVIDADE ENCONTRA TECNOLOGIA</span><span>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</span></div></section></div><section id="sobre" class="sobre espacamento-secao"><div class="rotulo-secao"><span>01 / SOBRE MIM</span><span>IDEIAS → CÓDIGO → EXPERIÊNCIAS</span></div><div class="composicao-sobre"><div class="simbolo-sobre" aria-hidden="true">↳</div><div><h2>Por trás de cada tela,<br>uma <em>boa ideia.</em></h2><div class="texto-sobre"><p>${ssrInterpolate(unref(profile).bio)}</p><p> Acredito no encontro entre o que funciona bem e o que faz sentir. Código com propósito, atenção aos detalhes e espaço para experimentar. </p></div><a href="#tecnologias" class="link-texto">Conheça meu universo de tecnologias <span>↘</span></a></div></div></section><section id="tecnologias" class="tecnologias espacamento-secao"><div class="rotulo-secao"><span>02 / TECNOLOGIAS</span><span>AS FERRAMENTAS. AS POSSIBILIDADES.</span></div><div class="cabecalho-secao"><h2>Minha base.<br><em>Muitas possibilidades.</em></h2><p> Da estrutura visual à lógica de negócio.<br>Tecnologias que fazem parte do meu universo. </p></div><div class="filtros" role="group" aria-label="Filtrar tecnologias"><!--[-->`);
      ssrRenderList(filters, (filter) => {
        _push(`<button${ssrRenderAttr("aria-pressed", unref(selectedFilter) === filter)} class="${ssrRenderClass({ ativo: unref(selectedFilter) === filter })}">${ssrInterpolate(filter)}`);
        if (filter === "Todas") {
          _push(`<span>08</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div><div class="grade-tecnologias"><!--[-->`);
      ssrRenderList(unref(filtered), (tech, index) => {
        _push(`<article class="cartao-tecnologia"><div class="topo-tecnologia"><span class="simbolo-tecnologia">${ssrInterpolate(tech.mark)}</span><span class="categoria-tecnologia">${ssrInterpolate(tech.category)}</span></div><h3>${ssrInterpolate(tech.name)}</h3><p>${ssrInterpolate(tech.label)}</p><span class="seta-tecnologia" aria-hidden="true">↗</span></article>`);
      });
      _push(`<!--]--></div></section><section id="projetos" class="projetos espacamento-secao"><div class="rotulo-secao"><span>03 / PROJETOS &amp; EXPLORAÇÕES</span><span>FEITO PARA EXPLORAR</span></div><div class="cabecalho-secao"><h2>Do conceito<br>ao <em>primeiro clique.</em></h2><p> Um portfólio em construção constante.<br>Conheça este site e o experimento que vive nele. </p></div><div class="grade-projetos"><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<button class="cartao-projeto"${ssrRenderAttr("aria-label", "Ver detalhes: " + project.name)}><div class="${ssrRenderClass([project.class, "visual-projeto"])}"><div class="topo-visual"><span>V / ${ssrInterpolate(project.id)}</span><span>${ssrInterpolate(project.type)}</span></div>`);
        if (project.id === "01") {
          _push(`<div class="miniatura-site"><div class="miniatura-navegacao"> victor✳ <span>DESIGN &amp; CÓDIGO ↗</span></div><div class="miniatura-titulo"> Ideias que<br>ganham <em>vida.</em></div><div class="miniatura-orbita" aria-hidden="true"></div><div class="miniatura-rodape"> DO CONCEITO AO DIGITAL. <span>↗</span></div></div>`);
        } else {
          _push(`<!--[--><div class="arte-geometrica" aria-hidden="true"><!--[-->`);
          ssrRenderList(12, (n) => {
            _push(`<span style="${ssrRenderStyle({ transform: `rotate(${n * 15}deg)` })}"></span>`);
          });
          _push(`<!--]--></div><span class="rotulo-experimento">EXPERIMENTO / 001<br>FOLHAS × VENTO</span><!--]-->`);
        }
        _push(`<span class="abrir-projeto">↗</span></div><div class="informacoes-projeto"><h3>${ssrInterpolate(project.name)}</h3><span>${ssrInterpolate(project.tags)}</span></div></button>`);
      });
      _push(`<!--]--></div></section><section class="feito-com espacamento-secao"><div class="rotulo-secao"><span>NOS BASTIDORES</span><span>ESTE SITE TAMBÉM É UM PROJETO.</span></div><div class="conteudo-construcao"><h2>Feito com código.<br><em>E um pouco de curiosidade.</em></h2><div><p>A experiência que você está explorando foi construída com:</p><div class="etiquetas-tecnologias"><!--[-->`);
      ssrRenderList([
        "Nuxt",
        "Vue",
        "JavaScript",
        "HTML",
        "CSS",
        "GSAP",
        "Three.js",
        "WebGL"
      ], (tech) => {
        _push(`<span>${ssrInterpolate(tech)}</span>`);
      });
      _push(`<!--]--></div><p class="nota-construcao"> Nuxt &amp; Vue na estrutura. GSAP no movimento.<br>Three.js &amp; WebGL na dimensão extra. </p></div></div></section><footer id="contato" class="rodape espacamento-secao"><div class="rotulo-secao"><span>04 / O PRÓXIMO PASSO</span><span class="destaque-rodape">● UMA IDEIA PODE SER O COMEÇO.</span></div><div class="titulo-rodape"><h2>Vamos criar<br>algo <em>interessante?</em></h2>`);
      if (unref(profile).email) {
        _push(`<a${ssrRenderAttr("href", "mailto:" + unref(profile).email)} class="seta-grande" aria-label="Enviar e-mail">↗</a>`);
      } else {
        _push(`<button class="seta-grande" aria-label="Preparar uma ideia de projeto"> ↗ </button>`);
      }
      _push(`</div><div class="contato-rodape"><p> Todo projeto começa com uma conversa.<br>E toda conversa, com uma boa ideia. </p>`);
      if (unref(profile).email) {
        _push(`<a${ssrRenderAttr("href", "mailto:" + unref(profile).email)} class="link-texto">${ssrInterpolate(unref(profile).email)} ↗</a>`);
      } else {
        _push(`<button class="link-texto"> Prepare sua ideia <span>↗</span></button>`);
      }
      _push(`<div class="redes-sociais">`);
      if (unref(profile).github) {
        _push(`<a${ssrRenderAttr("href", unref(profile).github)} target="_blank" rel="noopener noreferrer">GitHub ↗</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(profile).linkedin) {
        _push(`<a${ssrRenderAttr("href", unref(profile).linkedin)} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="base-rodape"><a class="marca" href="#inicio">victor<span class="simbolo-marca">✳</span></a><span>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} VICTOR · FEITO COM INTENÇÃO.</span><div class="preferencias"><button${ssrRenderAttr("aria-pressed", unref(dark))}>${ssrInterpolate(unref(dark) ? "◑ Tema escuro" : "◐ Tema claro")}</button><button${ssrRenderAttr("aria-pressed", unref(motion))}> Movimento ${ssrInterpolate(unref(motion) ? "ativado" : "desativado")}</button><a href="#inicio" aria-label="Voltar ao topo">↑</a></div></div></footer></main><dialog${ssrRenderAttr("aria-label", unref(selectedProject)?.title || "Detalhes do projeto")} class="janela-detalhes">`);
      if (unref(selectedProject)) {
        _push(`<div class="conteudo-janela"><button class="fechar-janela" aria-label="Fechar detalhes"> ✕</button><span class="sobretitulo">${ssrInterpolate(unref(selectedProject).type)} / ${ssrInterpolate(unref(selectedProject).id)}</span><h2>${ssrInterpolate(unref(selectedProject).title)}</h2><p>${ssrInterpolate(unref(selectedProject).description)}</p><div class="etiquetas-tecnologias"><!--[-->`);
        ssrRenderList(unref(selectedProject).stack, (tech) => {
          _push(`<span>${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div><a class="link-circular" href="#inicio"><span class="circulo">↗</span> Explorar a experiência</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dialog><dialog aria-label="Preparar uma ideia de projeto" class="janela-detalhes"><form class="conteudo-janela"><button type="button" class="fechar-janela" aria-label="Fechar rascunho"> ✕</button><span class="sobretitulo">DO PRIMEIRO INSIGHT AO PRÓXIMO PASSO</span><h2>Qual é a <em>sua ideia?</em></h2><p> Os canais de contato serão adicionados em breve. Por enquanto, organize sua ideia e salve um rascunho no seu dispositivo. </p><label for="ideia">O que você quer construir?</label><textarea id="ideia" required maxlength="5000" rows="5" placeholder="Conte sobre o projeto, o objetivo e o que você imagina…">${ssrInterpolate(unref(brief))}</textarea><button class="salvar-ideia" type="submit"> Salvar minha ideia <span>↓</span></button><p class="nota-formulario" role="status">${ssrInterpolate(unref(saved) ? "Rascunho preparado para download. Nenhuma mensagem foi enviada." : "Seu texto permanece no navegador. Nada é enviado.")}</p></form></dialog></div>`);
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
    const _Error404 = defineAsyncComponent(() => import('./error-404-CdcHPaOJ.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-z2IllWnK.mjs'));
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

export { useNuxtApp as a, useRuntimeConfig as b, nuxtLinkDefaults as c, entry_default as default, encodeRoutePath as e, navigateTo as n, resolveRouteObject as r, tryUseNuxtApp as t, useRouter as u };
//# sourceMappingURL=server.mjs.map
