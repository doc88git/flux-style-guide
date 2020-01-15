import { storiesOf } from '@storybook/vue'
import { select, boolean } from '@storybook/addon-knobs'
import { FPopover } from '../index.js'

storiesOf('Components|Popover', module)
  .add('Default', () => ({
    components: { FPopover },
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
        <f-popover :position="position" :click="click" label="Button">
          <template v-slot:content>
            tooltip content
          </template>
        </f-popover>
      </div>
    `
  }))
  .add('Click', () => ({
    components: { FPopover },
    data: () => ({}),
    props: {
      position: {
        default: select('position', ['top', 'bottom', 'left', 'right'], 'top')
      }
    },
    template: `
      <div style="padding: 40px; width: 100%; text-align: center;">
        <f-popover click :position="position" label="Button">
          <template v-slot:content>
            tooltip content
          </template>
        </f-popover>
      </div>
    `
  }))
  .add('All', () => ({
    components: { FPopover },
    data: () => ({}),
    props: {
      position: {
        default: select('position', ['top', 'bottom', 'left', 'right'], 'top')
      }
    },
    template: `
      <div style="padding: 40px; width: 100%; text-align: center;">
        <f-popover position="top" label="top">
          <template v-slot:content>
            tooltip on top
          </template>
        </f-popover>
        <f-popover position="bottom" label="bottom">
          <template v-slot:content>
            tooltip on bottom
          </template>
        </f-popover>
        <f-popover position="left" label="left">
          <template v-slot:content>
            tooltip on left
          </template>
        </f-popover>
        <f-popover position="right" label="right">
          <template v-slot:content>
            tooltip on right
          </template>
        </f-popover>
      </div>
    `
  }))
