/**
 * Created by liuyong on 2021/3/19
 */
import api from '@/api/common'

const user = {
  state: {
    user_id: ''
  },
  mutations: {
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    }
  },
  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        api.getBocLoginCoupon(userInfo).then(res => {
          if (res) {
            if (res.status === 0) {
              commit('SET_USER_ID', res.data.user_id)
              resolve(res)
            } else {
              resolve(res)
            }
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default user
