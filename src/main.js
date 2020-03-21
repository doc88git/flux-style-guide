import Vue from 'vue'
import App from './App.vue'
import VuePlugin from './vue-plugin'
import vClickOutside from 'v-click-outside'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(vClickOutside)

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
