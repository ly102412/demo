/**
 * Created by liuyong on 2021/3/16
 */
// webpack 配置
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 绝对地址
function resolve (dir) {
  return path.join(__dirname, './', dir)
}

// cdn 预加载（根据实际情况增减）
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'js-cookie': 'Cookies',
  'nprogress': 'NProgress'
}

// cdn 地址
const cdn = {
  // 开发环境
  dev: {
    css: [
      'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
    ]
  },
  // 生产环境
  build: {
    css: [
      `${process.env.VUE_APP_CDN_URL}web/css/nprogress.min.css`
    ],
    js: [
      `${process.env.VUE_APP_CDN_URL}web/js/vue.min.js`,
      `${process.env.VUE_APP_CDN_URL}web/js/vue-router.min.js`,
      `${process.env.VUE_APP_CDN_URL}web/js/vuex.min.js`,
      `${process.env.VUE_APP_CDN_URL}web/js/axios.min.js`,
      `${process.env.VUE_APP_CDN_URL}web/js/js.cookie.min.js`,
      `${process.env.VUE_APP_CDN_URL}web/js/nprogress.min.js`
    ]
  }
}

// 是否使用 gzip
const productionGzip = true
// 需要压缩的文件的后缀
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: (process.env.NODE_ENV === 'production') ? './' : '/',
  chainWebpack: config => {
    // 添加 cdn 参数到 HTMLWebpackPlugin，详见 public/index.html
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // svg loader
    const svgRule = config.module.rule('svg') // 获取 svg-loader
    svgRule.uses.clear() // 清除已有的 loader，如果不这样做会添加在此 loader 之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除 node_module 目录
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改 images loader 添加 svg 处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  // 修改 webpack config 配置，使其不打包 externals 下的资源
  configureWebpack: config => {
    const myConfig = {}
    if (process.env.NODE_ENV === 'production') {
      // 生产环境 npm 包转 CDN
      myConfig.externals = externals
      myConfig.plugins = []
      // 构建时开启gzip ，减低服务器压缩对cpu资源的占用，服务器也要开启 gzip
      productionGzip && myConfig.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8
        })
      )
    }
    if (process.env.NODE_ENV === 'development') {
      // 关闭host，check 方便使用 ngrok 之类的内网转发工具
      myConfig.devServer = {
        proxy: {
          '/api': {
            target: 'https://xiyintst.ruwe.cn//', // 开发域名或测试域名
            changeOrigin: true
          }
        }
      }
    }
    return myConfig
  }
}
