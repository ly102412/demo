<template>
  <div class="toast">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    duration: {
      type: Number,
      default: 1000
    },
    msg: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.closeNotice()
  },
  methods: {
    closeNotice () {
      setTimeout(this.hide, this.duration)
    },
    hide () {
      this.remove()
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  min-width: 3.6rem;
  min-height: 0.8rem;
  font-size: 0.3rem;
  padding: 0 0.45rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0, 0, 0, .75);
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 1000;
}
</style>
