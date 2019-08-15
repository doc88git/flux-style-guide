import { storiesOf } from '@storybook/vue';
import { text } from "@storybook/addon-knobs";
import FDisplay from '../FDisplay.vue';

storiesOf("Components|Display", module)
  .add('default', () => ({
    template: '<h4>rounded</h4>'
}));