export default {
  name: 'click-outside',

  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
