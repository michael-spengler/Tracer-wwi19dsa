import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Basic/Homescreen'
  },
  {
    path: '/Basic/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/Basic/Homescreen'
      },
      {
        path: 'Homescreen',
        component: () => import('@/views/Homescreen.vue')
      },
      {
        path: 'Scan',
        component: () => import('@/views/Scan.vue')
      },
      {
        path: 'Settings',
        component: () => import('@/views/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
