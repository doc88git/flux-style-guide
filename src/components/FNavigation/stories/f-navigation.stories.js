import { storiesOf } from '@storybook/vue'
import { boolean, text } from '@storybook/addon-knobs'
import FNavigation from '../FNavigation'

storiesOf('Components|Navigation', module).add('Default', () => ({
  components: { FNavigation },
  data: () => ({}),
  props: {},
  template: `
    <f-navigation></f-navigation>
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
