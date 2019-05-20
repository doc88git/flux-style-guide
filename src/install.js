import { version } from "../package.json";

export const $f = {
  version
};

export default function(Vue, opts = {}) {
  if (this.__installed) return;
  this.__installed = true;

  // const cfg = opts.config || {}

  Vue.prototype.$f = $f;

  opts.components &&
    Object.keys(opts.components).forEach(key => {
      const c = opts.components[key];
      console.log({ key, c });
      if (typeof c === "function") {
        Vue.component(c.options.name, c);
      }
    });
}
