import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'
import heroManage from './modules/heroManage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    layout,
    heroManage
  }
})
