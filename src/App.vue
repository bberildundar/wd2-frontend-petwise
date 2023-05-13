<template>
  <Nav />
  <router-view />
  <Footer/>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Homepage from './components/Homepage.vue'
import UserList from './components/admin/UserList.vue'
import VetList from './components/admin/VetList.vue' // maybe i dont have to add all these like that

export default {
  name: "App",
  components: {

    Nav,
    Login,
    Register,
    Homepage,
    Footer,
    UserList,
    VetList
  }
};
</script>

<style scoped>
</style>
