import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // vuex的四部分
  state: { // 1.用于数据的存储
    // 给池字存放信息
    userInfo: {
      // userName: '未登录' // 默认值
    }
  },
  getters: { // 它和vue中的计算属性类似

  },
  mutations: { // 2.相当于一个函数，是改变state数据的唯一途径，注意这里面不能处理异步的操作
    // 改变state状态
    changeLogin(state, status){
      // 这里的state就是上面的state
      state.userInfo = status
    }
  },
  actions: { // 3.它的作用和mutations作用差不多，不过它可以做异步操作
    // 这里的user对应的就是status
    loginAction({commit}, user){
      // 调用mutations中的方法，方法名写道commit中,对应的参数需要传过去
      commit('changeLogin', user);
    }
  }
})
