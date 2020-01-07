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
        { name: 'Empresa', url: '#', id: 'company', icon: 'apartment' },
        {
          name: 'Configurações',
          url: '#',
          id: 'configuration',
          icon: 'brightness_5'
        }
      ],
      hasMenu: true
    }),
    template: `
      <f-layout :menuItems="menuItems" :hasMenu="hasMenu" mainTitle="Main Title">
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
