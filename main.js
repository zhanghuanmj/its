import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './src/Login.vue'

import ItsButton from './packages/button'
import ItsInput from './packages/input'

Vue.use(ElementUI)
Vue.use(ItsButton)
Vue.use(ItsInput)

new Vue({
    el: "#app",
    render: h => h(Login)
})

