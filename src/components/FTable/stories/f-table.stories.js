import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import FTable from '../FTable.vue'

const arrList = [
  {
    first_name: 'Aprovado',
    last_name: 'aprovado',
    open: false
  },
  {
    first_name: 'Aprovado',
    last_name: 'aprovado',
    open: false
  },
  {
    first_name: 'Aprovado',
    last_name: 'aprovado',
    open: false
  }
]

storiesOf('Components|Table', module)
  .add('Default', () => ({
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
            {{ rowObject.index }}
            </td>
          </tr>
          <div v-show="rowObject.row.open">
            oi
          </div>
        </template>
      </f-table>
    </div>`
  }))
  .add('Two', () => ({
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
      }
    },
    methods: {
      openAccordion(i) {
        this.data[i].open = !this.data[i].open
      }
    },
    template: `
    <div style="padding: 20px;">
      <RDTable>
      </RDTable>
    </div>`
  }))
