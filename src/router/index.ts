import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
import Detail from '../views/Detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: 'Chuck Norris Facts',
      layout: 'DefaultLayout'
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      title: 'Detail',
      layout: 'DefaultLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
