<template>
  <header-app></header-app>
  <h1>Hello user, wellcome Update Resto</h1>
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
    <button type="button" @click="editResto">Update restaurant</button>
  </form>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import axios from "axios";
export default {
  name: "RestoUpdate",
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
    async editResto() {
      // console.log(this.restaurant);
      // console.log(this.restaurant);
      const result = await axios.put(
        "http://localhost:3000/restaurants" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
      // console.log(result);
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    // console.log(this.$route.params.id);
    // console.log(result.data);
    this.restaurant = result.data;
  },
};
</script>

<style scoped></style>
