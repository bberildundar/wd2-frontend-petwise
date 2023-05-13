<template>
    <section>
      <div class="container">
        <router-link to="/vetList">
  <button type="button" class="btn btn-primary m-2">
    Back
  </button>
</router-link>
        <h2>Add a vet</h2>  
        <form>
        <div class="m-2 form-group">
            <label for="veterinarianNameTextBox">Veterinarian Name</label>
            <input type="text" class="my-2 form-control" id="veterinarianNameTextBox" aria-describedby="veterinarianNameTextBox" placeholder="Name" required>
        </div>
        <div class="m-2 form-group">
            <label for="specializationTextBox">Specialization</label>
            <input type="text" class="my-2 form-control" id="registerFirstNameTextBox" aria-describedby="registerFirstNameTextBox" placeholder="Specialization" required>
        </div>
        <div class="mb-3">
        <label for="vetImageInput" class="form-label">Veterinarian Image*</label>
        <input type="file" class="form-control" id="vetImageInput" name="vetImageInput"
            accept="image/png, image/jpg" required>
    </div>
    </form>  
        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="addVet">Add Vet</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CreateVet",
    methods: {
        addVet() {
            // navigate to products here
  
        }
    }
  };
  </script>
  
  <style>
  </style>