<template>
  <div id="app">
    <ul class="footer-bar">
      <li class="footer-bar-item"><router-link to="/">首页</router-link></li>
      <li class="footer-bar-item"><router-link to="/classify">分类</router-link></li>
      <li class="footer-bar-item"><router-link to="/shopcar">购物车</router-link></li>
      <li class="footer-bar-item"><router-link to="/mine">我的</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

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
      font-size: 14px;
      line-height: 1rem;
    }
  }
</style>
