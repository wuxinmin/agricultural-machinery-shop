<template>
  <div class="about">
    <van-tabs>
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
          <van-button type="primary" size="normal" style="width:6rem; margin-left:0.2rem">登录</van-button>
        </div>
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
          <van-button style="width:5rem; margin-left:0.7rem; height: 0.7rem; margin-top: 0.6rem" 
                      type="primary" 
                      size="normal" 
                      @click="registHandle">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from 'axios'
// 引入总的端口文件 @指的是src
import url from '@/service.config.js'
export default {
  data() {
    return {
      loginUsername: '',
      loginPassword: '',
      registUsername: '',
      registPassword: ''

    };
  },
  methods: {
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
    }
  }
}
</script>
<style lang="scss">

</style>
