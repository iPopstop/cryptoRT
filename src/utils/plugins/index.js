import './_loader'
import './_isEmpty'
import './_toastr'
import './forms/_select'

if (process.env.VUE_APP_LOCALE_TYPE === 'json') {
  require('./language/localesLanguage')
} else if (process.env.VUE_APP_LOCALE_TYPE === 'api') {
  require('./language/apiLanguage')
}