export default {
  mode: 'spa',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /* Global CSS */
  css: [{ src: '~/assets/scss/default.scss', lang: 'scss' }],
  plugins: [
    '@/plugins/scrollHandler.js',
    '@/plugins/main-slider.js',
    '@/plugins/on_offHandler.js',
    { src: 'plugins/owl.js', ssr: false },
  ],
  components: true,
  buildModules: [],
  modules: ['nuxt-mq', '@nuxtjs/style-resources'],
  mq: {
    defaultBreakpoint: 'test',
    breakpoints: {
      mobile: 640,
      tablet: 767,
      labtop: 1200,
      pc: Infinity,
    },
  },
  styleResources: {
    scss: ['@/assets/scss/_mainDesc.scss', '@/assets/scss/_menu.scss'],
  },

  build: {},
};
