template
├── .browserslistrc
├── .editorconfig
├── .env.alpha  -- 测试环境参数配置文件
├── .env.development  -- 开发环境参数配置文件
├── .env.production  -- 生产环境参数配置文件
├── .eslintrc.js
├── .npmrc
├── .yarnrc
├── README.md  -- 使用说明
├── babel.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public  -- 公共目录
│   ├── favicon.ico  -- 浏览器 icon 图标
│   └── index.html  -- html 页面
├── src
│   ├── App.vue
│   ├── api   -- api 接口文件夹（存放对应的 api 接口，可根据情况自行分类）
│   │   └── user.js   -- 用户相关 api（登录、登出等）
│   ├── assets  -- 静态资源文件夹
│   │   ├── css  -- css 静态资源（可根据情况自行分类）
│   │   │   └── common  -- 公用静态资源文件夹
│   │   │       └── reset.scss  -- 格式化样式
│   │   ├── img  -- img 静态资源（可根据情况自行分类）
│   │   └── js  -- js 静态资源（可根据情况自行分类）
│   │       └── rem.js  -- 移动端适配文件
│   ├── components -- 公用组件（可根据情况自行分类）
│   │   └── SvgIcon.vue  -- svg 文件组件 
│   ├── pComponents -- 业务组件（可根据情况自行分类）
│   ├── icons  -- svg 相关
│   │   ├── index.js  -- svg 配置文件
│   │   └── svg  -- svg 图片文件夹
│   │       └── system.svg
│   ├── main.js  -- 入口文件
│   ├── router  -- 路由文件夹
│   │   ├── router.js  -- 路由配置文件
│   │   └── routes.js  -- 路由配置表
│   ├── store  -- vuex 相关
│   │   ├── getters.js
│   │   └── modules
│   │       └── user.js
│   ├── store.js -- vuex 配置文件
│   ├── utils  -- 工具函数文件夹
│   │   ├── auth.js  -- 用户信息相关
│   │   └── request.js  -- 请求相关
│   └── views  -- vue 页面相关（可根据情况自行分类）
│       └── index.vue  -- 示例页面
├── tree.md  -- 项目结构
├── vue.config.js  -- vue-cli 配置文件
└── yarn.lock
