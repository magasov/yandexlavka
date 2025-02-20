import { createRouter, createWebHistory } from 'vue-router'
import Page from '@/pages/Page.vue'
import HomeView from '@/views/HomeView.vue'
import Login from '@/pages/Login.vue'

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
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})

export default router