import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less'
import axios from './interceptors/axios.interceptors'
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$axios = axios // axios赋值给全局属性
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
