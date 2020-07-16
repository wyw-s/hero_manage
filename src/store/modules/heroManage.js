/**
 * 英雄管理
 */
import {
  getHeroList,
  postAddHero,
  postDeleteHero
} from '@/api/heroManage/index.js'
const heroManage = {
  actions: {
    // 获取英雄列表
    getHeroList () {
      return new Promise((resolve, reject) => {
        getHeroList().then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 新增英雄
    postAddHero ({ commit }, params) {
      return new Promise((resolve, reject) => {
        postAddHero(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 删除英雄；
    postDeleteHero ({ commit }, params) {
      return new Promise((resolve, reject) => {
        postDeleteHero(params).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default heroManage
