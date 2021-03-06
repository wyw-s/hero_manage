import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/normalize.css'
import './assets/style/reset.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import { tooltip } from '@/utils/globalMethods'

Vue.config.productionTip = false

Vue.prototype.$tooltip = tooltip
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
