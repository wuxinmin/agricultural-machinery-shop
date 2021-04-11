<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left" color="#ee0a24"></van-icon>
      <van-icon name="shopping-cart-o" slot="right" color="#ee0a24"></van-icon>
    </van-nav-bar>
     <van-swipe :autoplay="3000" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
   data() {
     return {
       images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
        'https://img01.yzcdn.cn/vant/apple-3.jpg',
        ]
     }
   }
  };
</script>

<style lang = "scss">
  .van-icon-search::before {
    font-size: 0.36rem;
  }
  .van-icon::before {
    font-size: 0.36rem;
  }
  fieldset, img{
    padding:0 0.2rem 0 0.2rem;
    width: 6.0rem;
    height: 3.6rem;
  }
</style>
