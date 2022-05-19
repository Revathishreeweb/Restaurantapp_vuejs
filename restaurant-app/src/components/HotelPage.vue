<template>
  <div>
    <HeaderPage />
    <button class="add-btn" @click="redirectAdd">Add Restaurant</button>
    <!-- <h2 class="msg">Hello {{ name }}, Welcome to Hotels page</h2> -->
    <table border="1" class="table-content">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions</th>
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
    redirectAdd() {
        this.$router.push({ name: "AddPage" });
    }
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
table {
  width: 100%;
}
table th,td {
  height: 30px;
}
.del-btn {
  margin-left: 10px;
}
.table-content {
    margin-top: 5rem;
}
.add-btn {
    float: right;
    margin: 20px;
    padding: 10px;
}
</style>
