import { version } from "../package.json";

export const $f = {
  version,
  linkComponent: "nuxt"
};

export default function(Vue, opts = {}) {
  if (this.__installed) return;
  this.__installed = true;

  const cfg = opts.config || {};

  Vue.prototype.$f = {
    ...$f,
    ...cfg
  };

  opts.components &&
    Object.keys(opts.components).forEach(key => {
      const c = opts.components[key];
      if (c && c.name) {
        Vue.component(c.name, c);
      }
    });
}
