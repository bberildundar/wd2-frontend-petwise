<template>
<nav class="navbar p-3 px-5 navbar-expand-lg sticky-top" style="background-color: #faf1d4;">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand fw-bold" style="font-size: 30px;">PetWise</router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/" style="font-size: 20px;">Homepage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onclick="scrollToVeterinarians()" style="font-size: 20px; cursor: pointer;">Veterinarians</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onclick="scrollToAddressAndContact()" style="font-size: 20px; cursor: pointer;">Address & Contact</a>
                </li>
            </ul>
            <router-link to="/login" class="btn btn-outline-success rounded-pill me-2">Log In</router-link>
            <router-link to="/register" class="btn btn-outline-dark rounded-pill">Sign Up</router-link>
        </div>
    </div>
</nav>
  </template>
  
  <script>
  export default {
    name: "Nav",
  };
  </script>
  
  <style>
  </style>