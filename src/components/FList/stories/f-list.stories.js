import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import { FList, FListItem } from '..'
import { FCard, FCardBody } from '@/components/FCard'

const groupId = 'FIELD-LIST-ID1'

storiesOf('Components|List', module).add(
  'List',
  () => ({
    components: { FList, FListItem, FCard, FCardBody },
    props: {
      title: {
        default: text('title', 'This is a title', groupId)
      },
      label: {
        default: text('label', 'Text label', groupId)
      },
      to: {
        default: text('to', '#/home', groupId)
      },
      link: {
        default: text('link', 'http://', groupId)
      }
    },
    template: `
      <div style="padding: 20px;" style="width:600px">
        <f-card>
          <f-card-body>
            <f-list>
              <f-list-item :title="title" :link="link">{{ label }}</f-list-item>
              <f-list-item :title="title" :label="label" :to="to" />
              <f-list-item>
                <div>
                  Slot Label
                </div>
              </f-list-item>
            </f-list>
          </f-card-body>
        </f-card>
      </div>
    `
  }),
  {
    info: {
      sumary: 'List > Item component'
    }
  }
)
