<template>
  <header-app></header-app>
  <h1>Hello {{ name }}, wellcome on home page</h1>

  <table border="1">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
    </tr>

    <tr v-for="res in restaurants" :key="res.id">
      <td>{{ res.id }}</td>
      <td>{{ res.name }}</td>
      <td>{{ res.contact }}</td>
      <td>{{ res.address }}</td>
    </tr>
  </table>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    HeaderApp,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  methods: {},
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    let result = await axios.get("http://localhost:3000/restaurants");
    this.restaurants = result.data;

    // console.log(this.restaurants);
  },
};
</script>

<style scoped>
td {
  width: 160px;
  height: 50px;
}
</style>
