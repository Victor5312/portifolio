const baseURL = process.env.NUXT_APP_BASE_URL || "/";
const outputDir = process.env.NUXT_BUILD_OUTPUT_DIR || ".output";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  telemetry: false,
  nitro: {
    output: { dir: outputDir },
  },
  css: [
    "@fontsource-variable/dm-sans",
    "@fontsource-variable/bricolage-grotesque",
    "~/assets/main.css",
    "~/assets/campo.css",
  ],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: "pt-BR" },
      title: "Victor, desenvolvedor web",
      meta: [
        {
          name: "description",
          content:
            "Portfólio de Victor, desenvolvedor web. Sites e sistemas com PHP, Python, Flask, Django, MySQL, PostgreSQL e JavaScript.",
        },
        { name: "theme-color", content: "#1c3324" },
        { property: "og:title", content: "Victor, desenvolvedor web" },
        {
          property: "og:description",
          content: "Sites e sistemas, da tela ao banco de dados.",
        },
        { property: "og:type", content: "website" },
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
