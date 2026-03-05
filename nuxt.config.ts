// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: "static",
  },

  app: {
    head: {
      title: "Golden Isles Chess Club",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Join the Golden Isles Chess Club in St. Simons, Jekyll, and Brunswick. Chess meetups, tournaments, lessons, and community events for all skill levels.",
        },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Golden Isles Chess Club" },
        { property: "og:title", content: "Golden Isles Chess Club" },
        {
          property: "og:description",
          content:
            "Join the Golden Isles Chess Club in St. Simons, Jekyll, and Brunswick. Chess meetups, tournaments, lessons, and community events for all skill levels.",
        },
        {
          property: "og:image",
          content: "https://goldenisleschessclub.com/images/og-image.png",
        },
        { property: "og:url", content: "https://goldenisleschessclub.com" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Golden Isles Chess Club" },
        {
          name: "twitter:description",
          content:
            "Join the Golden Isles Chess Club in St. Simons, Jekyll, and Brunswick. Chess meetups, tournaments, lessons, and community events for all skill levels.",
        },
        {
          name: "twitter:image",
          content: "https://goldenisleschessclub.com/images/og-image.png",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
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
      siteUrl: "https://goldenisleschessclub.com",
      siteDescription:
        "Join the Golden Isles Chess Club in St. Simons, Jekyll, and Brunswick. Chess meetups, tournaments, lessons, and community events for all skill levels.",
      siteImage: "https://goldenisleschessclub.com/images/og-image.png",
      storyblokVersion: process.env.STORYBLOK_VERSION || "draft",
    },
  },
});
