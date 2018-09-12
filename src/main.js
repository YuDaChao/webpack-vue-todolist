import Vue from 'vue'
import { Card, Icon, Checkbox } from 'iview';
import 'iview/dist/styles/iview.css';

import '../static/css/reset.css'

import App from './App.vue'

// Vue.use(iView)

Vue.component('Card', Card)
Vue.component('Icon', Icon)
Vue.component('Checkbox', Checkbox)

new Vue({
  el: '#app',
  render: h => h(App)
})
