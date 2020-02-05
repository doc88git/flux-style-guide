import { storiesOf } from '@storybook/vue'
import { select, number, text } from '@storybook/addon-knobs'
import { FProgressBar } from '@/components/FProgressBar'

storiesOf('Components|Progress Bar', module).add(
  'Progress Bar',
  () => ({
    components: { FProgressBar },
    data: () => ({
      value: number('value', 3)
    }),
    mounted() {
      setTimeout(() => {
        this.value = 85
      }, 1000)
    },
    props: {
      theme: {
        default: select('theme', ['tooltip', 'side', 'text'], 'tooltip')
      },
      color: {
        default: text('color', 'primary')
      },
      bgColor: {
        default: text('color', 'gray-300')
      }
    },
    methods: {},
    template: `
        <div style="padding: 60px; width: 400px; height: 5px;">
          <f-progress-bar :value="value" :color="color" :bgColor="color" :theme="theme" style="height: 5px;">
          </f-progress-bar>
        </div>
      `
  }),
  {
    info: {
      summary: `
          # Progress Bar
        `
    }
  }
)
