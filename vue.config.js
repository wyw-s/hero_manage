module.exports = {
  // 解决部署后访问空白页的问题；
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
