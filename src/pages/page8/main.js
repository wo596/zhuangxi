import Vue from 'vue'
import App from './xiangqing'
// import VConsole from 'vconsole'
// var vConsole = new VConsole()
// Vue.use(vConsole)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#xiangqing')
