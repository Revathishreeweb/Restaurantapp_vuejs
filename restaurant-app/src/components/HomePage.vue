<template>
  <header>
    <div class="header_part_2 text-center">
      <h1 class="text-white">Healthy Food</h1>
      <h1 class="text-white">Restaurant</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style>
header{
    background-color: #7187ad;
    height: 95vh;
    padding-top: 30px;
    background: #6788b1;
    position: relative;
}
</style>
