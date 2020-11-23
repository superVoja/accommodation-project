const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Playfair+Display&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/scss/main.scss', '~/assets/scss/colors.scss'],
  styleResources: {
    scss: ['./assets/scss/*.scss', '~assets/scss/_mixins.scss']
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuelidate', '@/plugins/google-maps'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      { accessToken: '1IJHyouEUyPgq0VEYIGAnQtt', cacheProvider: 'memory' }
    ],

    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

   /*
  ** Axios
  */

  axios:{
    baseURL: process.env.BASE_URL || 'http://localhost:3000/api'
  },
  /*
  ** Server
  */
 server:{
   port: process.env.PORT || 8000
 },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
}
