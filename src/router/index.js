import Vue from 'vue'
import VueRouter from 'vue-router'
import { getLocalStorage } from '@/utils/globalMethods'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/heroList',
    children: [
      {
        path: '/heroList',
        name: 'heroList',
        component: () => import('@/views/heroManage')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

// 全局路由拦截器
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !getLocalStorage('SUCCESS_TOKEN')) next({ name: 'login' })
  else next()
})

export default router
