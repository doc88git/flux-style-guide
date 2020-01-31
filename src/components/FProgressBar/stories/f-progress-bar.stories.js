import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import { FProgressBar } from '@/components/FProgressBar'

storiesOf('Components|Progress Bar', module).add(
  'Progress Bar',
  () => ({
    components: { FProgressBar },
    data: () => ({
      text: text('Text', 'Flux Services')
    }),
    methods: {},
    props: {},
    template: `
        <div style="padding: 20px;">
          <f-progress-bar :text="text">
            <template v-slot:before>before</template>
            <template v-slot:after>after</template>
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
