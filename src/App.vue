<template>
  <div class="container">
    <div class="col-md-12">
      <img src="./assets/logo.png" alt="Vue logo">
    </div>
    <div class="col-md-6">
      <register />
    </div>

  </div>
</template>

<script>
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    Register
  }
}
</script>
