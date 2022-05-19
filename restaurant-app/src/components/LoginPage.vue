<template>
  <div>
    <h1>Login</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Your Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Enter Your Password"
      />
      <p>
      <router-link to="/forgetpwd" class="forget-pwd">Forgot your password?</router-link>
      </p>
      <button v-on:click="login" class="signin-btn">Sign in to your account</button>
      <p>
        <span>Don't have an account? </span>
        <router-link to="/sign-up" class="remove-link">SignUp</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log(this.email, this.password);
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )

      if(result.status==200 && result.data.length>0)
      {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]))
        this.$router.push({name:'HomePage'})
      }
      console.log(result)
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if(user) {
        this.$router.push({name:'HomePage'})
      }
    },
  },
};
</script>

<style>
.forget-pwd {
  color: red;
  margin-right: 10.5rem;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
}
.signin-btn {
  margin-top: 10px;
}
</style>
