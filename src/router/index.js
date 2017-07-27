import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Contacto from '@/pages/Contacto'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    }
  ]
})
