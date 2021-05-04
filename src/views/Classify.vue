<template>
  <div class="about">
    <van-nav-bar
      title="分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tree-select
      height="55vw"
      :items="items"
      :main-active-index.sync="activeIndex"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: '浙江', children: [], dot: true },
        { text: '江苏', children: [], badge: 5 },
        { text: '江苏', children: [], badge: 5 },
        { text: '江苏', children: [], badge: 5 },
        { text: '江苏', children: [], badge: 5 },
        { text: '江苏', children: [], badge: 5 },
      ],
    };
  },
  methods: {
    onClickLeft() {
      
    }
  }
}
</script>
<style lang="scss">

</style>