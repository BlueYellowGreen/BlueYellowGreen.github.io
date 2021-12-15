import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/algo',
    name: 'Algo',
    component: () => import('../views/CS/Algo/Algo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
