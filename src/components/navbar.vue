<template>
  <div class="box">
    <nav class="navbar" v-bind:class="{ 'is-active': isToggled }">
      <ripple class="is-white is-navbar-toggle" @click.native="toggle"></ripple>
      <div class="navbar is-menu text is-white">
        <template v-if="isToggled">
          <span class="item" v-for="link in links">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </span>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
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
    toggle () {
      this.isToggled = !this.isToggled
    }
  },
  watch: {
    '$route' () {
      this.isToggled = false
    }
  }
}
</script>
