<template>
  <div class="about">
    <van-nav-bar title="购物车" />
    <van-card
      v-for="(item, index) in productList"
      :key="index"
      :price="item.price"
      :desc="item.city"
      :title="item.name"
      :thumb="item.img"
    >
      <template #footer>
        <van-button size="mini" type="warning" @click="delCart(item._id, index)"
          >删除</van-button
        >
      </template>
    </van-card>
    <van-submit-bar
      class="submit-bar"
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "../service.config";
export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    onSubmit() {
      this.$toast.success('跳转到支付页面');
    },
    delCart(id, index) {
      // 删除数据库中的数据，如果删除成功前端页面同时删除
      this.productList.splice(index, 1);
      axios({
        url: url.delCart,
        method: "post",
        data: {
          id: id,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return (
        this.productList.reduce((sum, elem) => {
          sum += elem.price;
          return sum;
        }, 0) * 100
      );
    },
  },
  created() {
    console.log(1111);
    console.log(111);
    // 验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/mine");
      }, 1000);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id,
        },
      })
        .then((res) => {
          console.log("111",res);
          for (let item of res.data) {
            this.productList.push(item.productId);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
<style lang="scss">
.submit-bar {
  margin-bottom: 1rem;
}
</style>