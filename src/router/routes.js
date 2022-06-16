/* 路由懒加载配置 */
const index = () => import(/* webpackChunkName: "index" */ '../views/index')
// 隐私协议
// 路由配置文件
const routerConfig = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {
      title: '首页'
    }
  }
]

export default routerConfig
