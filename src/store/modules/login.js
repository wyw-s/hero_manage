/**
 * 用户登录
 */
import {
  userRegister,
  userLogin
} from '@/api/login'
const login = {
  actions: {
    // 用户注册：
    userRegister (params) {
      return new Promise((resolve, reject) => {
        userRegister(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 用户登录;
    userLogin ({ commit }, params) {
      return new Promise((resolve, reject) => {
        userLogin(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default login
