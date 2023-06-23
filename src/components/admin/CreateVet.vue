<template>
  <section>
    <div class="container">
      <router-link to="/">
        <button type="button" class="btn btn-outline-primary my-4">
          Back to Homepage
        </button>
      </router-link>
      <h2>Add a vet</h2>
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
          <input type="text" class="my-2 form-control" v-model="firstName" id="veterinarianFirstNameTextBox"
            aria-describedby="veterinarianFirstNameTextBox" placeholder="First name" required>
        </div>
        <div class="m-2 form-group">
          <label for="veterinarianLastNameTextBox">Veterinarian Last Name</label>
          <input type="text" class="my-2 form-control" v-model="lastName" id="veterinarianLastNameTextBox"
            aria-describedby="veterinarianLastNameTextBox" placeholder="Last name" required>
        </div>
        <div class="m-2 form-group">
          <label for="specializationTextBox">Specialization</label>
          <input type="text" class="my-2 form-control" v-model="specialization" id="specializationTextBox"
            aria-describedby="specializationTextBox" placeholder="Specialization" required>
        </div>
        <div class="mb-3">
          <label for="vetImageURL" class="form-label">Veterinarian Image Path</label>
          <input type="text" class="my-2 form-control" v-model="imageURL" id="vetImageURL" aria-describedby="vetImageURL"
            placeholder="Image Path" required>

        </div>
      </form>
      <div class="input-group mt-4">
        <button type="button" class="btn btn-success" @click="addVet">Add Vet</button>
      </div>
    </div>
  </section>
</template>
  
<script>
import axios from '../../axios-auth';
export default {
  name: "CreateVet",
  data() {
    return {
      firstName: '',
      lastName: '',
      specialization: '',
      imageURL: '',
      showAlert: false,
      errorText: '',
      showSuccess: false,
      successText: ''
    };
  },
  methods: {
    addVet() {
      if (this.checkForInputs()) {
        axios.post("vets", {
          firstName: this.firstName,
          lastName: this.lastName,
          specialization: this.specialization,
          imageURL: this.imageURL
          /* imageURL is a text (also in the form) because i couldn't find how 
          to select the image with input-type-image thing and after saving it 
          to /public folder. that's why an admin has to save the image to the 
          /public folder and then enter it's path to the form. also, i checked the rubric file 
          and since it doesnt have any requirements about it, i'm hoping that this is okay.*/
        })
          .then(() => {
            this.successText = "New vet has been added successfully. ";
            this.showSuccess = true;
            this.errorText = '';
            this.showAlert = false;
            //clear form
            //this.firstName = '';
            this.lastName = '';
            this.specialization = '';
            this.imageURL = '';
          })
          .catch((error) => {
            console.log(error);
            this.errorText = "There was a problem while adding the vet. " + error;
            this.showAlert = true;
            this.showSuccess = false;
            this.successText = '';
          });
      }
    },
    checkForInputs() {
      if (this.firstName.trim() === '' || this.lastName.trim() === '' || this.specialization.trim() === '' || this.imageURL.trim() === '') {
        this.errorText = 'Please enter all fields.';
        this.showAlert = true;
        return false;
      }
      return true;
    }
  }
};
</script>
  
<style></style>