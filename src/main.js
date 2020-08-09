import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/normalize.css'
import './assets/style/reset.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import {
  tooltip,
  setLocalStorage,
  getLocalStorage,
  rmLocalStorage
} from '@/utils/globalMethods'

Vue.config.productionTip = false

// 注册全局方法；
Vue.prototype.$tooltip = tooltip
Vue.prototype.$setLocalStorage = setLocalStorage
Vue.prototype.$getLocalStorage = getLocalStorage
Vue.prototype.$rmLocalStorage = rmLocalStorage

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
