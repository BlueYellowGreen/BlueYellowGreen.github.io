import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main.vue'

const routes = [
  // Main
  { path: '/', name: 'Main', component: Main },
  
  // Main/CS
  { path: '/cs', name: 'CS', component: () => import('../views/CS/CS.vue') },
  // Main/CS/Algo
  { path: '/cs/algo', name: 'Algo', component: () => import('../views/CS/Algo/Algo.vue') },
  { path: '/cs/algo/dfs', name: 'DFS', component: () => import('../views/CS/Algo/Algorithm/DFS.vue') },
  { path: '/cs/algo/bfs', name: 'BFS', component: () => import('../views/CS/Algo/Algorithm/BFS.vue') },


  // Main/AI
  { path: '/ai', name: 'AI', component: () => import('../views/AI/AI.vue') },
  // Main/AI/Common
  { path: '/ai/common', name: 'Common', component: () => import('../views/AI/Comm/Common.vue') },

  // Main/BlockChain
  { path: '/blockchain', name: 'BlockChain', component: () => import('../views/BlockChain/BlockChain.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
