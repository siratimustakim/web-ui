// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
    storageKey: 'theme',
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_API_BASE_URL,
    },
  },
});
