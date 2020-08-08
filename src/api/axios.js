import axios from 'axios'
import { tooltip } from '@/utils/globalMethods'

const Axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // 注意此处的 header 不加 s；
  header: {
    'Content-Type': 'application/json, charset=utf-8'
  }
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
