import { storiesOf } from '@storybook/vue'
import { select, array } from '@storybook/addon-knobs'
import FSelect from '../FSelect.vue'

const arr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

const typeList = {
  fill: 'fill',
  outlined: 'outlined',
  input: 'input'
}

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
          arr.map((v, i) => ({ value: ++i, label: v }))
        )
      },
      type: {
        default: select('type', typeList, 'input')
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
      value: 1,
      inputSelect: ''
    }),
    props: {
      baseArray: arr,
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v }))
        )
      },
      type: {
        default: select('type', typeList, 'outlined')
      }
    },
    methods: {
      setInputSelect(v) {
        this.inputSelect = v
      }
    },
    template: `
    <div style="padding: 20px;">
      <p>
        Search: {{ inputSelect }}
      </p>
      <f-select
        :options="options"
        :type="type"
        :search="true"
        v-model="value"
        @search-value="setInputSelect" />
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
          arr.map((v, i) => ({ value: ++i, label: v }))
        )
      },
      type: {
        default: select('type', typeList, 'outlined')
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
      value: [1]
    }),
    props: {
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v }))
        )
      },
      type: {
        default: select('type', typeList, 'outlined')
      }
    },
    methods: {
      addOption() {
        let index = this.options.length + 1

        this.options.push({
          value: index,
          label: `New Item ${index}`
        })
      }
    },
    template: `
    <div style="padding: 20px;">
      <button @click="addOption">Add Option</button>

      <p>{{ value }}</p>

      <f-select
        :multiple="true"
        :options="options"
        :type="type"
        :close-on-click="false"
        v-model="value" />
    </div>
  `
  }))
  .add('Label', () => ({
    components: { FSelect },
    data: () => ({
      value: 1
    }),
    props: {
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v }))
        )
      },
      type: {
        default: select('type', typeList, 'outlined')
      }
    },
    template: `
    <div style="padding: 20px;">
      <f-select
        label="Bruxaria"
        gray
        :options="options"
        :type="type"
        :close-on-click="true"
        v-model="value" />
    </div>
  `
  }))
  .add('Clearable', () => ({
    components: { FSelect },
    data: () => ({
      value: null
    }),
    props: {
      options: {
        default: array(
          'options',
          arr.map((v, i) => ({ value: ++i, label: v }))
        )
      },
      type: {
        default: select('type', typeList, 'input')
      }
    },
    template: `
    <div style="padding: 20px;">
      <f-select
        :search="false"
        clearable
        :options="options"
        :type="type"
        v-model="value" />
    </div>
  `
  }))
