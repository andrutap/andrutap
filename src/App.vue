<template>
  <main id="app">
    <navbar v-if="!matched"></navbar>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </main>
</template>

<script>
  export default {
    name: 'app',
    metaInfo: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
    computed: {
      matched () {
        return this.$route.path.indexOf('/home') === 0
      }
    }
  }

</script>

<style src="./css/andrutap.css"></style>
