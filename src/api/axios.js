import axios from 'axios'

const Axios = axios.create({
  // 解决线上的请求404问题；
  baseURL: process.env.NODE_ENV === 'production' ? 'http://47.114.139.71:3000' : '',
  // 注意此处的 header 不加 s；
  header: {
    'Content-Type': 'application/json, charset=utf-8'
  }
})

const request = function (params) {
  return Axios(params)
}

export default request
