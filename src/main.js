import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入组件库，这样做会影响到性能
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 按需引入
import { Button, Icon, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, TreeSelect, Card, Stepper,Tab, Tabs, Field, CellGroup, Toast, Loading, Overlay  } from 'vant';
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(TreeSelect).use(Card).use(Stepper).use(Tab).use(Tabs).use(Field).use(CellGroup).use(Toast).use(Loading).use(Overlay);


Vue.config.productionTip = false

import './assets/css/reset.css'
import './assets/js/rem'
// 引入mockjs
import './mock/mock.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
