import Vue from 'vue'
import {
  Card,
  Icon,
  Checkbox,
  Button,
  Form,
  FormItem,
  Input,
  Modal,
  Message
} from 'iview';
import 'iview/dist/styles/iview.css';
import '../static/theme/theme.less'

import store from './store'

import '../static/css/reset.css'

import App from './App.vue'


// Vue.use(iView)

Vue.component('Card', Card)
Vue.component('Icon', Icon)
Vue.component('Checkbox', Checkbox)
Vue.component('Button', Button)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Input', Input)
Vue.component('Modal', Modal)
Vue.component('Message', Message)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
