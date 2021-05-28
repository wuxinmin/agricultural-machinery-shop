import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from  '../views/Classify.vue'
import Mine from  '../views/Mine.vue'
import ShopCar from  '../views/ShopCar.vue'
import FooterBar from '../components/FooterBar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    components: {
      default: Home,
      'footer-bar': FooterBar
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
    }
    // component: () => import(/* webpackChunkName: "about" */ '../views/Classify.vue')
  },
  {
    path: '/shopcar',
    components: {
      default: ShopCar,
      'footer-bar': FooterBar
    }
    // component: () => import('../views/ShopCar.vue')
  },
  {
    path: '/mine',
    // component: () => import('../views/Mine.vue')
    components: {
      default: Mine,
      'footer-bar': FooterBar
    }
  },
  {
    path: '/detail/:id',
    name: "detail",
    component: () => import('../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
