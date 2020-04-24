import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faInstagram, faArrowLeft, faExternalLinkAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
