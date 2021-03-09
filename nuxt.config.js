export default {
  target: 'static',

  head: {
    title: 'portfolio_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'zh'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              homepage: 'Home page',
            },
            zh: {
              homepage: '首頁',
            },
          },
        },
      },
    ],
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  content: {},

  build: {},
}
