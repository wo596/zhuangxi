import Vue from 'vue'
import App from './index.vue'
// import VConsole from 'vconsole'
import VueLazyLoad from 'vue-lazyload'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer)
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: 'data-source'
  }
})
Vue.use(VueLazyLoad)
// var vConsole = new VConsole()
// Vue.use(vConsole)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#index')
