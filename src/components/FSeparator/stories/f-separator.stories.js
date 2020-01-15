import { storiesOf } from '@storybook/vue'
import { FSeparator } from '@/components/FSeparator'

storiesOf('Components|Separator', module).add(
  'Default',
  () => ({
    components: { FSeparator },
    template: `
      <div style="width: 600px; padding: 20px;">
        <f-separator />
      </div>`
  }),
  {
    info: {
      summary: `
          # Separator
        `
    }
  }
)
