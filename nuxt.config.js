export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE
    }
  },

  imports: {
    dirs: ['stores']
  },

  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '/node_modules/primeflex/primeflex.css',
    '~/assets/scss/main.scss',
  ],

  build: {
    transpile: ['primevue']
  },

  devtools: false
})
