// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Color from './HelpClasses/Color'
Vue.config.productionTip = false
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    editorPage:
      {
        Filters:
          {
            FilterChosen: "HSL",
            HSLFilter: {
              colorPicker: {
                baseColor: new Color(100, 0, 100, 0),
                pickerPositionX: 0,
                pickerPositionY: 0,
                pickerSatPositionY: 0,
                pickerCircleBorderColor: 'white',
              },
              changes: {
                h: 0, s: 0, l: 0, numberOfColors: 6
              }
            }
          }
      },
  },
  mutations: {
    repickColor (state, evt) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
