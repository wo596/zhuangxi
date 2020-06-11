import Vue from 'vue'
import App from './user'
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#user')
