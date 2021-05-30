<template>
  <van-tabbar
    v-model="active"
    active-color="#ee0a24"
    inactive-color="#000"
    @change="change"
  >
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/shopcar">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  created() {
    // 获取
    this.active = parseInt(localStorage.getItem("active"));
  },
  methods: {
    change(active) {
      // console.log(active);
      // 存储，注意localStorage存储的时候只能存储字符串型
      localStorage.setItem("active", active);
    },
  },
  watch: {
    $route(to, from) {
      console.log(from.path);
      console.log(to.path);
      if(to.path == '/'){
        this.active = 0;
      }else if(to.path == '/classify'){
        this.active = 1;
      }else if(to.path == '/shopcar'){
        this.active = 2;
      }else if(to.path == '/mine'){
        this.active = 3;
      }
    }
  },
};
</script>

<style lang="scss">
#app {
  // background: ;
}
.footer-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  // scss语法
  &-item {
    flex-grow: 1;
    text-align: center;
    font-size: 0.28rem;
    line-height: 1rem;
  }
}
.van-hairline--top-bottom {
  background: linear-gradient(-5deg, #99ff99, #ffffff);
}
.van-tabbar-item--active {
  background: #66fe69;
}
</style>