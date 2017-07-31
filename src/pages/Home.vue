<template>
  <div class="row">
    <div class="tile is-fullscreen">
      <div class="grid menu-grid element is-centered _relative">
        <router-link v-for="link in links" :key="'link.name'" :to="link.path" tag="span" class="text is-big is-regular">{{ link.name }}</router-link>
      </div>
    </div>
    <div class="tile">
      <h1 class="text is-huge">Hola<span class="text is-red" @click="namePrompt">.</span></h1>
      <div class="row text is-big is-regular">
        <div class="tile">
          <h3 v-for="item in whatIDo" :key="'item'" class="no-margin elevation _top element is-relative">{{ item }}</h3>
          <span class="text is-huge is-light-special ampersand no-select is-orange"><i>&</i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        whatIDo: ['Diseño', 'Escribo código'],
        isReversed: false,
        links: [
          { name: 'Andrutap', path: '/about' },
          { name: 'Portafolio', path: '/portfolio' },
          { name: 'Lab', path: '/lab' },
          { name: 'Contacto', path: '/contacto' }
        ]
      }
    },
    methods: {
      namePrompt () {
        prompt('Hola')
      }
    },
    metaInfo: {
      title: 'andrutap | home'
    }
  }
</script>
