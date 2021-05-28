<template>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
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
                active: 0
            };
        },
    }
</script>

<style lang="scss">
  #app{
    // background: ;
  }
  .footer-bar{
    display: flex;
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
  .van-hairline--top-bottom {
    background: linear-gradient(-5deg,#99ff99,#ffffff);
  }
  .van-tabbar-item--active {
    background: #66FE69;
  }
</style>