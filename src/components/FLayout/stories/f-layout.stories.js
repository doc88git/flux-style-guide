import { storiesOf } from '@storybook/vue'
import FLayout from '../FLayout'
import { FWidget } from '../../FWidget'
import { FAvatar } from '../../FAvatar'

const summary = `
## Layout
`

storiesOf('Template|Layout', module).add(
  'Layout',
  () => ({
    components: { FLayout, FWidget, FAvatar },
    data: () => ({
      menuSelected: 'units',
      menuItems: [
        { name: 'Home', url: '#', id: 'home', icon: 'home' },
        {
          name: 'Configurações',
          url: '#',
          id: 'configuration',
          icon: 'hardware'
        },
        {
          name: 'Cadastro',
          url: '#',
          id: 'register',
          icon: 'adjustments',
          subItems: [
            {
              name: 'Unidades',
              url: '#',
              id: 'units'
            },
            {
              name: 'Departamentos',
              url: '#',
              id: 'departments'
            },
            {
              name: 'Regionais',
              url: '#',
              id: 'regionals'
            }
          ]
        },
        { name: 'Empresa', url: '#', id: 'company', icon: 'bell' }
      ],
      hasMenu: true
    }),

    methods: {
      updateSelected(item) {
        this.menuSelected = item.id
        console.log({ item, selected: this.menuSelected })
      }
    },

    template: `
      <f-layout
        :menuItems="menuItems"
        :hasMenu="hasMenu"
        :menu-sub-items-limit="3"
        :menu-selected="menuSelected"
        mainTitle="Main Title"
        @menu-item-click="updateSelected"
      >
        <template v-slot:settings>
          <f-widget></f-widget>
          <f-avatar></f-avatar>
        </template>
      </f-layout>
    `
  }),
  {
    info: {
      summary
    }
  }
)
