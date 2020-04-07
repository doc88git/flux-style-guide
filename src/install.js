import { version } from '../package.json'
import Platform, { isSSR } from './plugins/Platform.js'
import Screen from './plugins/Screen.js'

export const queues = {
  server: [], // on SSR update
  takeover: [] // on client takeover
}

export const $f = {
  version,
  linkComponent: 'vue',
  config: {}
}

export default function(Vue, opts = {}) {
  if (this.__installed) return
  this.__installed = true

  const cfg = opts.config || {}

  Vue.prototype.$f = {
    ...$f,
    ...cfg
  }

  if (isSSR === true) {
    Vue.mixin({
      beforeCreate() {
        this.$f = this.$root.$options.$f
      }
    })
  } else {
    // required plugins
    Platform.install($f, queues)
    Screen.install($f, queues)
    Vue.prototype.$f = $f
  }

  opts.components &&
    Object.keys(opts.components).forEach(key => {
      const c = opts.components[key]
      if (c && c.name) {
        Vue.component(c.name, c)
      }
    })

  opts.directives &&
    Object.keys(opts.directives).forEach(key => {
      const d = opts.directives[key]
      if (d.name !== undefined && d.unbind !== void 0) {
        Vue.directive(d.name, d)
      }
    })

  if (opts.plugins) {
    const param = { Vue, $f, queues, cfg }
    Object.keys(opts.plugins).forEach(key => {
      const p = opts.plugins[key]
      if (typeof p.install === 'function' && p !== Platform && p !== Screen) {
        p.install(param)
      }
    })
  }
}
