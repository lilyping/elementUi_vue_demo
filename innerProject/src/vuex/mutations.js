import * as types from './mutation_types'

export default {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  }
}
