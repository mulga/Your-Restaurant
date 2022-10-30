<template>
  <img class="logo" src="@/assets/resto-logo.svg" alt="" />
  <h1>Login</h1>
  <div class="login">
    <input type="email" placeholder="Email" v-model.trim="email" />
    <input type="password" placeholder="Password" v-model.trim="password" />
    <button @click="login">Login</button>
  </div>
  <p>
    Don't you have an account? <router-link to="/sign-up">Register</router-link>
  </p>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }

      console.log(result);
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped></style>
