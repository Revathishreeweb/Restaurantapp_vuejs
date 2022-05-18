<template>
  <div>
    <img class="logo" src="../assets/food-logo.webp" />
    <h1>Signup</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Your Name" />
      <input type="text" v-model="email" placeholder="Enter Your Email" />
      <input type="password" v-model="password" placeholder="Enter Your Password" />
      <button v-on:click="signUp">SignUp</button>
      <p>
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    async signUp() {
      // console.log('signup', this.name,this.email,this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password
      });

      console.log(result);
      if(result.status == 201) {
        //alert("Successfully sign up");
        localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({name:'LoginPage'})
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info')
      if(user) {
        this.$router.push({name:'HomePage'})
      }
    }
  }
};
</script>
