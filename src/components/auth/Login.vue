<template>
    <section>
        <div class="container d-flex flex-column justify-content-center align-items-center form-container">
            <h1 class="m-5">Log In to PetWise</h1>
            <div v-if="showAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error: </strong> {{ errorText }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    @click="showAlert = false"></button>
            </div>
            <form>
                <div class="m-2 form-group">
                    <label for="loginEmailTextBox">Email address</label>
                    <input type="email" class="my-2 form-control" v-model="email" id="loginEmailTextBox"
                        aria-describedby="loginEmailTextBox" placeholder="Email" required>
                </div>
                <div class="m-2 form-group">
                    <label for="loginPasswordTextBox">Password</label>
                    <input type="password" class="my-2 form-control" v-model="password" id="loginPasswordTextBox"
                        placeholder="Password" required>
                </div>
                <div class="m-4 text-center">
                    <button type="button" @click="login" class="btn btn-primary rounded-pill">Log In</button>
                </div>
            </form>
            <p> Do not have an account yet? <router-link to="/register">Create one</router-link> </p>
        </div>
    </section>
</template>
    
<script>
import { userStore } from '../../stores/user.js';
import router from '../../router/index.js'
export default {
    name: "LoginView",
    data() {
        return {
            email: '',
            password: '',
            store: userStore(),
            showAlert: false,
            errorText: ''
        }
    },
    methods: {
        login() {
            this.store.login(this.email, this.password)
            .then(() => {
                this.$router.replace("/");
            })
                .catch((error) => {
                    console.log(error);
                    this.errorText = "There was a problem while logging in to your account. " + error;
                    this.showAlert = true;
                });
        },
    }

};
</script>