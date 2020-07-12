module.exports = {
  // 解决部署后访问空白页的问题；
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/'
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http:47.114.139.71:3000',
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^api': ''
  //       }
  //     }
  //   }
  // }
}
