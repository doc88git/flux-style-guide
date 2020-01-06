import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import FIcon from '../FIcon.vue'

const label = 'Icon Type'
const defaultValue = 'default'
const options = {
  Outlined: 'outlined',
  Sharp: 'sharp',
  'Two Tone': 'twoTone',
  Round: 'round',
  Default: 'default'
}
const groupId = 'ICON-OPTIONS-ID1'

storiesOf('Components|Icon', module).add(
  'Icon',
  () => ({
    components: { FIcon },
    props: {
      name: {
        default: text('name', 'extension', groupId)
      },
      type: {
        default: select(label, options, defaultValue, groupId)
      },
      lib: {
        default: select('Lib', { Material: 'material' }, 'material', groupId)
      }
    },
    template: `
      <div class="p-8">
        <f-icon :name="name" :type="type" :lib="lib" />
      </div>
    `
  }),
  {
    info: {
      summary: `
          ## Types
          - outlined
          - sharp
          - twoTone
          - round
          - default

          ## Lib
          - [Material Icons](https://material.io/tools/icons/?style=baseline)
        `
    }
  }
)
