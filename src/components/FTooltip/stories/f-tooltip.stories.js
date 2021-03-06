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
      size: {
        default: select('size', ['default', 'sm'], 'default')
      },
      click: {
        default: boolean('click', false)
      }
    },
    template: `
      <div style="margin-top: 100px; padding: 100px; width: 100%; text-align: center;">
        <f-tooltip :position="position" label="Button" :size="size">
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
      },
      size: {
        default: select('size', ['default', 'sm'], 'default')
      }
    },
    template: `
      <div style="margin-top: 100px; padding: 100px;  width: 100%; text-align: center;">
        <f-tooltip showEvent="click" hideEvent="blur" :position="position" label="Button" :size="size">
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
      },
      size: {
        default: select('size', ['default', 'sm'], 'default')
      }
    },
    template: `
      <div style="margin-top: 100px; padding: 100px;  width: 100%; text-align: center;">
        <f-tooltip position="top" aligned="aligned" label="top" bgColor="primary" :size="size">
          Menu
          <template v-slot:content>
            tooltip on top
          </template>
        </f-tooltip>
        <f-tooltip position="left" aligned="aligned" label="left" bgColor="primary" :size="size">
        <template v-slot:content>
        tooltip on left
        </template>
        </f-tooltip>
        <f-tooltip position="bottom" aligned="aligned" label="bottom" bgColor="primary" :size="size">
          <template v-slot:content>
            tooltip on bottom
          </template>
        </f-tooltip>
        <f-tooltip position="top" aligned="aligned" label="top" bgColor="primary" :size="size">
          <template v-slot:content>
            tooltip on top
          </template>
        </f-tooltip>
        <f-tooltip position="right" aligned="aligned" label="right" bgColor="primary" :size="size">
          <template v-slot:content>
            tooltip on right
          </template>
        </f-tooltip>
      </div>
    `
  }))
