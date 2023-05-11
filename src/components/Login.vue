<template> 
    <section>
        <div class="container d-flex flex-column justify-content-center align-items-center form-container">
        <h1 class="m-5">Log In to PetWise</h1>
        <form>
            <div class="m-2 form-group">
                <label for="loginEmailTextBox">Email address</label>
                <input type="email" class="my-2 form-control" id="loginEmailTextBox" aria-describedby="loginEmailTextBox" placeholder="Email" required>
            </div>
            <div class="m-2 form-group">
                <label for="loginPasswordTextBox">Password</label>
                <input type="password" class="my-2 form-control" id="loginPasswordTextBox" placeholder="Password" required>
            </div>
            <div class="m-4 text-center">
                <button type="submit" class="btn btn-primary rounded-pill">Log In</button>
            </div>
        </form>
        <p> Do not have an account yet? <a href="#">Create one</a> </p>
    </div>
    </section>
    </template>
    
    <script>
    export default {
      name: "Login",
      methods: {
      }
    };
    </script>