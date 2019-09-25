import pkg from './package'
const baseUrl = 'https://turbosolutionseurope.com/'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Turbo Solutions Europe',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap',
        rel: 'stylesheet'
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
  css: ['~/styles/base.css'],
  router: {
    middleware: ['i18n']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/axios',
    '~/plugins/vuelidate',
    '~/plugins/google-maps'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: baseUrl
  },
  googleAnalytics: {
    id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
    set: [{ field: 'anonymizeIp', value: true }]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    transpile: [/^vue2-google-maps($|\/)/],

    postcss: {
      plugins: {
        'postcss-mixins': {
          mixinsDir: './styles/mixins/'
        },
        'postcss-preset-env': {
          importFrom: ['./styles/media-queries/media-queries.css'],

          features: {
            'nesting-rules': true,
            'custom-media-queries': true,
            'media-query-ranges': true
          }
        }
      }
    }
  },
  sitemap: {
    hostname: baseUrl
  }
}
