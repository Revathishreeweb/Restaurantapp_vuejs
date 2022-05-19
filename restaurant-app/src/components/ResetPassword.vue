<template>
  <form @submit.prevent="handleSubmit">
    <h2>Forget Password</h2>
    <div class="login">
      <input type="text" v-model="new_password" placeholder="New Password" />
      <input
        type="password"
        v-model="confirm_password"
        placeholder="Confirm Password"
      />
      <button>Submit</button>
    </div>
  </form>
</template>


<script>
import axios from "axios";
export default {
  name: "ResetPassword",
  data() {
    return {
      new_password: "",
      confirm_password: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log(this.new_password, this.confirm_password);
      let result = await axios.post("http://localhost:3000/users", {
          new_password: this.new_password,
          confirm_password: this.confirm_password,
      });
      if(result.status==200){
        this.$router.push({ name: "LoginPage" });
      }
      //console.log(result)
      
    },
    mounted() {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.$router.push({ name: "ResetPassword" });
      }
    },
  },
};
</script>