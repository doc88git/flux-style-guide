import { storiesOf } from '@storybook/vue'
import { number } from '@storybook/addon-knobs'
import { FProgressBar } from '@/components/FProgressBar'

storiesOf('Components|Progress Bar', module).add(
  'Progress Bar',
  () => ({
    components: { FProgressBar },
    data: () => ({
      value: number('value', 10)
    }),
    mounted() {
      // setInterval(() => {
      //   this.value += 5
      // }, 500)
      setTimeout(() => {
        this.value = 85
      }, 1000)
    },
    methods: {},
    props: {},
    template: `
        <div style="padding: 60px; width: 400px;">
          <f-progress-bar :value="value">
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
