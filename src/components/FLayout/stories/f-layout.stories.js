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
    template: `
      <f-layout
        :menuItems="menuItems"
        :hasMenu="hasMenu"
        :menu-sub-items-limit="3"
        mainTitle="Main Title"
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
