<template>
  <div class="classify">
    <van-nav-bar
      title="商品类型"
    />
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li @click="selectCategory(item.typeId, index)" :class="{active:active==index}" v-for="(item, index) in types" :key="index">{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="content" @load="onLoad" v-model="isLoading" :finished="finished"> 
              <div @click="goDetail(item._id)" class="content-item" v-for="(item, index) in productList" :key="index">
                <img :src="item.img" alt="">
                <p class="content-item-name">{{item.name}}</p>
                <p>￥{{item.price}}</p>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
// 引入端口文件
import url from '@/service.config.js'
export default {
  data() {
    return {
      active: 0,
      types: [],
      productList: [],
      typeId: 1, // 当选中类型的id
      start: 0, // 从哪条数据开始获取
      limit: 10, // 每一次读取多少条数据
      finished: false, // 数据是否去完
      isLoading: false, // 上拉加载
    };
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;
      this.getProductList();
    },
    // 获取productList
    getProductList() {
      this.isLoading = true;
      axios({
        url: url.getProductByType,
        method: 'get',
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      }).then(res=>{
        // console.log(res);
        if(res.data.length != 0){
          this.productList = this.productList.concat(res.data);
        }else{
          this.finished = true;
        }
        this.isLoading = false;
      }).catch(err=>{
        console.log(err);
      })
    },
    onLoad() {
      // 模拟异步加载过程所以用定时器
      setTimeout(()=>{
        this.getProductList();
      }, 2000)
    },
    onRefresh() {
      //模拟异步加载
      setTimeout(() => {
        this.productList = [];
        this.getProductList();
      }, 2000);
    },
    goDetail(id) {
      // 跳转组件
      /* this.$router.push({
        name: "detail",
        // 组件传值方式1：name方式传值
        params: {
          id: id
        }
      }) */
      /* this.$router.push({
        // 第二种组件传值
        path: "/detail",
        query: {
          id: id
        }
      }) */
      // 第三种
      this.$router.push(`/detail/${id}`);
    }
  },
  created() {
    axios({
      url: url.getTypes
    }).then(res=>{
      // console.log(res);
      this.types = res.data;
      this.selectCategory(this.typeId, this.active);
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>
<style lang="scss">
  .classify{
    height: 11.36rem;
    // background: linear-gradient(85deg, #FFE4B5, #ffffff);
  }
  .nav{
    background: linear-gradient(122deg, #888, #ffffff);
    li{
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      border: 1px solid #fff;
      padding: 3px;
    }
    .active{
      background: #eeffff;
    }
  }
  .container{
    background: #eeeeee;
    position: fixed;
    top: 48px;
    bottom: 1rem;
    right: 0;
    overflow-y: scroll;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    &-item{
      width: 40%;
      padding:0 10px;
      text-align: center;
      img{
        width: 2rem;
        height: 2rem;
      }
      &-name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        // 显示几行
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>