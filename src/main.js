import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let vm = new Vue({
  el: '#root',
  render: h=>h(App)
})
