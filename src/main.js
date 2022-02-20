import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import initialize from '@/utils/initialize'

import router from './router'

import store from './store/store'

Vue.config.productionTip = false
initialize.init(router, store)

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
