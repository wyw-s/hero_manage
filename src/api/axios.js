import axios from 'axios'

axios.defaults.baseURL = 'http://47.114.139.71:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json, charset=utf-8'

const request = function (params) {
  return axios(params)
}

export default request
