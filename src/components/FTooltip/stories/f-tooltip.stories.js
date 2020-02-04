import { storiesOf } from '@storybook/vue'
import { select, boolean } from '@storybook/addon-knobs'
import { FTooltip } from '../index.js'

storiesOf('Components|Tooltip', module)
  .add('Default', () => ({
    components: { FTooltip },
    data: () => ({}),
    props: {
      position: {
        default: select('position', ['top', 'bottom', 'left', 'right'], 'top')
      },
      click: {
        default: boolean('click', false)
      }
    },
    template: `
      <div style="padding: 40px; width: 100%; text-align: center;">
        <f-tooltip :position="position" label="Button">
          <template v-slot:content>
            tooltip content
          </template>
        </f-tooltip>
      </div>
    `
  }))
  .add('Click', () => ({
    components: { FTooltip },
    data: () => ({}),
    props: {
      position: {
        default: select('position', ['top', 'bottom', 'left', 'right'], 'top')
      }
    },
    template: `
      <div style="padding: 40px; width: 100%; text-align: center;">
        <f-tooltip showEvent="click" hideEvent="blur" :position="position" label="Button">
          <template v-slot:content>
            tooltip content
          </template>
        </f-tooltip>
      </div>
    `
  }))
  .add('All', () => ({
    components: { FTooltip },
    data: () => ({
      name: false
    }),
    props: {
      position: {
        default: select('position', ['top', 'bottom', 'left', 'right'], 'top')
      }
    },
    template: `
      <div style="padding: 40px; width: 100%; text-align: center;">
        <f-tooltip position="top" aligned="center" label="top" bgColor="primary">
          Menu
          <template v-slot:content>
            tooltip on top
          </template>
        </f-tooltip>
        <f-tooltip position="left" aligned="aligned" label="left" bgColor="primary">
        <template v-slot:content>
        tooltip on left
        </template>
        </f-tooltip>
        <f-tooltip position="bottom" aligned="center" label="bottom" bgColor="primary">
          <template v-slot:content>
            tooltip on bottom
          </template>
        </f-tooltip>
        <f-tooltip position="right" aligned="aligned" label="right" bgColor="primary">
          <template v-slot:content>
            tooltip on right
          </template>
        </f-tooltip>
      </div>
    `
  }))
