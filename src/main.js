import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false

let vm = new Vue({
  el: '#root',
  render: h=>h(App)
})
