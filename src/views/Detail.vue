<template>
    <div>
        <!-- $router.go(-1) 回到上一个路由 -->
        <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"/>
        <img :src="detail.img" alt="" class="detail-img">
        <div class="detail">
            <p class="detail-name">{{detail.name}}</p>
            <p class="detail-price">￥{{detail.price}}</p>
            <p class="detail-company">产品公司：{{detail.company}}</p>
            <p class="detail-city">产地：{{detail.city}}</p>
        </div>
        <div class="toolbar">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
                <van-goods-action-icon icon="cart-o" text="购物车" />
                <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
                <van-goods-action-button type="warning" text="加入购物车" @click="addCart()"/>
                <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    import axios from  "axios"
    import url from "../service.config"
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
                detail: {}
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods: {
            addCart() {
                // 检查用户是否登录 vux保存登录状态
                // 如果后端保存登录状态 就可以使用koa-section保存 redis
                if(JSON.stringify(this.userInfo) === '{}'){
                    this.$toast.fail('请先登录');
                    setTimeout(()=>{
                        this.$router.push('/mine');
                    }, 1000)
                }else{
                    // 插入购物车
                    axios({
                        url: url.addCart,
                        method: "post",
                        data:{
                            // 商品id传入
                            productId: this.detail._id,
                            // 用户id传入
                            userId: this.userInfo._id,

                        }
                    }).then(res=>{
                        console.log(res);
                        if(res.data.code == 200) {
                            this.$toast.success('添加成功');
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }
            }
        },
        created(){
            // name方式传值： 组件接收值 
            // this.$route.params.id

            // 如果用query的方式传值
            // this.$route.query.id 

            //第三种
            // console.log(this.$route.params.id);
            axios({
                url: url.getDetail,
                method: 'get',
                params: {
                    id: this.$route.params.id
                }
            }).then((res)=>{
                // console.log(res);
                this.detail = res.data;
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>
    .detail-img{
        margin-top: 0.1rem;
        margin-left: 0.2rem;
        width: 6rem;
        height: 5rem;
    }
    .detail{
        padding: 0.2rem;
        &-name{
            color: #333;
            font-weight: bolder;
        }
        &-price{
            color: #ff7300;
            font-size: 0.3rem;
        }
    }
    .toolbar{
        
    }
</style>