<template>
  <div class="box">
    <nav class="navbar" v-bind:class="{ 'is-active': isToggled }">
      <ripple class="is-navbar-toggle" @click.native="toggle"></ripple>
      <div class="navbar is-menu">
        <span class="item" v-for="link in links">
          <router-link :to="link.path">{{ link.name }}</router-link>    
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
import ripple from './ripple'
export default {
  data () {
    return {
      links: [
        { name: 'Andrés Tapia', path: '/about' },
        { name: 'Portafolio', path: '/portafolio' },
        { name: 'Lab', path: '/lab' },
        { name: 'Contacto', path: '/contacto' }
      ],
      isToggled: false
    }
  },
  methods: {
    toggle: function () {
      this.isToggled = !this.isToggled
    }
  },
  components: {
    ripple
  }
}
</script>
