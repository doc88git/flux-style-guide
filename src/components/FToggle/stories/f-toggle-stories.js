import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import { FToggle } from '@/components/FToggle'

storiesOf('Components|Toggle', module).add(
  'Toggle',
  () => ({
    components: {
      FToggle
    },
    data: () => ({
      isToggled: boolean('toggled', false),
      status: text('Text')
    }),
    methods: {},
    props: {},
    template: `
        <div style="padding: 20px;">
          <f-toggle v-model="isToggled" />
        </div>
      `
  }),
  {
    info: {
      summary: `
          # Toggle
        `
    }
  }
)
