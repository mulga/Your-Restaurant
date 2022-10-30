<template>
  <header-app></header-app>
  <h1>Hello user, wellcome Update Resto</h1>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
export default {
  name: "RestoUpdate",
  components: {
    HeaderApp,
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
