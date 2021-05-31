<template>
  <div class="home">
    <!-- 开屏广告 -->
    <div class="ad" v-if="bg" @touchmove.prevent @click="adClick()">
      <span class="adJump" @click.stop="todetail">点击跳转{{ t }}s</span>
    </div>
    <div v-if="main">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <van-nav-bar title="首页" class="commonHeader">
        <van-icon name="search" slot="left" color="#ee0a24"></van-icon>
        <van-icon slot="right" color="#ee0a24" @click="$router.push('/mine')">{{
          JSON.stringify(userInfo) === "{}" ? "未登录" : userInfo.userName
        }}</van-icon>
      </van-nav-bar>
      <!-- 轮播图 -->
      <div class="carousel">
        <van-swipe :autoplay="3000" :height="200" indicator-color="#ee0a24">
          <van-swipe-item
            class="carousel-item"
            v-for="(image, index) in carouselItems"
            :key="index"
          >
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
              <img :src="item.dayPictureUrl" :alt="item.weather" />
              <div>农业机械：{{ item.temperature }}</div>
              <div>￥{{ item.price }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 推荐商品 -->
      <div class="recommend">
        <h1 class="recommend-title">推荐商品</h1>
        <ul>
          <li
            v-for="(item, index) in recommendLists"
            :key="index"
            class="recommend-list"
          >
            <img :src="item.img" alt="" />
            <div class="recommend-list-details">
              <p>{{ item.name }}</p>
              <div>商家姓名：{{ item.owner }}</div>
              <div>￥{{ item.price }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import url from "@/service.config.js";
// 从vuex中取值
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      t: 5,
      bg: true,
      main: false,
      carouselItems: [
        {
          imgSrc:
            "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00107-2308.jpg",
        },
        {
          imgSrc:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2563802065,4210332452&fm=26&gp=0.jpg",
        },
        {
          imgSrc:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2821829116,3507426852&fm=26&gp=0.jpg",
        },
      ],
      hotLists: [
        {
          dayPictureUrl:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3340981334,1816691981&fm=26&gp=0.jpg",
          nightPictureUrl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1605923581,3838751732&fm=26&gp=0.jpg",
          price: "2003",
          temperature: "拖拉机",
        },
        {
          dayPictureUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1430861001,873381527&fm=26&gp=0.jpg",
          nightPictureUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1185560750,1315492818&fm=26&gp=0.jpg",
          price: "600",
          temperature: "脱粒机",
        },
        {
          dayPictureUrl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257167586,2457058679&fm=26&gp=0.jpg",
          nightPictureUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3219331938,1480796438&fm=26&gp=0.jpg",
          price: "1300",
          temperature: "收割机",
        },
        {
          dayPictureUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1795232239,1177195131&fm=26&gp=0.jpg",
          nightPictureUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1705202326,3050385184&fm=26&gp=0.jpg",
          price: "2300",
          temperature: "微耕机",
        },
      ],
      swiperOptions: {
        slidesPerView: 3,
      },
      recommendLists: [],
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  created() {
    let that = this;
    // axios.get('http://agricultural.com/getRecommendLists')
    axios.get(url.getRecommendLists).then(function (response) {
      // 箭头函数解决更好
      console.log(response);
      that.recommendLists = response.data;
    });
  },
  mounted() {
    this.star();
  },
  computed: {
    //  映射
    ...mapState(["userInfo"]),
  },
  methods: {
    star() {
      var timers = setInterval(() => {
        this.t--;
        if (this.t == 0) {
          this.skip(timers);
        }
      }, 1000);
    },
    skip(op) {
      console.log("ok");
      clearInterval(op);
      this.bg = false;
      this.main = true;
    },
    todetail() {
      this.skip(null);
    },
    adClick() {
      window.location.href = 'https://a.nongjitong.com/'
    }
  },
};
</script>

<style lang="scss">
.home {
  background: linear-gradient(85deg, #ffe4b5, #ffffff);
}
// 固定头部
.commonHeader {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 666;
}
.van-icon-search::before {
  font-size: 0.36rem;
}
.van-icon::before {
  font-size: 0.36rem;
}
.van-nav-bar__content {
  background: linear-gradient(166deg, #99ff99, #ffffff);
}
.carousel {
  margin-top: 1rem;
  height: 3.6rem;
  &-item {
    img {
      padding: 0 0.2rem 0 0.2rem;
      height: 3.6rem;
      width: 6rem;
      // border-radius: 20%;
    }
  }
}
.hot {
  margin-top: 0.2rem;
  &-title {
    padding: 0.2rem 0.1rem;
  }
  &-swiper {
    background-color: #fff;
    padding: 0 0.1rem 0 0.1rem;
    &-content {
      width: 2rem;
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
.recommend {
  margin-bottom: 1rem;
  text-align: center;
  &-title {
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
  ul {
    background: #fff;
    display: flex;
    // 按照所设宽度来分
    flex-wrap: wrap;
    // 居中显示
    justify-content: space-around;
  }
  &-list {
    flex-basis: 45%;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    &-details {
      padding: 0 0.2rem;
    }
  }
}
.ad {
  // background-image: image('');
  height: 14rem;
  width: 100%;
  // background-color: aqua;
  background-image: url("../assets/adBg.jpg");
  position: relative;
  z-index: 999;
  background-size: cover;

  background-repeat: no-repeat;
  .adJump {
    float: right;
    margin: 0.2rem;
    padding: 0.08rem 0.18rem;
    background: #eeeeee;
    border-radius: 0.2rem;
  }
}
</style>
