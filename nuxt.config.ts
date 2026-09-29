const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  telemetry: false,
  css: [
    "@fontsource-variable/dm-sans",
    "@fontsource/instrument-serif/latin-400.css",
    "@fontsource/instrument-serif/latin-400-italic.css",
    "~/assets/main.css",
    "~/assets/campo.css",
  ],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: "pt-BR" },
      title: "Victor — Código com intenção.",
      meta: [
        {
          name: "description",
          content:
            "Portfólio de Victor. Desenvolvimento web, interfaces e experiências digitais. PHP, Python, Flask, Django, MySQL e JavaScript.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: `${baseURL.replace(/\/$/, "")}/favicon.svg`,
        },
      ],
    },
  },
});
