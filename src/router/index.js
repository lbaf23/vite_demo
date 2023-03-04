import { createRouter, createWebHistory } from 'vue-router'


const MainPage1 = () => import('../components/MainPage/MainPage1.vue')
const MainPage2 = () => import('../components/MainPage/MainPage2.vue')
const MainPage3 = () => import('../components/MainPage/MainPage3.vue')

const routes = [
  {
    path: '/',
    name: 'MainPage1',
    component: MainPage1
  },
  {
    path: '/main2',
    name: 'MainPage2',
    component: MainPage2
  },
  {
    path: '/main3',
    name: 'MainPage3',
    component: MainPage3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
