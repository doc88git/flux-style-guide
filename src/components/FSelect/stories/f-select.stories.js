import { storiesOf } from '@storybook/vue'
import { select, array } from '@storybook/addon-knobs'
import FSelect from '../FSelect.vue'

const arr = ['Powerview', 'Simplifica', 'Flux', 'Petz', 'Castlight']

const typeList = {
  fill: 'fill',
  outlined: 'outlined',
  input: 'input'
}

const groupId = 'FSelect-ID1'

storiesOf('Form|Select', module)
  .add('Default', () => ({
    components: { FSelect },
    data: () => ({
      value: null
    }),
    props: {
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v })),
          groupId
        )
      },
      type: {
        default: select('type', typeList, 'input', groupId)
      }
    },
    template: `
    <div style="padding: 20px;">
      <f-select
        :search="false"
        :options="options"
        :type="type"
        v-model="value" />
    </div>
  `
  }))
  .add('Search', () => ({
    components: { FSelect },
    data: () => ({
      value: 1
    }),
    props: {
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v })),
          groupId
        )
      },
      type: {
        default: select('type', typeList, 'default', groupId)
      }
    },
    template: `
    <div style="padding: 20px;">
      <f-select
        :options="options"
        :type="type"
        :search="true"
        v-model="value" />
    </div>
  `
  }))
  .add('SearchRequest', () => ({
    components: { FSelect },
    data: () => ({
      value: 1
    }),
    props: {
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v })),
          groupId
        )
      },
      type: {
        default: select('type', typeList, 'default', groupId)
      }
    },
    methods: {
      searchValue(value) {
        console.log({ emited: value })
      }
    },
    template: `
    <div style="padding: 20px;">
      <f-select
        :options="options"
        :type="type"
        :search="true"
        @search-value="searchValue"
        v-model="value" />
    </div>
  `
  }))
  .add('Multiple', () => ({
    components: { FSelect },
    data: () => ({
      value: 1
    }),
    props: {
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v })),
          groupId
        )
      },
      type: {
        default: select('type', typeList, 'default', groupId)
      }
    },
    template: `
    <div style="padding: 20px;">
      <f-select
        :multiple="true"
        :options="options"
        :type="type"
        :close-on-click="false"
        v-model="value" />
    </div>
  `
  }))
