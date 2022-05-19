<template>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/hotel">Hotels</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <!-- <router-link to="/update">Update Restaurant</router-link> -->
      <router-link @click="logout" to="/logout">Logout</router-link>
    </div>
</template>

<script>
export default {
  name: "HeaderPage",
  methods: {
    logout() {
      console.log("logout");
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
  height: 55px;
  display: flex;
  justify-content: flex-end;
}
.nav a {
  color: #fff;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  margin-right: 15px;
}

.nav a:hover {
  color: rgb(41, 101, 121);
}
</style>