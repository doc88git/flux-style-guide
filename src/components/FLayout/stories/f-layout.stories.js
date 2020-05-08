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
      menuSelected: 'home',
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
        { name: 'Empresa', url: '#', id: 'company', icon: 'bell' },
        {
          name: 'Posições',
          id: 'positions',
          icon: 'group',
          openByDefault: true,
          subItems: [
            {
              name: 'Formações',
              url: '#',
              id: 'formations'
            },
            {
              name: 'Formações complementares',
              url: '#',
              id: 'additionalFormations'
            },
            {
              name: 'Instituições Educacionais',
              url: '#',
              id: 'educationalInstitutions'
            }
          ]
        }
      ],
      hasMenu: true
    }),

    mounted() {
      console.log('story: ', this)
    },

    methods: {
      updateSelected(item) {
        this.menuSelected = item.id
      }
    },

    template: `
      <f-layout
        :menuItems="menuItems"
        :hasMenu="hasMenu"
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
