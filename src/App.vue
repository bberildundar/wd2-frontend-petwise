<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from './components/Nav.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'

export default {
  name: "App",
  components: {

    Nav,
    Login,
    Register,

  }
};
</script>

<style scoped>
</style>
