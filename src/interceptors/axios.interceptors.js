import axios from 'axios'
import router from '../permission'
import { Message } from 'element-ui'
import jsonBigInt from 'json-bigint'

// 配置baseUrl
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

//  `transformResponse` 在传递给 then/catch 前，允许修改响应数据
// transformResponse: [function (data) {
//   // 对 data 进行任意转换处理
//   return data;
// }],
axios.defaults.transformResponse = [function (data) {
  return jsonBigInt.parse(data)
}]

// 请求拦截器

// config 是axios的默认请求配置 和传入的配置 结合出来的
// 必须将config return 不return 不行
axios.interceptors.request.use(function (config) {
  // 在axios请求拦截中,对axios的配置项注入了token,所有的接口都不需要再填写token headers属性了
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  return config
}, function () {
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {} // 为响应数据把一层皮
}, function (err) {
  let status = err.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求数据错误'
      break
    case 401:
      window.localStorage.clear() // 因为token有可能过期 清除垃圾token
      router.push('/login')
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 404:
      message = '手机号不正确'
      break
    case 507:
      message = '服务器或数据异常'
      break
    default:
      message = '未知错误'
      break
  }
  Message({ type: 'warning', message })
  return new Promise(function () { })// 直接返回一个promise 表示错误已经被处理掉 相当于强行截止错误
})

export default axios
