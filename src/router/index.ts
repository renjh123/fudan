import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import asyncRouterMap from './asyncRouterMap'
import constantRouter from './constantRouter'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...constantRouter, ...asyncRouterMap]
})

export default router
