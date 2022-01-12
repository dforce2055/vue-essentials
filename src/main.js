import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/Bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
