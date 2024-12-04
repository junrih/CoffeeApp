import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Detail from "../views/detail/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'started'
  },
  {
    path: '/home',
    name: "home",
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/started',
    name: "started",
    component: () => import('@/views/started/index.vue')
  },
  {
    path: "/detail/:coffeeName/:coffeePrice",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: '/order',
    name: "order",
    component: () => import('@/views/order/index.vue')
  },
  {
    path: '/deliver',
    name: "deliver",
    component: () => import('@/views/deliver/index.vue')
  },
  {
    path: '/tabs/',
  
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
     
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
