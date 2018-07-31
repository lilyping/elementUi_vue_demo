import * as types from './mutation_types'

export default {
  setToken ({
    commit
  }, token) { // 设置token
    commit(types.SET_TOKEN, token)
  }
}
