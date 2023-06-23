<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Website Users</h2>
      <div v-if="showAlert" class="my-3 alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error: </strong> {{ errorText }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
          @click="showAlert = false"></button>
      </div>
      <div v-if="showSuccess" class="my-3 alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success: </strong> {{ successText }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
          @click="showSuccess = false"></button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">E-mail</th>
            <th scope="col">Role</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <user-item :user="user" @update="update" @popUpSuccessText="popUpSuccessText"
              @popUpErrorText="popUpErrorText" />
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

  
<script>
import axios from '../../axios-auth';
import UserItem from '../users/userItem.vue';

export default {
  name: "UserList",
  components: {
    UserItem,
  },
  data() {
    return {
      users: [],
      showAlert: false,
      errorText: '',
      showSuccess: false,
      successText: ''
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("users")
        .then((result) => {
          console.log(result);
          this.users = result.data;
        })
        .catch((error) => console.log(error));
    },
    popUpSuccessText(text) {
      this.successText = text;
      this.showSuccess = true;
      this.errorText = '';
      this.showAlert = false;
    },
    popUpErrorText(text) {
      this.errorText = text;
      this.showAlert = true;
      this.successText = '';
      this.showSuccess = false;
    }

  },
};
</script>
  
<style></style>