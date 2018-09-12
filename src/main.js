import Vue from 'vue'
import { Card, Button } from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue'

// Vue.use(iView)

Vue.component('Card', Card)
Vue.component('Button', Button)

new Vue({
  el: '#app',
  render: h => h(App)
})
