import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Portafolio from '../pages/Portafolio'
import Contacto from '../pages/Contacto'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
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
      path: '/about',
      name: 'Andrutap',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portafolio',
      component: Portafolio
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    }
  ]
})
