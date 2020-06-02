import { storiesOf } from '@storybook/vue'
import FSelect from '../FSelect.vue'
import optionsMock from './mock.js'

storiesOf('Form|MultiSelect', module)
  .add('Type: Checkbox', () => ({
    components: { FSelect },
    data: () => ({ value: [], options: optionsMock }),
    props: {},
    template: `
      <div style="padding: 30px; max-width: 400px; height: 100vh; margin: 0 auto;">
        <f-select
          v-model="value"
          :options="options"
          label="Coisas"
          type="check"
          multiple
        />
      </div>
    `
  }))
  .add('Searchable', () => ({
    components: { FSelect },
    data: () => ({ value: [], options: optionsMock }),
    props: {},
    template: `
      <div style="padding: 30px; max-width: 400px; height: 100vh; margin: 0 auto;">
        <f-select
          v-model="value"
          :options="options"
          label="Coisas"
          type="check"
          multiple
          searchable
          select-all
        />
      </div>
    `
  }))
  .add('Type: Photo', () => ({
    components: { FSelect },
    data: () => ({ value: [], options: optionsMock }),
    props: {},
    template: `
        <div style="padding: 30px; max-width: 400px; height: 100vh; margin: 0 auto;">
          <f-select
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
    components: { FSelect },
    data: () => ({ value: [], options: optionsMock }),
    props: {},
    template: `
        <div style="padding: 30px; max-width: 400px; height: 100vh; margin: 0 auto;">
          <f-select
            v-model="value"
            :options="options"
            :multiple="false"
            label="Coisas"
          />
        </div>
      `
  }))
