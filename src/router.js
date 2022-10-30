import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/LoginPage.vue";
import RestoUpdate from "./components/RestoUpdate.vue";
import RestoAdd from "./components/RestoAdd.vue";

const routes = [
  {
    name: "Home",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/login",
  },
  {
    name: "RestoUpdate",
    component: RestoUpdate,
    path: "/resto-update/:id",
  },
  {
    name: "RestoAdd",
    component: RestoAdd,
    path: "/resto-add",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
