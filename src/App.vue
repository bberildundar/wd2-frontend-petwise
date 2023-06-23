<template>
  <header>
      <NavigationBar />
  </header>
  <RouterView />
  <FooterBar />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/Nav.vue'
import FooterBar from './components/Footer.vue'
import {userStore} from './stores/user'

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterBar
  }, data() {
    return {
      store: userStore()
    };
  }, 
  created(){
    this.store.autoLogin();
  },
}
  ;
</script>

<style scoped>
</style>
