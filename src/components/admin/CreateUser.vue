<template>
    <section>
      <div class="container">
        <router-link to="/userList">
  <button type="button" class="btn btn-primary mt-3">
    Back
  </button>
</router-link>
        <h2>Create a user</h2>  
        <form>
        <div class="m-2 form-group">
            <label for="registerEmailTextBox">Email address</label>
            <input type="email" class="my-2 form-control" id="registerEmailTextBox" aria-describedby="registerEmailTextBox" placeholder="Email" required>
        </div>
        <div class="m-2 form-group">
            <label for="registerFirstNameTextBox">First name</label>
            <input type="text" class="my-2 form-control" id="registerFirstNameTextBox" aria-describedby="registerFirstNameTextBox" placeholder="First name" required>
        </div>
        <div class="m-2 form-group">
            <label for="registerLastNameTextBox">Last name</label>
            <input type="text" class="my-2 form-control" id="registerLastNameTextBox" aria-describedby="registerLastNameTextBox" placeholder="Last name" required>
        </div>
        <div class="m-2 form-group">
            <label for="loginPasswordTextBox">Password</label>
            <input type="password" class="my-2 form-control" id="loginPasswordTextBox" placeholder="Password" required>
        </div>
        <div class="m-2 form-group">
            <label for="loginPasswordTextBox2">Password Again</label>
            <input type="password" class="my-2 form-control" id="loginPasswordTextBox2" placeholder="Password again" required>
        </div>
    </form>  
        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="addUser">Create User</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CreateUser",
    methods: {
        addUser() {
            // navigate to products here
  
        }
    }
  };
  </script>
  
  <style>
  </style>