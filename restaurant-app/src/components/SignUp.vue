<template>
  <div>
    <img class="logo" src="../assets/food-logo.webp" />
    <h1>Signup Form</h1>
    <div class="register">
      <input type="text" placeholder="Enter Your Name" />
      <input type="text" placeholder="Enter Your Email" />
      <input type="password" placeholder="Enter Your Password" />
      <button>SignUp</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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
