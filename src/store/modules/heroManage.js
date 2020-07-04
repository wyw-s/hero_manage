import { getHeroList } from '@/api/heroManage/index.js'
const heroManage = {
  actions: {
    getHeroList () {
      return new Promise((resolve, reject) => {
        getHeroList().then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default heroManage
