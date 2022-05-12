<template>
  <div>
    <img class="logo" src="../assets/food-logo.webp" />
    <h1>Signup Form</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Your Name" />
      <input type="text" v-model="email" placeholder="Enter Your Email" />
      <input type="password" v-model="password" placeholder="Enter Your Password" />
      <button v-on:click="signUp">SignUp</button>
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
        this.$router.push({name:'HomePage'})
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info')
      if(user) {
        this.$router.push({name: 'HomePage'})
      }
    }
  }
};
</script>

<style>
.logo {
  width: 180px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto; 
  border: 1px solid skyblue;
}

.register input:focus {
  border: none;
  outline: 1px solid grey;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}

.register button:active {
  border: 1px solid #222;
}
</style>
