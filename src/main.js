import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 移动端配置
import 'lib-flexible/flexible'
import './plugins/vant.js'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
