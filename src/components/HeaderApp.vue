<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/resto-add">Add Restaurant</router-link>

    <a @click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #ef4123;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.nav a:hover {
  background-color: #008444;
}
</style>
