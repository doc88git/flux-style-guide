import Vue from 'vue'
import App from './App.vue'
import VuePlugin from './vue-plugin'

import '@/assets/f-style-guide.scss'

import * as directives from './directives.js'
import * as plugins from './plugins.js'

Vue.config.productionTip = false

Vue.prototype.$f = {
  linkComponent: 'vue' // nuxt
}

VuePlugin.install(Vue, {
  ...directives,
  ...plugins
})

new Vue({
  render: h => h(App)
}).$mount('#app')
