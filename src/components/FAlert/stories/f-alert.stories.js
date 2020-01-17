import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import FAlert from '../FAlert.vue'
import FAlertController from '../FAlertController.vue'

const groupId = 'FAlert-ID1'
const title = 'Contrary to popular belief'
const content =
  'There are many variations of passages of Lorem Ipsum available, but the majority.'

storiesOf('Components|Alerts', module)
  .add('Controller', () => ({
    components: { FAlertController },
    data: () => ({
      alerts: []
    }),
    props: {},
    methods: {
      addAlert() {
        this.$refs.alertController.add({
          title: 'Sou um título',
          content: `Um conteúdo pontual: ${new Date().toISOString()}`
        })
      }
    },
    template: `
    <div style="padding: 20px;">
      <FAlertController ref="alertController" :alerts="alerts" :timeout="5" />
      <button @click="addAlert">Add +</button>
    </div>
  `
  }))
  .add('Default', () => ({
    components: { FAlert },
    data: () => ({}),
    props: {
      fill: {
        default: boolean('fill', false, groupId)
      },
      outline: {
        default: boolean('outline', false, groupId)
      },
      closable: {
        default: boolean('closable', false, groupId)
      },
      color: {
        default: text('color', 'primary', groupId)
      },
      textColor: {
        default: text('textColor', 'black', groupId)
      },
      title: {
        default: text('title', title, groupId)
      },
      content: {
        default: text('content', content, groupId)
      }
    },
    template: `
    <div style="padding: 20px;">
      <f-alert
        :fill="fill"
        :color="color"
        :textColor="textColor"
        :outline="outline"
        :closable="closable"
        :title="title"
        :content="content" />
    </div>
  `
  }))
