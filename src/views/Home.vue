<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <van-nav-bar title="首页" class="commonHeader">
      <van-icon name="search" slot="left" color="#ee0a24"></van-icon>
      <van-icon name="shopping-cart-o" slot="right" color="#ee0a24"></van-icon>
    </van-nav-bar>
    <!-- 轮播图 -->
     <div class="carousel">
       <van-swipe :autoplay="3000" :height="200" indicator-color="#ee0a24">
        <van-swipe-item class="carousel-item" v-for="(image, index) in carouselItems" :key="index">
          <!-- 引入懒加载只加载所需要的，提升性能 -->
          <img v-lazy="image.imgSrc" />
        </van-swipe-item>
      </van-swipe>
     </div>
     <!-- 热蒙商品 -->
     <div class="hot">
       <h1 class="hot-title">热门商品</h1>
       <swiper class="hot-swiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in hotLists" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.dayPictureUrl" :alt="item.weather">
            <div>皮袍邵逸夫i我意思u覅赛哦地方,温度是{{ item.temperature }}</div>
          </div>
        </swiper-slide>
       </swiper>
     </div>
     <!-- 推荐商品 -->
     <div class="recommend">
       <h1 class="recommend-title">推荐商品</h1>
       <ul>
         <li v-for="(item, index) in recommendLists" :key="index" class="recommend-list">
           <img :src="item.img" alt="">
           <p>{{item.name}}</p>
           <div>温度是{{item.owner}}</div>
           <div>￥{{item.price}}</div>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import url from '@/service.config.js'

  import axios from 'axios'
  export default {
   data() {
     return {
      carouselItems: [
        {
          imgSrc: 'https://img01.yzcdn.cn/vant/apple-1.jpg'
        },
        {
          imgSrc: 'https://img01.yzcdn.cn/vant/apple-2.jpg'
        },
        {
          imgSrc: 'https://img01.yzcdn.cn/vant/apple-3.jpg'
        }
      ],
      hotLists: [
        {
            date: "今天（周三）",
            dayPictureUrl: "http://api.map.baidu.com/images/weather/day/duoyun.png",
            nightPictureUrl: "http://api.map.baidu.com/images/weather/night/duoyun.png",
            weather: "多云",
            wind: "微风",
            temperature: "23℃"
        },
        {
            date: "明天（周四）",
            dayPictureUrl: "http://api.map.baidu.com/images/weather/day/leizhenyu.png",
            nightPictureUrl: "http://api.map.baidu.com/images/weather/night/zhongyu.png",
            weather: "雷阵雨转中雨",
            wind: "微风",
            temperature: "29～22℃"
        },
        {
            date: "后天（周五）",
            dayPictureUrl: "http://api.map.baidu.com/images/weather/day/yin.png",
            nightPictureUrl: "http://api.map.baidu.com/images/weather/night/duoyun.png",
            weather: "阴转多云",
            wind: "微风",
            temperature: "31～23℃"
        },
        {
            date: "大后天（周六）",
            dayPictureUrl: "http://api.map.baidu.com/images/weather/day/duoyun.png",
            nightPictureUrl: "http://api.map.baidu.com/images/weather/night/duoyun.png",
            weather: "多云",
            wind: "微风",
            temperature: "31～24℃"
        }
      ],
      swiperOptions: {
        slidesPerView: 3
      },
      recommendLists: []
     }
   },
   components: {
     swiper,
     swiperSlide
   },
   created() {
    let that = this
    // axios.get('http://agricultural.com/getRecommendLists')
    axios.get(url.getRecommendLists)
    .then(function(response) { // 箭头函数解决更好
      console.log(response);
      that.recommendLists = response.data;
    })
   }
  };
</script>

<style lang="scss">
  .home{
    background: linear-gradient(85deg, #FFE4B5, #ffffff);
  }
  // 固定头部
  .commonHeader{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  .van-icon-search::before {
    font-size: 0.36rem;
  }
  .van-icon::before {
    font-size: 0.36rem;
  }
  .van-nav-bar__content{
    background: linear-gradient(166deg,#99ff99,#ffffff);
  }
  .carousel {
    margin-top: 1rem;
    height: 3.6rem;
    &-item{
      img{
        padding:0 0.2rem 0 0.2rem;
        height: 3.6rem;
        width: 6.0rem;
        // border-radius: 20%;
      }
    }
  }
  .hot{
    margin-top: 0.2rem;
    &-title{
      padding:0.2rem 0.1rem;
    }
    &-swiper{
      background-color: #fff;
      padding: 0 0.1rem 0 0.1rem;
      &-content{
        width: 2rem;
        text-align: center;
        img{
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  .recommend{
    margin-bottom: 1rem;
    text-align: center;
    &-title{
      padding: 0.2rem 0;
    }
    // &-list{
    //   display: inline-block;
    //   padding: 0 0.35rem;
    //   img{
    //     width: 2.5rem;
    //     height: 2.5rem;
    //   }
    // }

    // 弹性盒模型解决
    ul{
      background: #fff;
      display: flex;
      // 按照所设宽度来分
      flex-wrap: wrap;
      // 居中显示
      justify-content: space-around;
    }
    &-list{
      flex-basis: 45%;
      img{
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
</style>
