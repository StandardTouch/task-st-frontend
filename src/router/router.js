import { createWebHistory, createRouter } from 'vue-router'

import Login from '../features/Auth/login/login.vue'
import LandingPage from '../features/landing page/components/landingPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for browser environments
  routes,
})

export default router
