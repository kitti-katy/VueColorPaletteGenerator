import Vue from 'vue'
import Router from 'vue-router'
import MainHolder from '@/components/MainHolder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainHolder',
      component: MainHolder
    }
  ]
})
