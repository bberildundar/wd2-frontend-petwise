<template>
    <section>
        <div class="jumbotron jumbotron-fluid"
            style="background-image: url('/images/homepage-banner.jpg'), url('https://picsum.photos/800/600'); padding-top: 300px; padding-bottom: 100px;">
            <div class="container">
                <h1 class="display-4 fw-semibold">Welcome to PetWise!</h1>
                <p class="lead fw-semibold">Where Your Pet's Health Is Our Top Priority</p>
            </div>
        </div>

        <div class="container">
            <h2 class="mt-4" id="home-veterinarians-header">Veterinarians</h2>
            <p>At PetWise, we have a team of highly skilled veterinarians who are passionate about providing exceptional
                care
                for your beloved pets.
                Our veterinarians are dedicated to ensuring the health and well-being of your furry friends.</p>

                <div class="row">
      <vet-item v-for="vet in vets" :key="vet.id" :vet="vet" />
    </div>

            <div class="row mt-5">
                <div class=" col">
                    <h2 class="mt-4" id="home-address-and-contact-header">Address</h2>
                    <p>PetWise Veterinary Clinic <br>
                        Koningstraat 10 <br>
                        1234 AB Amsterdam</p>
                    <h2 class="mt-4">Contact Us</h2>
                    <p>Phone: (123) 456-7890 <br>
                        Email: info@petwisevetclinic.nl</p>
                </div>
                <div class=" col">
                    <img src="/images/address-image.jpg" class="img-fluid" alt="cat-image">
                </div>
            </div>

        </div>
    </section>
</template>
  
<script>
import axios from '../axios-auth';
import VetItem from './vets/vetItem.vue';

export default {
  name: 'HomePage',
  components: {
    VetItem,
  },
  data() {
    return {
      vets: [],
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("http://localhost/vets")
        .then((result) => {
          console.log(result);
          this.vets = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
  
<style>
.h2 {
    font-size: 99;
}
</style>