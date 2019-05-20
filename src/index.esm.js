import install from "./install";

import * as components from "./components.js";
export * from "./components.js";

export default {
  install(Vue, opts) {
    install.install(Vue, {
      components,
      // directives,
      // plugins,
      ...opts
    });
  }
};
