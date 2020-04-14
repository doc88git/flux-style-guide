import debounce from '../utils/debounce.js'
import { height, offset } from '../utils/dom.js'
import { getScrollTarget } from '../utils/scroll.js'
import { listenOpts } from '../utils/event.js'

function updateBinding(el, { value, oldValue }) {
  const ctx = el.__fscrollfire

  if (typeof value !== 'function') {
    ctx.scrollTarget.removeEventListener('scroll', ctx.scroll)
    console.error('v-scroll-fire requires a function as parameter', el)
    return
  }

  ctx.handler = value
  if (typeof oldValue !== 'function') {
    ctx.scrollTarget.addEventListener('scroll', ctx.scroll, listenOpts.passive)
    ctx.scroll()
  }
}

export default {
  name: 'scroll-fire',

  bind(el) {
    let ctx = {
      scroll: debounce(() => {
        let containerBottom, elBottom

        if (ctx.scrollTarget === window) {
          elBottom = el.getBoundingClientRect().bottom
          containerBottom = window.innerHeight
        } else {
          elBottom = offset(el).top + height(el)
          containerBottom =
            offset(ctx.scrollTarget).top + height(ctx.scrollTarget)
        }

        if (elBottom > 0 && elBottom < containerBottom) {
          ctx.scrollTarget.removeEventListener(
            'scroll',
            ctx.scroll,
            listenOpts.passive
          )
          ctx.handler(el)
        }
      }, 25)
    }

    if (el.__fscrollfire) {
      el.__fscrollfire_old = el.__fscrollfire
    }

    el.__fscrollfire = ctx
  },

  inserted(el, binding) {
    let ctx = el.__fscrollfire
    ctx.scrollTarget = getScrollTarget(el)
    updateBinding(el, binding)
  },

  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      updateBinding(el, binding)
    }
  },

  unbind(el) {
    let ctx = el.__fscrollfire_old || el.__fscrollfire
    if (ctx !== void 0) {
      ctx.scrollTarget.removeEventListener(
        'scroll',
        ctx.scroll,
        listenOpts.passive
      )
      delete el[el.__fscrollfire_old ? '__fscrollfire_old' : '__fscrollfire']
    }
  }
}
