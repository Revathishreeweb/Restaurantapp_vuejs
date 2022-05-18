<template>
  <div>
    <HeaderPage />
    <h2 class="msg">Welcome to Add Restaurant Page</h2>
    <form autoComplete="off" class="add">
      <input type="text" name="name" placeholder="Enter the Name" v-model="restaurant.name" />
      <input type="text" name="address" placeholder="Enter the Address" v-model="restaurant.address" />
      <input type="text" name="contact" placeholder="Enter the Contact" v-model="restaurant.contact" />
      <button type="button" @click="addRestaurant">Add new Restaurant</button>
    </form>
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import axios from 'axios';
export default {
  name: "AddPage",
  components: {
    HeaderPage,
  },
  data() {
    return {
      restaurant :{
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurant)
      const result = await axios.post(" http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if(result.status == 201)
      {
        this.$router.push({name:'HomePage'})
      }
      console.log("result", result)
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user) {
      this.$router.push({name: 'SignUp'})
    }
  }
};
</script>

<style>
.msg {
  margin-top: 3rem;
}
</style>
