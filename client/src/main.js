import Vue from 'vue'
import App from './App.vue'
import VueQrcodeReader from "vue-qrcode-reader";    // NOTE: This line is very important!
import router from './router'
import wb from "./registerServiceWorker";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.prototype.$workbox = wb;
Vue.config.productionTip = false
Vue.use(VueQrcodeReader);                           // NOTE: This line is very important!
Vue.use(Loading, {
  color: 'green'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
