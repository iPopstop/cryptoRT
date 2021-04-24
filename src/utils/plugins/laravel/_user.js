import Vue from 'vue'
import store from '@/store'

Vue.prototype.auth = store.getters['config/getAuthUser']
Vue.prototype.isAuth = store.getters['config/getAuthStatus']
window.$auth = store.getters['config/getAuthUser']
window.$isAuth = store.getters['config/getAuthStatus']
