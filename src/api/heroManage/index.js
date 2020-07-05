/**
 * 英雄管理
 */
import resquest from '../axios.js'

// 获取英雄列表
export function getHeroList () {
  return resquest({
    url: '/hero/getlist',
    method: 'GET'
  })
}

// 新增英雄
export function postAddHero (data) {
  return resquest({
    url: '/hero/add',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
