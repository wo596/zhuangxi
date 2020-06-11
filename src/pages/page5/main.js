import Vue from 'vue'
import App from './bianji'
import VConsole from 'vconsole'

Vue.config.productionTip = false

new Vue({
  VConsole,
  render: h => h(App)
}).$mount('#bianji')
