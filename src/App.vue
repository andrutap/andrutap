<template>
  <main id="app">
    <navbar></navbar>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

  </main>
</template>

<script>
  import navbar from '@/components/navbar'
  export default {
    components: {
      navbar
    },
    name: 'app',
    metaInfo: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }

</script>

<style src="./css/andrutap.css"></style>
