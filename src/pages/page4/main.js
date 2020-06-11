import Vue from 'vue'
import App from './quanzi'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#quanzi')
