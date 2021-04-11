<template>
  <div id="app">
    <!-- <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">
          <van-icon name="wap-home-o" />
          首页
        </router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/classify">
          <van-icon name="apps-o" />
          分类
        </router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/shopcar">
          <van-icon name="cart-o" />
          购物车
        </router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/mine">
          <van-icon name="user-o" />
          我的
        </router-link>
      </li>
    </ul> -->
    <router-view/>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },
  };
</script>
<style lang="scss">
  .footer-bar{
    display: flex;
    background: chocolate;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
     // scss语法
    &-item{
      flex-grow: 1;
      text-align: center;
      font-size: 0.28rem;
      line-height: 1rem;
    }
  }
</style>
