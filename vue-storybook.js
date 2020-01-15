import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'
import VuePlugin from '@/vue-plugin'
import messages from '@/locales'

import '@/assets/f-style-guide.scss'

import * as directives from '@/directives.js'
import * as plugins from '@/plugins.js'

VuePlugin.install(Vue, {
  directives,
  plugins
})

Vue.use(VeeValidate)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  messages
})

export default { Vue, i18n }
