/**
 * Created by liuyong on 2021/4/12
 */
import request from '@/utils/request'
const baseUrl = '/api'

export default {
  // 查看活动页面
  getActInfo (data) {
    return request({
      url: `${baseUrl}/activity/message/Txph6z2S`,
      method: 'get',
      params: data
    })
  },
  // 验证手机号
  phoneVerify (data) {
    return request({
      url: `${baseUrl}/phone/verify`,
      method: 'post',
      data
    })
  },
  // 获取验证码
  getPhoneCode (data) {
    return request({
      url: `${baseUrl}/get/phone/code`,
      method: 'post',
      data
    })
  },
  // 手机号登录
  phoneLogin (data) {
    return request({
      url: `${baseUrl}/phone/login`,
      method: 'post',
      data
    })
  },
  // 微信登录
  wxLogin (data) {
    return request({
      url: `${baseUrl}/wx/login`,
      method: 'post',
      data
    })
  },
  // 补全手机号
  updatePhone (data) {
    return request({
      url: `${baseUrl}/update/phone`,
      method: 'post',
      data
    })
  }
}
