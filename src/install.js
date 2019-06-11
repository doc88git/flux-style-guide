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

  opts.directives &&
    Object.keys(opts.directives).forEach(key => {
      const d = opts.directives[key];
      if (d.name !== undefined && d.unbind !== void 0) {
        Vue.directive(d.name, d);
      }
    });

  if (opts.plugins) {
    const param = { $f, cfg };
    Object.keys(opts.plugins).forEach(key => {
      const p = opts.plugins[key];
      if (typeof p.install === "function") {
        p.install(param);
      }
    });
  }
}
