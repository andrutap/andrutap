<template>
  <span @click="createRipple" class="ripple">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    methods: {
      createRipple (event) {
        var holder = event.target
        var ripple = document.createElement('span')
        var d
        var rect = holder.getBoundingClientRect()
        if (holder.querySelectorAll('.rippling').length === 0) {
          holder.appendChild(ripple).classList.add('rippling')
        }
        var rp = holder.querySelector('.rippling')
        rp.classList.remove('animate')

        if (!rp.getBoundingClientRect().height && !rp.getBoundingClientRect().width) {
          d = Math.max(rect.width, rect.height)
          rp.style.width = d + 'px'
          rp.style.height = d + 'px'
        }
        var x = event.clientX - rect.left - (parseInt(rp.style.width) / 2)
        var y = event.clientY - rect.top - (parseInt(rp.style.height) / 2)

        rp.style.left = x + 'px'
        rp.style.top = y + 'px'
        rp.classList.add('animate')
      }
    }
  }
</script>
