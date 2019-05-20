import Flux from "./install";

import * as components from "./components.js";
export * from "./components.js";

export default {
  install(Vue, opts) {
    Flux.install(Vue, {
      components,
      // directives,
      // plugins,
      ...opts
    });
  }
};
