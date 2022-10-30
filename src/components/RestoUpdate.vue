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
    <button type="button" @click="addResto">Update restaurant</button>
  </form>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
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
  methods: {},

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped></style>
