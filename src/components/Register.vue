<template> 
    <section>
        <div class="container d-flex flex-column justify-content-center align-items-center form-container">
    <h1 class="m-5">Sign Up to PetWise</h1>
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
        <div class="m-4 text-center">
            <button type="submit" class="btn btn-primary rounded-pill">Sign Up</button>
        </div>
    </form>
    <p> Already a user? <a href="#">Log In</a> </p>
</div>
    </section>
    </template>


        <script>
        export default {
          name: "Register",
          methods: {
          }
        };
        </script>