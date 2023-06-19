<template>
  <header>
    <div>
      <NavigationBar></NavigationBar>
    </div>
  </header>
  <RouterView />
  <FooterBar></FooterBar>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/Nav.vue'
import FooterBar from './components/Footer.vue'


export default {
  name: "App",
  components: {
    NavigationBar,
    FooterBar
  }, data() {
    return {
      //store: userStore()
    };
  }, mounted() {
    
  },
  methods: {
    
  }
}
  ;
</script>

<style scoped>
</style>
