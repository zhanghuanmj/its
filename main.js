import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './src/Login.vue'

import ItsButton from 'its-button'
import ItsInput from 'its-input'

Vue.use(ElementUI)
Vue.use(ItsButton)
Vue.use(ItsInput)

new Vue({
    el: "#app",
    render: h => h(Login)
})

