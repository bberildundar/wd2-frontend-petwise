<template>
    <section>
        <div class="container">
            <router-link to="/">
                <button type="button" class="btn btn-outline-primary my-4">
                    Back
                </button>
            </router-link>
            <h2>Update a vet</h2>
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
                    <label for="veterinarianFirstNameTextBox">Veterinarian First Name</label>
                    <input type="text" class="my-2 form-control" v-model="vet.firstName" id="veterinarianFirstNameTextBox"
                        aria-describedby="veterinarianFirstNameTextBox" placeholder="First name" required>
                </div>
                <div class="m-2 form-group">
                    <label for="veterinarianLastNameTextBox">Veterinarian Last Name</label>
                    <input type="text" class="my-2 form-control" v-model="vet.lastName" id="veterinarianLastNameTextBox"
                        aria-describedby="veterinarianLastNameTextBox" placeholder="Last name" required>
                </div>
                <div class="m-2 form-group">
                    <label for="specializationTextBox">Specialization</label>
                    <input type="text" class="my-2 form-control" v-model="vet.specialization" id="specializationTextBox"
                        aria-describedby="specializationTextBox" placeholder="Specialization" required>
                </div>
                <div class="mb-3">
                    <label for="vetImageURL" class="form-label">Veterinarian Image Path</label>
                    <input type="text" class="my-2 form-control" v-model="vet.imageURL" id="vetImageURL"
                        aria-describedby="vetImageURL" placeholder="Image Path" required>

                </div>
            </form>
            <div class="input-group mt-4">
                <button type="button" class="btn btn-success" @click="updateVet">Update Vet</button>
            </div>
        </div>
    </section>
</template>
    
<script>
import axios from '../../axios-auth';
export default {
    name: "UpdateVet",
    props: {
        id: Number,
    },
    data() {
        return {
            vet: {
                id: "",
                firstName: '',
                lastName: '',
                specialization: '',
                imageURL: '',
            },
            showAlert: false,
            errorText: '',
            showSuccess: false,
            successText: ''
        };
    },
    methods: {
        updateVet() {
            const token = localStorage.getItem('token');
            axios
                .put("vets/" + this.vet.id, {
                    firstName: this.vet.firstName,
                    lastName: this.vet.lastName,
                    specialization: this.vet.specialization,
                    imageURL: this.vet.imageURL,
                   
                })
                .then((res) => {
                    console.log(res.data);
                    this.successText = "The vet has been updated successfully. ";
                    this.showSuccess = true;
                    this.errorText = '';
                    this.showAlert = false;
                })
                .catch((error) => {
                    console.log(error);
                    this.errorText = "There was a problem while updating the vet. " + error;
                    this.showAlert = true;
                    this.showSuccess = false;
                    this.successText = '';
                });
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        axios
            .get("vets/" + this.id, {
                
            })
            .then((result) => {
                console.log(result);
                this.vet = result.data;
            })
            .catch((error) => console.log(error));
    },
};
</script>
    
<style></style>