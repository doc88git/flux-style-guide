import { storiesOf } from '@storybook/vue'
import { FSticky } from '..'

storiesOf('Components|Sticky', module).add('Default', () => ({
  components: {
    FSticky
  },
  template: `
        <div style="height: 1000px;">
          <div style="height: 200px;"></div>
          <f-sticky top="20">oi</f-sticky>
        </div>
      `
}))
