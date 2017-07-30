// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from './components/navbar.vue'
import ripple from './components/ripple.vue'

Vue.config.productionTip = false

/* Components */
Vue.component('navbar', navbar)
Vue.component('ripple', ripple)

export const senderBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
