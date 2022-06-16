/**
 * Created by liuyong on 2021/3/19
 */
// 统一封装 axios 请求
import axios from 'axios'
import store from '@/store'
import Vue from 'vue'
import { substrString } from '@/utils/tools'

// 创建 axios 实例
const service = axios.create({
  timeout: 180000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  config => {
    store.dispatch('SetLoading', true)
    // 此处可以设置一些 config 的配置
    return config
  },
  error => {
    // loading 清 0
    setTimeout(function () {
      store.dispatch('SetLoading', 0)
    }, 300)
    // 此处处理请求异常的情况
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    store.dispatch('SetLoading', false)
    // 此处处理 response 正常返回的逻辑
    const res = response.data
    if (res.status === 'U00001') {
      // token 过期或未登录
      return ''
    } else {
      // 请求成功
      const status = substrString(res.status, 0, 1)
      if (status === 'E') {
        Vue.prototype.$toast({
          msg: res.message,
          duration: 2000
        })
        return ''
      } else if (status === 'A') {
        if (res.status === 'A00004') {
          res.status = 3
        } else {
          res.status = 2
        }
        return res
      } else if (res.status === 'J00005') {
        window.location.replace(res.message)
      } else {
        return res
      }
    }
  },
  error => {
    store.dispatch('SetLoading', false)
    // 此处处理 response 出错时的逻辑 例如：500，404等
    if (error && error.response) {
      if (error.response.status === 500 || error.response.status === 501 || error.response.status === 502 ||
        error.response.status === 503 || error.response.status === 504 || error.response.status === 505) {
        // 500 状态错误逻辑
      } else {
        // 404 或其他状态逻辑
      }
    }
  }
)

export default service
