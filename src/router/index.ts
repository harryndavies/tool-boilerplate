import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

enum RouteName {
  tool = 'tool-view',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.tool,
      component: IndexView,
    },
  ],
})

export default router
