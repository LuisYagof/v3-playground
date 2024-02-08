import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/infinite-scroll',
      name: 'infinite-scroll',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/InfiniteScrollPage.vue')
    },
    {
      path: '/click-outside',
      name: 'click-outside',
      component: () => import('@/views/ClickOutsidePage.vue')
    },
    {
      path: '/inactivity',
      name: 'inactivity',
      component: () => import('@/views/InactivityPage.vue')
    },
    {
      path: '/save-data',
      name: 'save-data',
      component: () => import('@/views/SaveDataPage.vue')
    }
  ]
})

export default router
