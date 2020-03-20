import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import FMenu from '../FMenu.vue'
import FMenuButton from '../FMenuButton.vue'

storiesOf('Components|Menu', module)
  .add('Default', () => ({
    components: { FMenu },
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
              id: 'units',
            },
            {
              name: 'Departamentos',
              url: '#',
              id: 'departments',
            },
            {
              name: 'Regionais',
              url: '#',
              id: 'regionals',
            },
          ]
        },
        { name: 'Empresa', url: '#', id: 'company', icon: 'bell' },
      ]
    }),
    props: {
      color: {
        default: text('color', 'primary')
      }
    },
    template: `
      <div style="padding: 20px;">
        <f-menu
          :action="showSidebar"
          :color="color"
          :menu-items="menuItems"
          :sub-items-limit="3"
          icon-lib="flux"
        />
      </div>
    `,
    methods: {
      showSidebar(payload) {
        console.log(payload)
        this.$emit('click', payload)
      },
      showMenu() {
        console.log('Menu is open')
      },
      showNavbar() {
        console.log('Navbar visible')
      }
    }
  }))
  .add('Menu Button', () => ({
    components: {
      FMenuButton
    },
    data: () => ({}),
    props: {
      color: {
        default: text('color', 'primary')
      }
    },
    template: `
      <div style="padding: 20px;">
        <f-menu-button :color="color" />
      </div>
    `,
    methods: {}
  }))
