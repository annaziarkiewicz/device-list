import Vue from 'vue'
import App from './pages/index.vue'
import vuetify from './plugins/vuetify'
import store from './store/store'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
