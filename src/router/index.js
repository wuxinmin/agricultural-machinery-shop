import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
let Home = ()=> import('../views/Home.vue')
// import Classify from  '../views/Classify.vue'
let Classify = () => import(/* webpackChunkName: "about" */ '../views/Classify.vue')
// import Mine from  '../views/Mine.vue'
let Mine = () => import('../views/Mine.vue')
// import ShopCar from  '../views/ShopCar.vue'
let ShopCar = () => import('../views/ShopCar.vue')
import FooterBar from '../components/FooterBar'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/classify',
    name: 'Classify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: Classify,
      'footer-bar': FooterBar
    },
    // component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue')
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/shopcar',
    components: {
      default: ShopCar,
      'footer-bar': FooterBar
    },
    // component: () => import('../views/ShopCar.vue')
    meta:{
      keepAlive: false
    }
  },
  {
    path: '/mine',
    // component: () => import('../views/Mine.vue')
    components: {
      default: Mine,
      'footer-bar': FooterBar
    },
    meta:{
      keepAlive: false
    }
  },
  {
    path: '/detail/:id',
    name: "detail",
    component: () => import('../views/Detail.vue')
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
