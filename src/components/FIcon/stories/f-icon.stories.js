import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import FIcon from '../FIcon.vue'
import IconBase from '../IconBase.vue'

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

storiesOf('Components|Icon', module)
  .add(
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
      <div style="padding: 20px;">
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
<<<<<<< HEAD
    }
  )
  .add(
    'Base Icon',
    () => ({
      components: { IconBase },
      props: {
        name: {
          default: text('name', 'download', groupId)
        },
        size: {
          default: select(label, [16, 24], 16, groupId)
        },
        clickable: {
          default: text('clickable', 'primary', groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <IconBase :name="name" clickable :size="size" />
      </div>
    `
    }),
    {
      info: {
        summary: `Icon Base - Flux Icon`
      }
    }
  )
=======
    }
  )
  .add('Icon Test', () => ({
    components: { IconBase },
    template: `
      <div style="padding: 20px;">
        <icon-base/>
      </div>
    `
  }))
>>>>>>> 1b9f0b3869dc3f3d216666eff23486de2a22de8b
