import { defineStore } from 'pinia';
import axios from '../axios-auth';

export const userStore = defineStore('userStore', {
    state: () => ({
        token: '',
        email: '',
        role: ''
    }),
    getters: {
        isLoggedIn: (state) => state.token != '',
        getEmail: (state) => state.email,
        getToken: (state) => state.token,
        getRole: (state) => state.role
    },
    actions: {
        autoLogin() {
            const token  = localStorage.getItem('token');
            const email = localStorage.getItem('email');
            const role = localStorage.getItem('role');

            if ( email && token && role ){
                axios.defaults.headers.common['Authorization'] = "Bearer " + token;
                
                this.token = token;
                this.email = email;
                this.role = role;           
            }            
        },
        login(email, password) {
            return new Promise((resolve, reject) => {
                axios.post("users/login", {
                    email: email,
                    password: password
                }).then(response => {
                    console.log(response.data);
                    this.token = response.data.jwt;
                    this.email = response.data.email;
                    this.role = response.data.role;
                    localStorage.setItem('token', this.token); // Store the token in local storage
                    localStorage.setItem('email', this.email); // Store the email in local storage
                    localStorage.setItem('role', this.role); // Store the email in local storage

                    axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.jwt;

                    resolve()
                })
                .catch((error) => reject(error));
            })
        },
        logout() {
            this.token = '';
            this.email = '';
            this.role = '';
            localStorage.removeItem('role');
            localStorage.removeItem('email');
            localStorage.removeItem('token');
        }
    }
});