import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'
import { FWidget } from '../../FWidget'

storiesOf('Components|Widget', module).add('Default', () => ({
  components: { FWidget },
  data: () => ({}),
  props: {
    select: {
      default: select('class', ['primary', 'secondary'])
    },
    size: {
      default: select('size', ['large', 'small', 'medium'])
    }
  },
  template: `
      <f-widget>
      
      </f-widget>
    `
}))
