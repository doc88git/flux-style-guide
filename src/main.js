import Vue from 'vue'
import App from './dev/components/App.vue'
import router from './dev/router'
import FluxStyleGuide from './index.esm'

import '@/assets/f-style-guide.scss'

Vue.use(FluxStyleGuide)

const r = router(Vue)

new Vue({
  render: h => h(App),
  router: r
}).$mount('#app')
