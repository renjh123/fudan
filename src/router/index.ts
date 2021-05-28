import { createRouter, createWebHistory } from 'vue-router'

import constantRouter from './constantRouter'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouter
})

export default router
