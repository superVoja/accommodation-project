const pkg = require('./package')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Apartmani u Sokobanji',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
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
      { accessToken: process.env.NODE_ENV === 'production' ? '52FOiKNxeblxOUQMK3fZogtt' : 't5QxDrKzSPlZxusztTchjAtt', cacheProvider: 'memory' }
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
    baseURL: process.env.BASE_URL || 'http://localhost:3000/'
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
  generate:{
    routes: function(){
      return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=52FOiKNxeblxOUQMK3fZogtt&cv=' + Math.floor(Date.now() / 1e3)).then(res => {
        const rooms = res.data.stories.map(bp => bp.full_slug)
        return [
          '/',
          '/about',
          '/sokobanja',
          '/medicine',
          '/rooms',
          ...rooms
        ]
      })
    }
  }
}
