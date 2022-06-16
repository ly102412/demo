/**
 * Created by liuyong on 2021/3/19
 */
// 存储用户信息
// 存储用户信息到 cookie（视情况而定，如果信息过大可存入 localStorage）
import Cookies from 'js-cookie'

// key
const TokenKey = 'activity'
// token
const key = 'token'

// 获取
export function getUserInfo () {
  return Cookies.get(TokenKey)
}

export function getToken () {
  return Cookies.get(key)
}
