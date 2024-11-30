import { createWebHistory, createRouter } from "vue-router";

import Login from "../features/Auth/login.vue";
import LandingPage from "../features/landing_page/components/landingPage.vue";
import ForgotPassword from "@/features/Auth/ForgotPassword.vue";
import Signup from "@/features/Auth/signup.vue";
import UpdateProfile from "@/features/Auth/UpdateProfile.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/login", component: Login },
  { path: "/forgotPass", component: ForgotPassword },
  { path: "/signup", component: Signup },
  { path: "/profile", component: UpdateProfile },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for browser environments
  routes,
});

export default router;
