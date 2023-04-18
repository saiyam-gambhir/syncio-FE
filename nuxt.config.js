export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE,
      appId: process.env.NUXT_APP_ID
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  googleFonts: {
    families: {
      'Inter+Tight': {
        wght: [400, 600, 700],
      }
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
  },

  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    '/node_modules/primeflex/primeflex.css',
    'primeicons/primeicons.css',
    '~/assets/scss/main.scss',
  ],

  router: {
    middleware: [
      'auth',
      'login'
    ]
  },

  build: {
    transpile: ['primevue']
  },

  devtools: false
})
