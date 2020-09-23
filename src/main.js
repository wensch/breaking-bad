import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faAngleLeft, faAngleRight, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSearch, faAngleLeft, faAngleRight, faAngleDoubleRight, faAngleDoubleLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Stylus
import './assets/stylus/app.styl'

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
