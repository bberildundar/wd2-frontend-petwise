import { createRouter, createWebHistory } from 'vue-router'

import Register from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

// import the missing components

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    { path: '/login', component: Login },
    { path: '/register', component: Register }

    // add the missing routes
  ]
})

export default router