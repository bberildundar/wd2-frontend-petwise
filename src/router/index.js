import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Homepage from '../components/Homepage.vue';
import UserList from '../components/admin/UserList.vue'
import CreateVet from '../components/admin/CreateVet.vue'
import UpdateVet from '../components/admin/UpdateVet.vue'
import UpdateUser from '../components/admin/UpdateUser.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Homepage },
    { path: '/userList', component: UserList },
    { path: '/updateUser/:id', component: UpdateUser, props: true},
    { path: '/createVet', component: CreateVet },
    { path: '/updateVet/:id', component: UpdateVet, props: true}
  ]
})
export default router