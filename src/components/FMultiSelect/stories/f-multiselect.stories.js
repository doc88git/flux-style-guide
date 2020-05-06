import { storiesOf } from '@storybook/vue'
import FMultiSelect from '../index.vue'
import optionsMock from './mock.js'

storiesOf('Form|MultiSelect', module)
  .add('Type: Checkbox', () => ({
    components: { FMultiSelect },
    data: () => ({ value: [], options: optionsMock }),
    props: {},
    template: `
      <div style="padding: 30px; max-width: 400px; height: 100vh; margin: 0 auto;">
        <f-multi-select
          v-model="value"
          :options="options"
          label="Coisas"
          type="check"
          multiple
        />
      </div>
    `
  }))
  .add('Type: Photo', () => ({
    components: { FMultiSelect },
    data: () => ({ value: [], options: optionsMock }),
    props: {},
    template: `
        <div style="padding: 30px; max-width: 400px; height: 100vh; margin: 0 auto;">
          <f-multi-select
            v-model="value"
            :options="options"
            label="Coisas"
            type="photo"
            multiple
          />
        </div>
      `
  }))
  .add('Simple', () => ({
    components: { FMultiSelect },
    data: () => ({ value: [], options: optionsMock }),
    props: {},
    template: `
        <div style="padding: 30px; max-width: 400px; height: 100vh; margin: 0 auto;">
          <f-multi-select
            v-model="value"
            :options="options"
            :multiple="false"
            label="Coisas"
          />
        </div>
      `
  }))
