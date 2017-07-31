<template>
  <div class="box">
    <nav class="navbar" :class="{ 'is-active': isToggled }">
      <ripple class="is-clickable is-navbar-toggle elevation _none" @click.native="toggle"></ripple>
      <span class="route is-active no-select text is-bold" v-if="!isToggled">{{ routeName }}</span>
      <template v-if="isToggled">
        <div class="navbar-holder is-menu" :key="'div'">
          <span class="item" v-for="link in links" :key="'link'">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </span>
        </div>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { name: 'Andrutap', path: '/about' },
        { name: 'Portafolio', path: '/portfolio' },
        { name: 'Lab', path: '/lab' },
        { name: 'Contacto', path: '/contacto' }
      ],
      isToggled: false,
      routeName: this.$route.name
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
      this.routeName = this.$route.name
    }
  }
}
</script>
