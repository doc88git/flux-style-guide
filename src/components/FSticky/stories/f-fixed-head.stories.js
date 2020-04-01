import { storiesOf } from '@storybook/vue'
import { FSticky } from '..'
import { number, text } from '@storybook/addon-knobs'

storiesOf('Components|Sticky', module).add('Default', () => ({
  components: {
    FSticky
  },
  data: () => ({
    top: number('top', 20),
    text: text('text', 'text')
  }),
  template: `
        <div style="height: 1000px;">
          <div style="margin: 30%;">
          <f-sticky :top="top">{{ text }}</f-sticky></div>
        </div>
      `
}))
