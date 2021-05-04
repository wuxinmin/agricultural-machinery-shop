<template>
  <div class="about">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-stepper v-model="value" theme="round" button-size="14" disable-input />
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>
<script>
export default {
  data() {
    return { 
      value: 1
    };
  },
  methods: {
    onClickLeft() {
      
    },
    onClickRight() {
      
    }
  }
}
</script>
<style lang="scss">

</style>