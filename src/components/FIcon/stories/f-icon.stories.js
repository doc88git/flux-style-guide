import { storiesOf } from '@storybook/vue'
import { select, text, boolean } from '@storybook/addon-knobs'

import FIcon from '../FIcon.vue'
import FIconOld from '../FIconOld.vue'
import FIconMaterial from '../components/FIconMaterial.vue'

const label = 'Icon Type'
const groupId = 'ICON-OPTIONS-ID1'

storiesOf('Components|Icon', module)
  .add(
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
  .add(
    'Icon Old',
    () => ({
      components: { FIconOld },
      props: {
        name: {
          default: text('name', 'download', groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <FIconOld :name="name" />
      </div>
    `
    }),
    {
      info: {
        summary: `FIcon Old - Flux Icon`
      }
    }
  )
// .add(
//   'Icon Material',
//   () => ({
//     components: { FIconMaterial },
//     props: {
//       name: {
//         default: text('name', 'download', groupId)
//       }
//     },
//     template: `
//     <div style="padding: 20px;">
//       <FIconMaterial :name="name" />
//     </div>
//   `
//   }),
//   {
//     info: {
//       summary: `FIcon Material - Flux Icon`
//     }
//   }
// )
