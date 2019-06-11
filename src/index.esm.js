import VuePlugin from "./vue-plugin";

import * as components from "./components.js";
import * as directives from "./directives.js";

export * from "./components.js";
export * from "./directives.js";

export default {
  ...VuePlugin,
  install(Vue, opts) {
    VuePlugin.install(Vue, {
      components,
      directives,
      // plugins,
      ...opts
    });
  }
};
