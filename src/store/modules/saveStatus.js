/**
 * Created by liuyong on 2021/4/12
 */
const status = {
  state: {
    status: ''
  },
  mutations: {
    // 设置状态
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_RECHARGE_STATUS: (state, status) => {
      state.status = status
    }
  },
  actions: {
    // 获取当前状态
    setStatus ({ commit }, status) {
      commit('SET_STATUS', status)
      window.sessionStorage.setItem('FooterStatus', status)
    }
  }
}

export default status
