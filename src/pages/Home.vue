<template>
  <div class="row">
    <div class="tile is-fullscreen">
      <div class="grid element is-centered _relative">
        <router-link v-for="link in links" :key="'link.name'" :to="link.path" tag="span" class="text is-big is-regular">{{ link.name }}</router-link>
      </div>
    </div>
    <div class="tile">
      <h1 class="text is-huge">Hola<span class="text is-yellow">.</span></h1>
      <div class="row text is-center is-regular" :class="{ 'is-reverse': isReversed }">
        <div class="tile" v-for="item in whatIDo" :key="'item'">
          <h3>{{ item }}</h3>
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
    metaInfo: {
      title: 'andrutap | home'
    },
    created () {
      var vm = this
      setInterval(function () {
        vm.whatIDo = vm.shuffle(vm.whatIDo)
      }, 2000)
    }
  }
</script>
