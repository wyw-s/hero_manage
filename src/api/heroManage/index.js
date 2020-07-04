/**
 * 英雄管理
 */
import resquest from '../axios.js'

// 获取英雄列表
export function getHeroList () {
  return resquest({
    url: '/getlist',
    methods: 'GET'
  })
}
