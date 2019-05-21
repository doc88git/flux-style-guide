import VuePlugin from "./vue-plugin";

import * as components from "./components.js";

export * from "./components.js";

export default {
  ...VuePlugin,
  install(Vue, opts) {
    VuePlugin.install(Vue, {
      components,
      // directives,
      // plugins,
      ...opts
    });
  }
};
