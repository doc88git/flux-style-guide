import { storiesOf } from '@storybook/vue'
import { select, text, boolean } from '@storybook/addon-knobs'

import FIcon from '../FIcon.vue'

const label = 'Icon Type'
const groupId = 'ICON-OPTIONS-ID1'

storiesOf('Components|Icon', module).add(
  'Icon',
  () => ({
    components: { FIcon },
    props: {
      name: {
        default: text('name', 'download', groupId)
      },
      size: {
        default: select(label, [16, 24], 16, groupId)
      },
      clickable: {
        default: boolean('clickable', true, groupId)
      }
    },
    template: `
      <div style="padding: 20px;">
        <FIcon :name="name" :clickable="clickable" :size="size" />
      </div>
    `
  }),
  {
    info: {
      summary: `FIcon Base - Flux Icon`
    }
  }
)
