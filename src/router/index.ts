import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
import Detail from '../views/Detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
