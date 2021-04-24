import Vue from 'vue'
import moment from 'moment'
import 'moment-timezone'

window.moment = moment
Vue.set(Vue.prototype, 'moment', moment)

moment.updateLocale('ru', {
  week: {
    dow: 1
  }
})

Vue.filter('defDate', (value) => {
  return value ? moment(value).format(process.env.VUE_APPDATETIME_FORMAT) : '-'
})

Vue.filter('defTime', (value) => {
  return value
    ? moment(value, process.env.VUE_APPDEFAULT_TIME_FORMAT).format(
      process.env.VUE_APPTIME_FORMAT
    )
    : '-'
})

Vue.filter('defDateWithoutTime', (value) => {
  return value ? moment(value).format(process.env.VUE_APPDATE_FORMAT) : '-'
})

Vue.filter('agoDate', (value) => {
  return value ? moment(value).fromNow() : '-'
})