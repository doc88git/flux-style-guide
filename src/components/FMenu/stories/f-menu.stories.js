import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import FMenu from '../FMenu.vue'
import FMenuButton from '../FMenuButton.vue'
import FMenuToggle from '../FMenuToggle.vue'

storiesOf('Template|Menu', module)
  .add('Default', () => ({
    components: { FMenu },

    props: {
      color: {
        default: text('color', 'primary')
      }
    },

    data: () => ({
      menuSelected: 'home',
      menuExpand: false,
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
      ]
    }),

    methods: {
      updateSelected(item) {
        this.menuSelected = item.id
        this.menuExpand = false
      }
    },

    template: `
      <div style="padding: 20px;">
        <f-menu
          icon-lib="flux"
          :menu-items="menuItems"
          :menu-expand="menuExpand"
          :menu-selected="menuSelected"
          @click="updateSelected"
          @expand="menuExpand = true"
        />
      </div>
    `
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
  .add('Menu Toggle', () => ({
    components: {
      FMenuToggle
    },
    data: () => ({}),
    props: {
      color: {
        default: text('color', 'primary')
      }
    },
    template: `
      <div style="padding: 20px;">
        <f-menu-toggle />
      </div>
    `,
    methods: {}
  }))
