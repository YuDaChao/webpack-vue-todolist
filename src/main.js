import Vue from 'vue'
import { Card, Icon, Checkbox, Button } from 'iview';
import 'iview/dist/styles/iview.css';
import '../static/theme/theme.less'

import '../static/css/reset.css'

import App from './App.vue'

// Vue.use(iView)

Vue.component('Card', Card)
Vue.component('Icon', Icon)
Vue.component('Checkbox', Checkbox)
Vue.component('Button', Button)

new Vue({
  el: '#app',
  render: h => h(App)
})
