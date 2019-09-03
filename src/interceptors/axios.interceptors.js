import axios from 'axios'
// import router from '../permission'

// 配置baseUrl
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器

// config 是axios的默认请求配置 和传入的配置 结合出来的
// 必须将config return 不return 不行
axios.interceptors.request.use(function (config) {
  // 在axios请求拦截中,对axios的配置项注入了token,所有的接口都不需要再填写token headers属性了
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  return config
}, function () { })

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {} // 为响应数据把一层皮
}, function () { })

export default axios
