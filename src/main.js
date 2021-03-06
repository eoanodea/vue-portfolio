import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default-dark.css'

import './scss/theme.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
