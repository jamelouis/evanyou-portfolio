import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import ChatView from './components/ChatView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/chat', component: ChatView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router