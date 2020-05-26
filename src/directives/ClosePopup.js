export default {
  name: 'close-popup',

  bind(el, { value }, vnode) {
    const ctx = {
      enabled: value !== false,

      handler(evt) {
        // allow @click to be emitted
        ctx.enabled !== false &&
          setTimeout(() => {
            const vm = (vnode.componentInstance || vnode.context).$root
            vm.__fClosePopup !== void 0 && vm.__fClosePopup(evt)
          })
      },

      handlerKey(evt) {
        evt.keyCode === 13 && ctx.handler(evt)
      }
    }

    if (el.__fclosepopup !== void 0) {
      el.__fclosepopup_old = el.__fclosepopup
    }

    el.__fclosepopup = ctx
    el.addEventListener('click', ctx.handler)
    el.addEventListener('keyup', ctx.handlerKey)
  },

  update(el, { value }) {
    if (el.__fclosepopup !== void 0) {
      el.__fclosepopup.enabled = value !== false
    }
  },

  unbind(el) {
    const ctx = el.__fclosepopup_old || el.__fclosepopup
    if (ctx !== void 0) {
      el.removeEventListener('click', ctx.handler)
      el.removeEventListener('keyup', ctx.handlerKey)
      delete el[el.__fclosepopup_old ? '__fclosepopup_old' : '__fclosepopup']
    }
  }
}
