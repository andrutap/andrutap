<template>
  <div class="box is-fluid">
    <nav class="navbar" v-bind:class="{ 'is-active': isToggled }">
      <ripple class="is-ghost is-navbar-toggle elevation _none" @click.native="toggle"></ripple>
      <transition-group name="fade">
        <template v-if="isToggled">
          <div class="navbar-holder is-menu text is-white" :key="'div'">
            <span class="item" v-for="link in links" :key="'link'">
              <router-link :to="link.path">{{ link.name }}</router-link>
            </span>
          </div>
      </template>
      </transition-group>
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
