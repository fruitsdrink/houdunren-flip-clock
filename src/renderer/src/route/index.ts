import { createRouter, createWebHistory } from 'vue-router'
import Clock from '@renderer/views/clock.vue'

const routes = [
  {
    name: 'clock',
    path: '/',
    component: Clock
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
