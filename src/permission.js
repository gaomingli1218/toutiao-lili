import router from './router'
// - 给路由实例注册一个事件 beforeEach(全局前置守卫)
// - 任何路由跳转之前 都会进去beforeEach

router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next(函数) => 必须执行 => 如果不执行 => 死等待
  // 如果要去的地址以/home为起始 就说明需要判断当前是不是登录 判断token
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 放行
      next()
    } else {
      // 强行回到登录页
      next('/login')
    }
  } else {
    next()
  }
})
export default router
