<template>
  <div class="box is-fluid">
    <div class="panel element is-centered _absolute elevation _default">
      <form class="form text is-lighter">
        <div class="group" v-if="!showForm">
          <legend class="text is-big">Para comenzar, ¿cuál es tu nombre?</legend>
          <input type="text" name="" value="" v-model="sender" @input="checkHasSender" required>
          <ripple class="button is-primary" v-if="hasSender" @click.native="nextQ">OK</ripple>
        </div>
        <template v-else>
          <div class="group" >
            <legend class="text is-big">Hola, {{ sender }}</legend>
          </div>
          <div class="group">
            <label for="email">Por favor, ingresa tu email</label>
            <input type="email" name="" value="" required>
          </div>
          <div class="group">
            <label for="message">Ingresa tu mensaje</label>
            <textarea name="message" rows="8" cols="80" required v-model="message" @keydown.space="splitMessage" @keyup.space="splitArray"></textarea>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        sender: '',
        showForm: false,
        hasSender: false,
        message: '',
        array: [],
        writing: false
      }
    },
    metaInfo: {
      title: 'andrutap | contacto'
    },
    methods: {
      nextQ () {
        this.showForm = true
      },
      checkHasSender () {
        if (this.sender.length > 0) {
          this.hasSender = true
        } else {
          this.hasSender = false
        }
      },
      splitMessage () {
        this.writing = true
        this.array = this.message.unshift.split(' ')
      },
      splitArray () {
        this.writing = false
        this.array.splice(0, 1)
      }
    }
  }
</script>
