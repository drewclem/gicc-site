// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@storyblok/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'],

  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    bridge: true,
    devtools: true,
    apiOptions: {
      region: 'us', // Change to 'eu' if your space is in Europe
    },
  },

  components: {
    dirs: [
      '~/components',
      { path: '~/storyblok', global: true },
    ],
  },

  runtimeConfig: {
    public: {
      storyblokVersion: process.env.STORYBLOK_VERSION || 'draft',
    },
  },
})
