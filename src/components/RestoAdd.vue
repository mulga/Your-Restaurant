<template>
  <header-app></header-app>
  <h1>Hello user, wellcome Add Resto</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Enter name "
      v-model.trim="restaurant.name"
    />
    <input
      type="text"
      name="address"
      id="address"
      placeholder="Enter address "
      v-model.trim="restaurant.address"
    />
    <input
      type="text"
      name="contact"
      id="contact"
      placeholder="Enter contact "
      v-model.trim="restaurant.contact"
    />
    <button type="button" @click="addResto">Add new restaurant</button>
  </form>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import axios from "axios";
export default {
  name: "RestoAdd",
  components: {
    HeaderApp,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },

  methods: {
    async addResto() {
      console.log(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
      console.log(result);
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped></style>
