module.exports = {
  // 解决部署后访问空白页的问题；
  publicPath: '/',
  devServer: {
    host: '0.0.0.0', // 允许以 ip 地址访问本机
    port: 8085,
    open: true,
    proxy: {
      '/hero': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/hero': '/hero'
        }
      }
    }
  }
}
