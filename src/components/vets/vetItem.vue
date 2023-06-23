<template>
    <div class="col">
        <div class="card m-1">
            <img :src="vet.imageURL" class="card-img-top" alt="doctor-image">
            <div class="card-body">
                <h4>Dr. {{ vet.firstName }} {{ vet.lastName }}</h4>
                <p class="card-text">Specializes in {{ vet.specialization }}</p>
                <button v-if="this.store.getRole == '1'" type="button" class="btn btn-outline-primary"
                    @click="updateVet(vet.id)">Edit</button>
                <button v-if="this.store.getRole == '1'" type="button" class="m-2 btn btn-outline-danger"
                    @click="deleteVet(vet.id)">Delete</button>


            </div>
        </div>
    </div>
</template>
  
<script>
import axios from '../../axios-auth';
import { userStore } from '../../stores/user';
export default {
    name: "VetItem",
    data() {
        return {
            store: userStore()
        }
    },
    props: {
        vet: Object,
    },
    methods: {
        deleteVet(id) {
            const token = localStorage.getItem('token');
            axios
                .delete("vets/" + id, {
                })
                .then((result) => {
                    console.log(result);
                    this.$emit('update');
                    this.$emit('popUpSuccessText', "Vet has been deleted successfully. ")
                })
                .catch((error) => {
                    console.log(error);
                    this.$emit('popUpErrorText', "There was a problem while deleting the vet. Please try again. " + error)
                });
        },
        updateVet(id) {
            this.$router.push('/updateVet/' + id);
        }

    }
};
</script>
  
<style></style>