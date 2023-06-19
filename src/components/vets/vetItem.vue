<template>
    <div class="col">
    <div class="card m-1">
        <img :src="vet.imageURL" class="card-img-top" alt="doctor-image">
        <div class="card-body">
            <h4>Dr. {{vet.firstName}} {{ vet.lastName }}</h4>
            <p class="card-text">Specializes in {{ vet.specialization }}</p>
        </div>
    </div></div>
</template>
  
<script>
export default {
    name: "VetItem",
    props: {
        vet: Object,
    },
    methods: {

    }
};
</script>
  
<style></style>