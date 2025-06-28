// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['nuxt-svgo', 'vue3-carousel-nuxt'],
  app: {
    baseURL: '/codewin/'
  }
})