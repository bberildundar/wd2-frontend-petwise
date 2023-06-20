import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Homepage from '../components/Homepage.vue';
import UserList from '../components/admin/UserList.vue'
import VetList from '../components/admin/VetList.vue'
import CreateUser from '../components/admin/CreateUser.vue'
import CreateVet from '../components/admin/CreateVet.vue'
import UpdateVet from '../components/admin/UpdateVet.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Homepage },
    { path: '/userList', component: UserList },
    { path: '/vetList', component: VetList },
    { path: '/createUser', component: CreateUser },
    { path: '/createVet', component: CreateVet },
    { path: '/updateVet/:id', component: UpdateVet, props: true}
  ]
})
export default router