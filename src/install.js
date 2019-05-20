export default function(Vue, opts = {}) {
  if (this.__installed) {
    return;
  }
  this.__installed = true;

  // const cfg = opts.config || {}

  opts.components &&
    Object.keys(opts.components).forEach(key => {
      const c = opts.components[key];
      if (typeof c === "function") {
        Vue.component(c.options.name, c);
      }
    });
}
