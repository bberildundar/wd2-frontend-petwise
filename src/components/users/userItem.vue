<template>
    <td>{{ user.id }}</td>
    <td>{{ user.email }}</td>
    <td>{{ assignRole(user.role) }}</td>
    <td> <button class="btn btn-outline-primary" @click="editUser(user.id)">Edit</button>
    </td>
    <td>
        <button class="btn btn-outline-danger" @click="deleteUser(user.id)">Delete</button>
    </td>
</template>
  
<script>
import axios from '../../axios-auth';
export default {
    name: "UserItem",
    props: {
        user: Object,
    },
    methods: {
        deleteUser(id) {
            axios
                .delete("users/" + id, {
                })
                .then((result) => {
                    console.log(result);
                    this.$emit('update');
                    this.$emit('popUpSuccessText', "User has been deleted successfully. ")
                })
                .catch((error) => {
                    console.log(error);
                    this.$emit('popUpErrorText', "There was a problem while deleting the user. Please try again. " + error)
                });
        },
        editUser(id) {
            this.$router.push('/updateUser/' + id);
        },
        assignRole(role) {
            return role ? "Admin" : "User"; //used conditional ternary operator. source: https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
        }

    }
};
</script>
  
<style></style>