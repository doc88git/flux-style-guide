import Vue from 'vue';
import VeeValidate from "vee-validate";
import { configure, addDecorator } from '@storybook/vue';
import { withInfo, setDefaults } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs';

Vue.use(VeeValidate);

import '@/assets/f-style-guide.scss'

addDecorator(withInfo)
addDecorator(withKnobs)

setDefaults({
  header: false
})

function loadStories() {
  const req = require.context('../src/components', true, /.*stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);