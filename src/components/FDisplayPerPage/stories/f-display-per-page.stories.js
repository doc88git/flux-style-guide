import { storiesOf } from '@storybook/vue'
import FDisplayPerPage from '../FDisplayPerPage.vue'

const options = [
  { label: 10, value: 10, selected: true },
  { label: 25, value: 20, selected: false },
  { label: 50, value: 30, selected: false }
]

storiesOf('Components|DisplayPerPage', module).add('Default', () => ({
  components: { FDisplayPerPage },

  data: () => ({ selected: 10 }),

  computed: {
    options() {
      return options.map(opt => ({
        ...opt,
        selected: opt.value === this.selected
      }))
    }
  },

  methods: {
    handleChange({ value }) {
      this.selected = value
    }
  },

  template: `
        <div>
          <f-display-per-page
            :options="options"
            :change="handleChange"
            :value="currentOpt"
            theme="secondary"
          />
        </div>
      `
}))
