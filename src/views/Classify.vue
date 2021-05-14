<template>
  <div class="about">
    <van-nav-bar
      title="分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tree-select
      height="5rem"
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
        { text: '拖拉机', children: [], dot: true },
        { text: '播种机', children: [], badge: 5 },
        { text: '脱粒机', children: [], badge: 5 },
        { text: '小型工具', children: [], badge: 5 },
        { text: '零件', children: [], badge: 5 }
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