import { createRouter, createWebHistory } from 'vue-router'
import Page from '@/pages/Page.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
    },
  ],
})

export default router