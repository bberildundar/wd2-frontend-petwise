<template>
    <section>
        <div class="container">
            <router-link to="/userList">
                <button type="button" class="btn btn-primary m-2">
                    Back
                </button>
            </router-link>
            <h2>Update a user</h2>
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
                    <label for="userEmail">User Email</label>
                    <input type="text" class="my-2 form-control" v-model="user.email" id="userEmail" aria-describedby="userEmail"
                        placeholder="email@email.com" required>
                </div>
                <div class="m-2 form-group">
                    <label for="password">Password</label>
                    <input type="password" class="my-2 form-control" v-model="password" id="password" aria-describedby="password"
                        placeholder="************" required>
                </div>
                <div class="m-2 form-group">
                    <p>Selected Role: {{ selectedRole }}</p>
                    <select v-model="user.role">
                        <option value="1">Admin</option>
                        <option value="0">User</option>
                    </select>

                </div>
            </form>
            <div class="input-group mt-4">
                <button type="button" class="btn btn-primary" @click="updateUser">Update User</button>
            </div>
        </div>
    </section>
</template>
    
<script>
import axios from '../../axios-auth';
export default {
    name: "UpdateUser",
    props: {
        id: Number,
    },
    data() {
        return {
            user: {
                id: "",
                email: '',
                password: '',
                role: ''
            },
            showAlert: false,
            errorText: '',
            showSuccess: false,
            successText: ''
        };
    },
    methods: {
        updateUser() {
            axios
                .put("users/" + this.user.id, {
                    email: this.email,
                    password: this.password,
                    role: this.role
                })
                .then((res) => {
                    console.log(res.data);
                    this.successText = "The user has been updated successfully. ";
                    this.showSuccess = true;
                    this.errorText = '';
                    this.showAlert = false;
                })
                .catch((error) => {
                    console.log(error);
                    this.errorText = "There was a problem while updating the user. " + error;
                    this.showAlert = true;
                    this.showSuccess = false;
                    this.successText = '';
                });
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios
            .get("users/" + this.id, {
               
            })
            .then((result) => {
                console.log(result);
                this.user = result.data;
                this.role = result.data.role;
                this.email = result.data.email;
            })
            .catch((error) => console.log(error));
    },
};
</script>
    
<style></style>