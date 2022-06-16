/**
 * Created by liuyong on 2021/3/18
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
// 通过 export default 暴露出去一个方法，内部返回 router 对象
export default () => {
  return new Router({
    routes,
    // router 默认为 hash 模式，即 '/#/***',此种方法不利于 seo，同时此种方法多用于定位
    // history 模式为正常的 url 模式，利于 seo 搜索
    mode: 'hash',
    // scrollBehavior 可以保存页面滚动到的位置，回退到此页面会重新将滚动条定位到先前的位置
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}
