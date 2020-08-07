/**
 * 用户登录
 */
import resquest from '../axios.js'

// 用户注册：
export function userRegister (params) {
  return resquest({
    url: '/user/captcha',
    data: params,
    method: 'POST'
  })
}

// 用户登录：
export function userLogin (params) {
  return resquest({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}
