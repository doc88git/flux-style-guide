import { storiesOf } from '@storybook/vue'
import { select, boolean, text } from '@storybook/addon-knobs'
import FBadge from '../FBadge.vue'

const groupId = 'FBADGE-ID1'

storiesOf('Components|Badge', module).add('Default', () => ({
  components: { FBadge },
  data: () => ({
    value: 2
  }),
  props: {
    color: {
      default: text('color', 'primary', groupId)
    },
    textColor: {
      default: text('textColor', 'white', groupId)
    },
    floating: {
      default: boolean('floating', false, groupId)
    },
    transparent: {
      default: boolean('transparent', false, groupId)
    },
    multiLine: {
      default: boolean('multiLine', false, groupId)
    },

    label: {
      default: text('label', 'v1.0.0-beta.2', groupId)
    },
    align: {
      default: select('align', ['top', 'middle', 'bottom'], 'top', groupId)
    }
  },
  template: `
    <div >
      <div style="font-size: var(--text-6xl);">Application
        <f-badge
          :color="color"
          :textColor="textColor"
          :floating="floating"
          :transparent="transparent"
          :multiLine="multiLine"
          :label="label"
          :align="align" />
      </div>
    </div>
  `
}))
