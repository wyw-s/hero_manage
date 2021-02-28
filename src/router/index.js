import Vue from 'vue'
import VueRouter from 'vue-router'
import { getLocalStorage } from '@/utils/globalMethods'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的重复点菜单报错问题(错误依然存在只是没有打印在控制台)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

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
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test')
  },
  {
    path: '/photo',
    name: 'photo',
    component: () => import('@/views/photo')
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
