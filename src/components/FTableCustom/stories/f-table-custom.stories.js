import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import { FTableCustom } from '../../FTableCustom//index.js'
import { FButton } from '../../FButton/index.js'
import { FPagination } from '../../FPagination//index.js'
import { FDropdown } from '../../FDropdown//index.js'

import Users from '../../../mocks/userList.json'

const arrList = [
  {
    label: 'Aprovado',
    value: 'aprovado'
  },
  {
    label: 'Aguardando conferência',
    value: 'aguardando'
  },
  {
    label: 'Pago',
    value: 'pago'
  }
]

storiesOf('Components|TableCustom', module).add('Default', () => ({
  components: { FButton, FPagination, FDropdown, FTableCustom },
  data: () => ({
    list: arrList,
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
    data: {
      default: Users
    },
    headerData: [
      {
        id: 1,
        label: 'Id'
      },
      {
        id: 2,
        label: 'Descrição'
      },
      {
        id: 3,
        label: 'Status'
      }
    ]
  },
  template: `
    <div class="p-8">
      <f-table-custom
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :body="data"
        :header="headerData">
        <template v-slot:header_left>
          <f-button icon="add">Add</f-button>
        </template>
        <template v-slot:header_right>
          <f-dropdown :list="list" :caret="caret" :position="position" :type="type" />
        </template>
        <template v-slot:footer_center>
          <f-pagination
            :currentPage="1"
            :total="100"
            :perPage="6"
            :max="10"
          />
        </template>
      </f-table-custom>
    </div>`
}))
