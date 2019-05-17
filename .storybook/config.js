import Vue from 'vue';
import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info'
import components from '@/components'

components.map((item) => {
  Vue.component(item.name, item);
})

addDecorator(withInfo)

function loadStories() {
  const req = require.context('../stories', true, /\.*\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);