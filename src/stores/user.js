import { defineStore } from 'pinia';
import { createPinia } from 'pinia';
import axios from '../axios-auth';
import router from '../router/index.js'
export const userStore = defineStore('userStore', {
    state: () => ({
        token: '',
        email: '',
        role: false
    }),
    getters: {
        isAuthenticated: (state) => state.token != '',
        getToken: (state) => state.token,
        getRole: (state) => state.role
    },
    actions: {
        autologin() {
            if (localStorage["token"]) {
                this.token = localStorage["token"];
                this.role = localStorage["role"];
            }
        },
        login(email, password) {
            return new Promise((resolve, reject) => {
                axios.post("http://localhost/users/login", {
                    email: email,
                    password: password
                }).then(response => {
                    this.token = response.data.token;
                    this.email = email;
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                    localStorage.setItem('token', this.token); // Store the token in local storage
                    localStorage.setItem('email', this.email); // Store the email in local storage
                    resolve()
                })
                .catch((error) => reject(error));
            })
        },
        logout() {
            this.token = '';
            this.email = '';
            this.role = false;
            localStorage.removeItem('role');
            localStorage.removeItem('email');
            localStorage.removeItem('token');
        }
    }
});