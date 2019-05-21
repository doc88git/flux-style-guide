import Vue from 'vue';
import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withInfo)
addDecorator(withKnobs)

function loadStories() {
  const req = require.context('../src/components', true, /.*stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);