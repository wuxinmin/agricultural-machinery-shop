<template>
  <div class="about">
    <van-tabs v-if="JSON.stringify(this.userInfo) == '{}'">
      <van-tab title="登录">
        <!-- required 必填 clearable删除-->
        <van-cell-group>
          <van-field
            v-model="loginUsername"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="loginPassword"
            required
            clearable
            label="密码"
            type="password"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <div>
          <van-button style="width:5rem; margin-left:0.7rem; height: 0.7rem; margin-top: 0.6rem;border-radius: 0.3rem;" 
                      type="primary" 
                      size="normal" 
                      @click="loginHandle">登录</van-button>
        </div>
        <van-overlay :show="show">
          <div class="wrapper" @click.stop>
              <van-loading color="#0094ff" text-color="#0094ff" vertical >加载中</van-loading>
          </div>
        </van-overlay>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="registUsername"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="registPassword"
            required
            clearable
            label="密码"
            type="password"
            placeholder="请输入密码"
          />
        </van-cell-group>
        <div>
          <van-button style="width:5rem; margin-left:0.7rem; height: 0.7rem; margin-top: 0.6rem; border-radius: 0.3rem;" 
                      type="primary" 
                      size="normal" 
                      @click="registHandle">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
    <div v-if="JSON.stringify(this.userInfo) != '{}'">
      我的
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// 引入总的端口文件 @指的是src
import url from '@/service.config.js'
// 引入vuex来保存用户登录状态
import {mapActions} from "vuex"
// 从vuex中取值
import {mapState} from 'vuex'
export default {
  data() {
    return {
      loginUsername: '',
      loginPassword: '',
      registUsername: '',
      registPassword: '',
      show: false

    };
  },
  computed: {
    //  映射mutations写入computed
     ...mapState(['userInfo'])
  },
  methods: {
    // 将store/index.js 中的方法映射出来，想映射那个，映射actions写入methods
    ...mapActions(['loginAction']),
    // 注册的处理方法
    registHandle() {
      axios({
        url: url.registUser,
        method: 'post',
        // post请求把对应要提交给后端的内容提交给后端
        data: {
          userName: this.registUsername,
          password: this.registPassword
        }
      }).then(res=>{
        if(res.data.code == 200){
          this.$toast.success('注册成功');
          this.registUsername = '';
          this.registPassword = '';
        }else{
          this.$toast.fail('注册失败');  
        }
      }).catch(err=>{
        console.log(err);
        this.$toast.fail('注册失败');
      })
    },

    // 登录的处理方法
    loginHandle() {
      this.show = true
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.loginUsername,
          password: this.loginPassword
        }
      }).then(res=>{
        console.log(res);
        if(res.data.code == 200){
          // 模拟
          new Promise((resolve, reject)=>{
            setTimeout(()=>{
              resolve();
            },1000)
          }).then(()=>{
            this.$toast.success('登录成功');
            // vuex保存登录成功的状态
            this.loginAction(res.data.userInfo);

            // 可以在任何组件内通过 this.$router 访问路由器
            this.$router.go(-1);
            this.show = false
          }).catch(err=>{
            this.show = false;
            this.$toast.fail('登录状态失败');
          })
        }
        if(res.data.code == 201){
          this.show = false;
          this.$toast.fail('登录失败，密码错误');
        }
      }).catch(err=>{
        this.show = false;
        this.$toast.fail('登录失败');
      })
    }
  }
}
</script>
<style lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
