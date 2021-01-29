import Vue from 'vue'
import App from './App.vue'
import VueQrcodeReader from "vue-qrcode-reader";    // NOTE: This line is very important!
import router from './router'

Vue.config.productionTip = false
Vue.use(VueQrcodeReader);                           // NOTE: This line is very important!

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
