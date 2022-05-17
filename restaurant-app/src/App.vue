<template>
  <div>
    <!-- <HeaderPage /> -->
    <router-view />
  </div>
</template>

<script>
//import HeaderPage from './components/HeaderPage.vue';
export default {
  name: "App",
  // components: {
  //   HeaderPage
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.logo {
  width: 180px;
  margin-top: 20px;
}

.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.register input:focus,
.login input:focus,
.add input:focus {
  border: none;
  outline: 1px solid grey;
}

.register button,
.login button,
.add button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}

.register button:active,
.login button:active,
.add button:active {
  border: 1px solid #222;
}
</style>
