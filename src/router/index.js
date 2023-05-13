import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Homepage from '../components/Homepage.vue';
import UserList from '../components/admin/UserList.vue'
import VetList from '../components/admin/VetList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Homepage },
    { path: '/userList', component: UserList },
    { path: '/vetList', component: VetList }
  ]
})
export default router