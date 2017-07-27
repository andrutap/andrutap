<template>
  <div class="box is-fluid">
    <div class="panel element is-centered _absolute elevation _default">
      <form class="form">
        <legend>Hola, {{ sender }}</legend>
        <input type="text" name="" value="" v-model="sender">
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sender: ''
      }
    }
  }
</script>
