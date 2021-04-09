<template>
  <div class="footer-container" :style="{background:$store.state.color}">
    <ul>
      <li v-for="(obj,index) in menu" :key="index" @click="$store.commit('change',obj)">
        <router-link :to="obj.path">{{obj.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            menu:[
                {
                    path:"/movie",
                    title:"电影",
                    color:"red"
                },
                {
                    path:"/music",
                    title:"音乐",
                    color:"green"
                },
                {
                    path:"/book",
                    title:"书籍",
                    color:"yellow"
                },
                {
                    path:"/photo",
                    title:"图片",
                    color:"blue"
                },
            ]
        }
    },
    created(){
        console.log(this.$route.path);  //取到当前路径
        this.menu.forEach((obj,index)=>{
            if(obj.path==this.$route.path){
                this.$store.commit('change',obj)
            }
        })
    }
};
</script>

<style lang="scss" scoped>
.footer-container {
  
  width: 100%;
  background: red;
  bottom: 0;
  position: fixed;
  ul{
      display: flex;
      height: 50px;
      li{
          flex: 1;
          text-align: center;
          line-height: 50px;
          a{
              color: #000000;
              &.router-link-active{
                  color: #ffffff;
                  text-decoration: none;
              }
          }
      }
  }
}
</style>