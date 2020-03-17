import { storiesOf } from '@storybook/vue'
import { select, text, boolean } from '@storybook/addon-knobs'

import FIcon from '../FIcon.vue'

const label = 'Icon Type'
const groupId = 'ICON-OPTIONS-ID1'

storiesOf('Components|Icon', module)
  .add(
    'Icon Material',
    () => ({
      components: { FIcon },
      props: {
        lib: {
          default: text('lib', 'material', groupId)
        },
        name: {
          default: text('name', 'star', groupId)
        },
        color: {
          default: text('color', 'red', groupId)
        },
        clickable: {
          default: boolean('clickable', true, groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <FIcon :lib="lib" :color="color" :name="name" clickable />
      </div>
    `
    }),
    {
      info: {
        summary: `FIcon Base - Flux Icon`
      }
    }
  )
  .add(
    'Icon Flux',
    () => ({
      components: { FIcon },
      props: {
        lib: {
          default: text('lib', 'flux', groupId)
        },
        name: {
          default: text('name', 'star', groupId)
        },
        color: {
          default: text('color', 'red', groupId)
        },
        size: {
          default: select(label, ['xs', 'sm', 'base', 'lg'], 'base', groupId)
        },
        clickable: {
          default: boolean('clickable', true, groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <FIcon :lib="lib" :color="color" :name="name" :size="size" clickable />
      </div>
    `
    }),
    {
      info: {
        summary: `FIcon Base - Flux Icon`
      }
    }
  )
