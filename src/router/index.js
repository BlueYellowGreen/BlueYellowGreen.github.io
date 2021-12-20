import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/cs',
    name: 'CS',
    component: () => import('../views/CS/CS.vue')
  },
  {
    path: '/cs/algo',
    name: 'Algo',
    component: () => import('../views/CS/Algo/Algo.vue')
  },
  {
    path: '/ai',
    name: 'AI',
    component: () => import('../views/AI/AI.vue')
  },
  {
    path: '/ai/common',
    name: 'Common',
    component: () => import('../views/AI/Comm/Common.vue')
  },
  {
    path: '/blockchain',
    name: 'BlockChain',
    component: () => import('../views/BlockChain/BlockChain.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
