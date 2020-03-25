import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '',
        name: 'home_body',
        component: () => import('../views/home_body.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/home_body/products.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/home_body/news.vue')
      },
      {
        path: 'download',
        name: 'download',
        component: () => import('../views/home_body/download.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/home_body/about.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/home_body/contact.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
