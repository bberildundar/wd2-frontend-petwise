<template>
    <section>
        <div class="container d-flex flex-column justify-content-center align-items-center form-container" >
            <h1 class="m-5">Sign Up to PetWise</h1>
            <div v-if="showAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error: </strong> {{ errorText }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    @click="showAlert = false"></button>
            </div>
            <div v-if="showSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success: </strong> {{ successText }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    @click="showSuccess = false"></button>
            </div>
            <form>
                <div class="m-2 form-group">
                    <label for="registerEmailTextBox">Email address</label>
                    <input type="email" class="my-2 form-control" v-model="email" id="email"
                        aria-describedby="registerEmailTextBox" placeholder="Email" required>
                </div>
                <div class="m-2 form-group">
                    <label for="loginPasswordTextBox">Password</label>
                    <input type="password" class="my-2 form-control" v-model="password" id="loginPasswordTextBox"
                        placeholder="Password" required>
                </div>
                <div class="m-2 form-group">
                    <label for="loginPasswordTextBox2">Password Again</label>
                    <input type="password" class="my-2 form-control" v-model="password_again" id="loginPasswordTextBox2"
                        placeholder="Password again" required>
                </div>
                <div class="m-4 text-center">
                    <button @click="register" type="button" class="btn btn-primary rounded-pill">Sign Up</button>
                </div>
            </form>
            <p> Already a user? <router-link to="/login">Log In</router-link> </p>

        </div>
    </section>
</template>


<script>
import axios from '../../axios-auth';
export default {
    name: "RegisterView",
    data() {
        return {
            email: '',
            password: '',
            role: '',
            showAlert: false,
            errorText: '',
            showSuccess: false,
            successText: ''
        };
    },
    methods: {
        register() {
            if (this.checkForInputs()) {
                axios
                    .post("users", {
                        email: this.email,
                        password: this.password,
                        role: 0 // the registered new user will be a normal user (0) as default
                    })
                    .then(() => {
                        this.successText = "Your account has been created successfully. Now you can login.";
                        this.showSuccess = true;
                        this.errorText = "";
                        this.showAlert = false;
                        this.email = ""; // clearing email input
                        this.password = ""; // clear password input
                        this.password_again = "";
                    })
                    .catch((error) => {
                        console.log(error);
                        this.errorText = "There was a problem while creating your account. " + error.response.data.message;
                        this.showAlert = true;
                        this.showSuccess = false;
                        this.successText = "";
                    });
            }
        },
        checkForInputs() {
            const passwordInput = document.getElementById('loginPasswordTextBox');
            const confirmPasswordInput = document.getElementById('loginPasswordTextBox2');

            if (this.email.trim() === '' || this.password.trim() === '') {
                this.errorText = 'Please enter all fields.';
                this.showAlert = true;
                return false;
            }

            if (passwordInput.value !== confirmPasswordInput.value) {
                this.errorText = 'Please make sure your passwords match.';
                this.showAlert = true;
                return false;
            }

            return true;
        }

    }
};
</script>