import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/heroList',
    children: [
      {
        path: 'heroList',
        name: 'heroList',
        component: () => import('@/views/heroManage')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
