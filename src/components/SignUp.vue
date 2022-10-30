<template>
  <img class="logo" src="@/assets/resto-logo.svg" alt="" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name" v-model.trim="name" />
    <input type="email" placeholder="Email" v-model.trim="email" />
    <input type="password" placeholder="Password" v-model.trim="password" />
    <button @click="signUp">Sign Up</button>
  </div>
  <p>Do you have an account? <router-link to="/login">Login</router-link></p>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
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
