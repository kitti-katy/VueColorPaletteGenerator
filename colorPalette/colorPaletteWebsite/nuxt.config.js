

module.exports = {
  plugins: ['~plugins/vuetify.js', '~plugins/materialDesign.js', '~plugins/bootstrap.js' ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'colorpalettewebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
    ],
    css:[ {
      src: '~/assets/css/app.styl',
      lang: 'styl'
    },
    'bootstrap/dist/css/bootstrap.css',
 'bootstrap-vue/dist/bootstrap-vue.css'
  ],
    modules:[
      'vue-material',
      ['nuxt-vue-material', {theme: 'default-dark'}],
      'bootstrap-vue/nuxt',
    ],
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */


  build: {

    extend(config, ctx) {
      const vueLoader = config.module.rules.find(r => r.loader === 'vue-loader')
      
      
   config.module.rules.push({  
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
      })},



    vendor: ['vuetify'],
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** Global CSS
  */
  css: [
    { src: '@/sass/main.sass', lang: 'sass' }
  ],

}
