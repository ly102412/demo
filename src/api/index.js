import request from '@/utils/request'
const baseUrl = '/api'

export default {
  // 领取积分
  getReceivceIntegral (data) {
    return request({
      url: `${baseUrl}/user/receivce/integral`,
      method: 'post',
      data
    })
  },
  // 我的积分
  getMyIntegral (data) {
    return request({
      url: `${baseUrl}/user/unclaimed/integral`,
      method: 'get',
      params: data
    })
  },
  // 总积分
  getUserScore (data) {
    return request({
      url: `${baseUrl}/user/score`,
      method: 'get',
      params: data
    })
  },
  // 商品列表
  getGoodsPage (data) {
    return request({
      url: `${baseUrl}/get/integral/goods/page`,
      method: 'get',
      params: data
    })
  },
  // 商品分组列表
  getGroupList (data) {
    return request({
      url: `${baseUrl}/get/second/group/list`,
      method: 'get',
      params: data
    })
  },
  // 商品详情
  getIntegralGoodsDetail (data) {
    return request({
      url: `${baseUrl}/get/integral/goods/detail`,
      method: 'get',
      params: data
    })
  },
  // 立即兑换
  getIntegralExchangeGoods (data) {
    return request({
      url: `${baseUrl}/integral/exchange/goods`,
      method: 'post',
      data
    })
  },
  // 订单详情
  getOrderDetail (data) {
    return request({
      url: `${baseUrl}/integral/order/detail`,
      method: 'get',
      params: data
    })
  },
  // 订单记录
  getIntergralPage (data) {
    return request({
      url: `${baseUrl}/get/user/intergral/page`,
      method: 'get',
      params: data
    })
  },
  // 兑换码-查看商品详情
  getGoodsDetail (data) {
    return request({
      url: `${baseUrl}/get/goods/details`,
      method: 'get',
      params: data
    })
  },
  // 隐私协议等
  getServiceConfig (data) {
    return request({
      url: `${baseUrl}/activity/service/config`,
      method: 'get',
      params: data
    })
  }
}
