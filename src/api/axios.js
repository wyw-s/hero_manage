import axios from 'axios'
import { tooltip, getLocalStorage } from '@/utils/globalMethods'

const Axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // 注意此处的 header 不加 s；
  header: {
    'Content-Type': 'application/json, charset=utf-8'
  }
})

// 请求拦截器
Axios.interceptors.request.use(function (config) {
  const regExp = /\/user\//
  if (!regExp.test(config.url)) {
    // 添加请求头
    config.headers.Authorization = getLocalStorage('SUCCESS_TOKEN')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器：
Axios.interceptors.response.use((response) => {
  const { data } = response
  if (data.code !== 200) {
    tooltip(data.message, 'warning')
  }
  return response.data
}, (error) => {
  return Promise.reject(error)
})

const request = function (params) {
  return Axios(params)
}

export default request
