<template>
  <form @submit.prevent="handleSubmit">
    <h2>Forget Password!</h2>
    <p>Kindly enter your email id</p>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Your Email" />
      <button>Submit</button>
      <div class="back-login">
        <router-link to="/login" class="remove-link"
          ><span>&#8592;</span> Back to Login</router-link
        >
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "ForgetPassword",
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async handleSubmit() {
      //console.log(this.email)
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}`,
        {
          email: this.email,
        }
      );
      if (this.email) {
        this.$router.push({ name: "ResetPassword" });
      } 
      console.log(result);
    },
    // mounted() {
    //   let user = localStorage.getItem("user-info");
    //   if (user) {
    //     this.$router.push({ name: "ResetPassword" });
    //   }
    // },
  },
};
</script>

<style>
.back-login {
  margin-top: 20px;
}
</style>
