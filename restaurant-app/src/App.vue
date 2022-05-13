<template>
 <div>
  <router-view />
 </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.logo {
  width: 180px;
}

.register input, .login input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto; 
  border: 1px solid skyblue;
}

.register input:focus, .login input:focus {
  border: none;
  outline: 1px solid grey;
}

.register button, .login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}

.register button:active, .login button:active {
  border: 1px solid #222;
}
</style>
