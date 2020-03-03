import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import FTable from '../FTable.vue'

const arrList = [
  {
    first_name: 'Aprovado',
    last_name: '1',
    open: false
  },
  {
    first_name: 'BAprovado',
    last_name: '2',
    open: false
  },
  {
    first_name: 'CAprovado',
    last_name: '3',
    open: false
  }
]

storiesOf('Components|Table', module).add('Default', () => ({
  components: {
    FTable
  },
  data: () => ({
    data: arrList,
    caret: true,
    position: 'down',
    type: 'outlined'
  }),
  props: {
    sortBy: {
      default: text('sortBy', '')
    },
    sortDirection: {
      default: text('sortDirection', 'asc')
    },
    header: {
      default: {
        first_name: 'Nome',
        last_name: 'Sobrenome'
      }
    },
    sort: {
      default: boolean('sort', false)
    }
  },
  methods: {
    openAccordion(i) {
      this.data[i].open = !this.data[i].open
    }
  },
  template: `
    <div style="padding: 20px;">
      <f-table
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :data="data"
        :header="header">
        <template v-slot:tr="rowObject">
          <tr @click="openAccordion(rowObject.index)">
            <td>
              {{ rowObject.row.first_name }}
            </td>
            <td>
            {{ rowObject.row.last_name }}
            </td>
          </tr>
          <div v-show="rowObject.row.open">
            oi
          </div>
        </template>
      </f-table>
    </div>`
}))
