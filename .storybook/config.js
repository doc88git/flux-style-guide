import { configure, addDecorator } from '@storybook/vue';
import { withInfo, setDefaults } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs';

import Vue from 'vue';
import VeeValidate from "vee-validate";
import VueI18n from 'vue-i18n'
import messages from '../src/locales'

import '@/assets/f-style-guide.scss'

Vue.use(VeeValidate);
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  messages
})

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(() => ({
  template: '<story/>',
  i18n,
}));

setDefaults({
  header: false
})

function loadStories() {
  const req = require.context('../src/components', true, /.*stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);