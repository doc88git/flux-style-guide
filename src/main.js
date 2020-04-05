import Vue from 'vue'
import VuePlugin from './vue-plugin'
import App from './dev/App.vue'
import router from './dev/router'

import '@/assets/f-style-guide.scss'

import * as directives from './directives.js'
import * as plugins from './plugins.js'

Vue.config.productionTip = false

Vue.prototype.$f = {
  linkComponent: 'vue'
}

VuePlugin.install(Vue, {
  ...directives,
  ...plugins
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
