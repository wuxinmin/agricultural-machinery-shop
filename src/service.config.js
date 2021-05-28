// 统一后台配置url
const MOCKURL = 'http://agricultural.com/'
const SERVICEURL = 'http://localhost:3000/' // 真实的url

const URL = {
  getRecommendLists: MOCKURL + 'getRecommendLists',
  getHotProjuct: MOCKURL + 'getHotProjuct',
  // 注册的端口,user对应的就是后端的控制器也就是MVC中的C
  registUser: SERVICEURL + 'user/registUser',
  // 登录的端口
  loginUser: SERVICEURL + 'user/loginUser',
  // 分类类型接口
  getTypes: SERVICEURL + 'type/getTypes',
  // 通过type来获取商品信息
  getProductByType: SERVICEURL + 'product/getProductByType',
  // 详情页面接口
  getDetail: SERVICEURL + 'product/getDetail',
  // 加入购物车
  addCart: SERVICEURL + 'cart/addCart'
}

// 导出 
export default URL;