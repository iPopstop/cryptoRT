/* eslint-disable import/first */
import Vue from 'vue'
import App from './App'
import axios from 'axios'

import './utils/plugins'
import router from './router'
import './assets/styles/app.scss'

Vue.config.productionTip = false

const app = new Vue({
    router,
    render: (h) => h(App)
})

app.$mount('#app')
