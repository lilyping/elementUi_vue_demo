import Vue from 'vue'
import elementUI from 'element-ui'
import { mount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login'
import axios from 'axios'
import { Api } from '@/api-dev'
import { Common } from '@/common'
import Vuex from 'vuex'
import mutations from '@/vuex/mutations'
import actions from '@/vuex/actions'
import request from 'request'

const localVue = createLocalVue()

Vue.use(elementUI)
localVue.use(Vuex)

jest.mock('axios', () => ({
  post: jest.fn().mockImplementationOnce(() => Promise.resolve({
    data: {
      msg: '用户不存在！'
    }
  })).mockImplementationOnce(() => Promise.resolve({
    data: {
      msg: '密码错误！'
    }
  })).mockImplementationOnce(() => Promise.resolve({
    data: {
      msg: 'success',
      data: {
        token: new Date().getTime()
      }
    }
  }))
}))

Vue.prototype.$http = axios
Vue.prototype.api = Api
Vue.prototype.common = Common

let wrapper
let store

const $router = {
  push: jest.fn()
}

const doRequest = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        resolve(body)
      } else {
        reject(err)
      }
    })
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    state: {
      token: null
    },
    actions,
    mutations
  })
  wrapper = mount(Login, {
    mocks: {
      $router
    },
    store,
    localVue
  })
})

describe('有关Login.vue的测试用例：', () => {
  test('登录界面应有两个输入框和一个登录按钮！', () => {
    const inputs = wrapper.findAll('input')
    const loginBtn = wrapper.contains('.login')
    expect(inputs.length).toBe(2)
    expect(loginBtn).toBeTruthy()
  })

  test('存在预期结构快照。', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('在密码输入框回车应触发handleLogin方法！', () => {
    const stub = jest.fn()
    wrapper.setMethods({
      handleLogin: stub
    })
    wrapper.find('[type=password]').trigger('keyup.enter')
    expect(stub).toBeCalled()
  })

  test('模拟用户不存在场景。', async () => {
    const result = await wrapper.vm.handleLogin()
    expect(result.data.msg).toBe('用户不存在！')
  })

  test('模拟输入异常的登录信息。', async () => {
    wrapper.setData({
      account: 'zhaopin',
      password: '123'
    })
    const result = await wrapper.vm.handleLogin()
    expect(result.data.msg).toBe('密码错误！')
  })

  test('模拟登录成功。', async () => {
    wrapper.setData({
      account: 'zhaopin',
      password: '123'
    })
    const result = await wrapper.vm.handleLogin()
    expect(result.data.msg).toBe('success')
  })

  test('点击登录按钮应执行handleLogin方法一次！', () => {
    const stub = jest.fn()
    wrapper.setMethods({
      handleLogin: stub
    })
    const loginBtn = wrapper.findAll('button')
    // expect(loginBtn.is('button')).toBe(true)
    loginBtn.trigger('click')
    setTimeout(() => { // 不加会报错，且异步事件触发尽可能往后放，不然会影响mock结果比对
      expect(stub).toHaveBeenCalledTimes(1)
    }, 0)
  })
})

describe('关于真实API接口用例：', () => {
  test('百度天气当前城市为北京~', async () => {
    const res = await doRequest('http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=6tYzTvGZSOpYB5Oc2YGGOKt8')
    expect(JSON.parse(res).results[0].currentCity).toBe('北京')
  })
})
