import { storiesOf } from "@storybook/vue";
import { text, boolean } from "@storybook/addon-knobs";

import FDatepicker from '../FDatepicker.vue';

storiesOf('Components|Datepicker', module)
  .add('Default', () => ({
    components: {
      FDatepicker
    },
    data: () => ({

    }),
    props: {},
    methods: {},
    template: `
      <div>
        <f-datepicker></f-datepicker>
      </div>
    `
  }))