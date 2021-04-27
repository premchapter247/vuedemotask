import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue";
import ForgotPassword from "../components/ForgotPassword.vue";

const routes = [
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;