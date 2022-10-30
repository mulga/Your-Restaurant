<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  max-width: 100px;
}
.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding: 0.2rem;
  padding-left: 20px;
  display: block;
  margin: 0px auto 30px auto;
  border: 1px solid #ccc;
}

.register button,
.login button,
.add button {
  width: 320px;
  height: 40px;
  border: none;
  background-color: #ef4123;
  color: #ffff;
  cursor: pointer;
}

.register button:hover,
.login button:hover,
.add button:hover {
  opacity: 0.9;
}
</style>
