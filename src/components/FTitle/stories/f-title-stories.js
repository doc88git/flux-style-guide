import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import { FTitle } from '@/components/FTitle'

storiesOf('Components|Title', module).add(
  'Title',
  () => ({
    components: { FTitle },
    data: () => ({
      text: text('Text', 'Flux Services'),
      before: text('before', ''),
      after: text('after', '')
    }),
    methods: {},
    props: {},
    template: `
        <div style="padding: 20px;">
          <f-title :text="text">
            <template v-slot:before>{{before}}</template>
            <template v-slot:after>{{after}}</template>
          </f-title>
        </div>
      `
  }),
  {
    info: {
      summary: `
          # Title
        `
    }
  }
)
