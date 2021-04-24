import Vue from 'vue'
import _map from 'lodash/map'
import store from '@/store'

Vue.prototype.$cfg = store.getters['config/getConfig']
window.$cfg = store.getters['config/getConfig']
Object.defineProperty(Vue.prototype, '_map', { value: _map })
