<template>
  <div>
    <HeaderPage />
    <h2 class="msg">Hello {{ name }}, Welcome to Home page</h2>
    <!-- <header>
      <div class="header-content">
        <h1 class="text">Healthy Food Restaurant</h1>
        <h1 class="text">Restaurant</h1> 
        <p class="content">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum <br />
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum<br />
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      </div>
      <div class="img">
      <img class="foody" src="../assets/foody.jpg" />
      </div>
    </header> -->
    <table border="1">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="'/update/' + item.id">Update</router-link>
          <button @click="deleteRestaurant(item.id)" class="del-btn">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    HeaderPage,
  },

  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        " http://localhost:3000/restaurant/" + id
      );
      //console.log(id)
      console.log(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }

      let result = await axios.get(" http://localhost:3000/restaurant");
      console.log(result);
      this.restaurant = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

/* header {
  display: flex;
  justify-content: center; 
}

.header-content {
  margin-top: 15rem;
}

.text {
  font-size: 3rem;
}

.img {
  margin-top: 10rem;
}

.foody {
  margin-left: 15rem;
  border-radius: 10px;
}

.content {
  font-size: 22px;
  margin-top: 30px;
  line-height: 30px;
} */

table {
  width: 100%;
}
table td {
  height: 30px;
}
.del-btn {
  margin-left: 10px;
}
</style>
