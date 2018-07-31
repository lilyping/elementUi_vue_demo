import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/reset.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

const getBasics = async (to, next) => {
  try {
    const res = await axios(``)
    if (res.data.state !== '0') {
      ElementUI.MessageBox.alert(res.data.msg, {
        title: '错误信息',
        customClass: 'forbidden',
        showConfirmButton: false
      })
    }
    if (res.data.msg === 'success') {
      store.state.info = res.data.data
      next()
    }
  } catch (e) {
    Common.handleError(e, store._vm)
  }
}

// router.beforeEach(async (to, from, next) => { // 权限验证
//   !store._vm.UI && (store._vm.UI = ElementUI) // 整体Element引入需要增加UI属性
//   if (!store.state.token) { // 尚未加入验证
//     const auth = Common.getCookie('INNER_AUTHENTICATION')
//     const token = auth && atob(auth)
//     if (token) { // 当cookie中存在token
//       store.dispatch('setToken', token)
//       getBasics(to, next)
//     } else { // cookie中不存在验证信息则获取身份识别
//       const ZPSSO_USER_EMPID = Common.getCookie('ZPSSO_USER_EMPID')
//       const ZPSSO_USER_NAME = Common.getCookie('ZPSSO_USER_NAME')
//       const ZPSSO_USER_PWD = Common.getCookie('ZPSSO_USER_PWD')
//       if (!ZPSSO_USER_EMPID || !ZPSSO_USER_NAME || !ZPSSO_USER_PWD) {
//         // 跳转至登入页面
//         // const curUrl = window.location.href
//         const curUrl = `https%3A%2F%2Fcmp.zhaopin.com`
//         window.location.href = `http://nw.zhaopin.com/cas/login?service=${curUrl}`
//       }
//       const url = 'https://inner-login.zhaopin.com/login/getToken'
//       await axios.get(url).then(res => { // 远端获取token
//         const token = res.data.data
//         store.dispatch('setToken', token)
//         // next()
//       }).catch(e => Common.handleError(e, store._vm))
//       getBasics(to, next)
//     }
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
