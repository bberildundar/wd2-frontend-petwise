<template>
    <footer class="py-3 my-4" style="background-color: #faf1d4;">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
  <router-link to="/" class="nav-link px-2 text-body-secondary">Homepage</router-link>
</li>
<li class="nav-item"><!-- i used <a> tag in here because these are only for scrolling. not for a new page. -->
  <a @click="scrollToVeterinarians" class="nav-link px-2 text-body-secondary" style="cursor: pointer;">Veterinarians</a>
</li>
        <li class="nav-item">
  <router-link to="/login" class="nav-link px-2 text-body-secondary">Log In</router-link>
</li>
<li class="nav-item">
  <router-link to="/register" class="nav-link px-2 text-body-secondary">Sign Up</router-link>
</li>

    </ul>
    <p class="text-center text-body-secondary">&copy; 2023 PetWise by Betul Beril Dundar</p>
</footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    methods: {
      scrollToVeterinarians() {
        document.querySelector('#home-veterinarians-header').scrollIntoView({
          behavior: 'smooth'
        });
      },
    }
  };
  </script>
  
  
  <style>
  </style>