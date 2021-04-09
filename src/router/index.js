import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue')
  },
  {
    path: '/shopcar',
    component: () => import('../views/ShopCar.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
