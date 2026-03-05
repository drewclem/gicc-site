// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: "static",
  },

  modules: ["@storyblok/nuxt", "@nuxtjs/tailwindcss", "@nuxt/fonts"],

  css: ["~/assets/css/main.css"],

  fonts: {
    families: [
      {
        name: "Outfit",
        provider: "google",
        weights: [400, 500, 700],
      },
      {
        name: "DIN Condensed",
        provider: "local",
        weights: [400, 500, 700],
      },
    ],
  },

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    bridge: true,
    devtools: true,
    apiOptions: {
      region: "eu",
    },
  },

  components: {
    dirs: ["~/components", { path: "~/storyblok", global: true }],
  },

  runtimeConfig: {
    public: {
      siteName: "Golden Isles Chess Club",
      storyblokVersion: process.env.STORYBLOK_VERSION || "draft",
    },
  },
});
