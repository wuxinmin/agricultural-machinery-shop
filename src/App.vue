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
    <!-- <footer-bar></footer-bar> -->
    <router-view name="footer-bar"></router-view>
  </div>
</template>

<script>
  // import FooterBar from "./components/FooterBar"
  export default {
    // components: {
    //   FooterBar
    // }
  };
</script>
<style lang="scss">
 
</style>
