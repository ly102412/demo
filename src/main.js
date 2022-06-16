import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/router'
import '@/assets/css/common/reset.scss'
import NProgress from 'nprogress'
import toast from '@/components/toast/main'
import '@/icons'
import '@/assets/js/rem'
Vue.config.productionTip = false

// 封装全局 toast
Vue.prototype.$toast = toast

const router = createRouter()

// 路由钩子函数
router.beforeEach((to, from, next) => {
  // 加载进度条
  NProgress.start()
  // 路由发生变化时修改 title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
