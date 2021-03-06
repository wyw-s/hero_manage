module.exports = {
  // 解决部署后访问空白页的问题；
  publicPath: '/',
  // 输出文件目录 默认为: dist
  outputDir: 'dist',
  // 放置打包生成的静态资源 (js、css、img、fonts) 的目录。该目录相对于 outputDir 。
  assetsDir: 'assets',
  // 为生产环境禁用 SourceMap
  productionSourceMap: false,
  // 将打包生成的的静态资源的文件名中加入hash以便控制浏览器缓存问题。
  filenameHashing: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'production',
    // 开启 CSS source maps?
    sourceMap: false
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = '后台管理'
        return args
      })
  },
  devServer: {
    host: '0.0.0.0', // 允许以 ip 地址访问本机
    port: 8085,
    open: true,
    hot: true, // 热更新
    proxy: {
      '/hero': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/hero': '/hero'
        }
      },
      '/user': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/user': '/user'
        }
      }
    }
  }
}
