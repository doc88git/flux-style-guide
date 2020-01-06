import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import FAvatar from '../FAvatar.vue'

const groupId = 'FAvatar-ID1'

storiesOf('Components|Avatar', module).add('Default', () => ({
  components: { FAvatar },
  data: () => ({
    value: 2
  }),
  props: {
    src: {
      default: text('src', 'https://cdn.quasar.dev/img/avatar5.jpg', groupId)
    }
  },
  template: `
    <div class="p-8">
      <f-avatar :src="src" />
    </div>
  `
}))
