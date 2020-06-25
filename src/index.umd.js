import { version } from '../package.json'

import * as components from './components.js'
import * as directives from './directives.js'
import * as plugins from './plugins.js'
import * as utils from './utils.js'

export default {
  version,
  components,
  directives,
  plugins,
  utils,
  ...components,
  ...directives,
  ...plugins,
  ...utils
}
