import { configure, addDecorator } from '@storybook/vue';
import { withInfo, setDefaults } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs';

import vueConfig from "../vue-storybook"

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(() => ({
  template: '<story/>',
  i18n: vueConfig.i18n,
}));

setDefaults({
  header: false
})

function loadStories() {
  const req = require.context('../src/components', true, /.*stories.js$/);

  // Welcome|About Page
  const wecomePare = require('../src/stories/f-welcome.stories.js')

  req.keys().forEach(filename => req(filename));

  return [wecomePare, req]
}

configure(loadStories, module);
