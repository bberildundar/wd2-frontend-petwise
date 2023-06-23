<template>
  <nav class="navbar p-3 px-5 navbar-expand-lg sticky-top" style="background-color: #faf1d4;">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand fw-bold" style="font-size: 30px;">PetWise</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              style="font-size: 20px;">Homepage</router-link>
          </li>

          <li class="nav-item"> <!-- i used <a> tag in here because these are only for scrolling. not for a new page. -->
            <a @click="scrollToVeterinarians" class="nav-link active" aria-current="page"
              style="font-size: 20px; cursor: pointer;">Veterinarians</a>
          </li>

          <li class="nav-item" v-if="this.store.getRole == '1'"> <!-- only admins should see this nav item-->
            <router-link to="/userList" class="nav-link active" aria-current="page"
              style="font-size: 20px;">Users</router-link>
          </li>

        </ul>
        <button v-if="isLoggedIn" type="button" @click="logout"
          class="btn btn-outline-danger rounded-pill me-2">Logout
        </button>
        <router-link v-else to="/login" class="btn btn-outline-success rounded-pill me-2">Log In</router-link>
        <router-link v-if="!isLoggedIn" to="/register" class="btn btn-outline-dark rounded-pill">
      Sign Up
    </router-link>
      </div>
    </div>
  </nav>
</template>
  
<script>
import { userStore } from '../stores/user.js';
export default {
  name: "Nav",
  data() {
    return {
      store: userStore()
    };
  },
  computed: {
    isLoggedIn() {
      return this.store.getToken != '';
    }
  },
  methods: {
    scrollToVeterinarians() {
      document.querySelector('#home-veterinarians-header').scrollIntoView({
        behavior: 'smooth'
      });
    },
    logout() {
      this.store.logout();
      this.$router.push('/');
    }
  }
};
</script>
  
<style></style>