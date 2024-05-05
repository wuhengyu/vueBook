import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import AppHeader from '../components/AppHeader.vue'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'AppHeader',
  //   component: AppHeader
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
