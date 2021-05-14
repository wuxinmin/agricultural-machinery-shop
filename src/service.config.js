// 统一后台配置url
const MOCKURL = 'http://agricultural.com/'
const SERVICEURL = 'http://localhost:3000/' // 真实的url

const URL = {
  getRecommendLists: MOCKURL + 'getRecommendLists',
  getHotProjuct: MOCKURL + 'getHotProjuct',
  // 注册的端口,user对应的就是后端的控制器也就是MVC中的C
  registUser: SERVICEURL + 'user/registUser'
}

// 导出 
export default URL;