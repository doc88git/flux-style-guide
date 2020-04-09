import { storiesOf } from '@storybook/vue'
import { boolean, text } from '@storybook/addon-knobs'
import FChip from '../FChip.vue'

const groupId = 'FChip-ID1'

storiesOf('Components|Chip', module)
  .add('Default', () => ({
    components: { FChip },
    data: () => ({
      value: 2,
      select: {
        car: false,
        bus: false,
        train: false
      },
      list: ['hardware', 'home', 'base'],
      icons: {
        hardware: 'hardware',
        home: 'home',
        data: 'base'
      }
    }),
    methods: {
      remove(item) {
        let newList = this.list.filter(v => v !== item)
        this.list = newList
      }
    },
    props: {
      color: {
        default: text('color', 'primary', groupId)
      },
      textColor: {
        default: text('textColor', 'white', groupId)
      },
      label: {
        default: text('label', 'Doc88', groupId)
      },
      icon: {
        default: text('icon', 'home', groupId)
      },
      removable: {
        default: boolean('removable', true, groupId)
      },
      disable: {
        default: boolean('disable', false, groupId)
      }
    },
    template: `
      <div style="padding: 20px;">
        <f-chip
          :label="label"
          :color="color"
          :textColor="textColor"
          :removable="false"
          :disable="false"
        />
        <f-chip
          :label="label"
          :icon="icon"
          :color="color"
          :textColor="textColor"
          :removable="false"
          :disable="false"
        />
        <f-chip
          :label="label"
          :icon="icon"
          :color="color"
          :textColor="textColor"
          :removable="removable"
          :disable="false"
        />
        <f-chip
          :label="label"
          :color="color"
          :textColor="textColor"
          :removable="removable"
          :disable="false"
        />
      </div>
    `
  }))
  .add('Select', () => ({
    components: { FChip },
    data: () => ({
      value: 2,
      select: {
        alarm: false,
        apps: false,
        badge: false
      },
      list: ['alarm', 'apps', 'badge'],
      icons: {
        alarm: 'alarm',
        apps: 'apps',
        badge: 'badge'
      }
    }),
    methods: {
      remove(item) {
        let newList = this.list.filter(v => v !== item)
        this.list = newList
      }
    },
    props: {
      color: {
        default: text('color', 'primary', groupId)
      },
      textColor: {
        default: text('textColor', 'white', groupId)
      },
      label: {
        default: text('label', 'Doc88', groupId)
      },
      icon: {
        default: text('icon', 'home', groupId)
      },
      removable: {
        default: boolean('removable', true, groupId)
      },
      disable: {
        default: boolean('disable', false, groupId)
      }
    },
    template: `
      <div style="padding: 20px;">
        <f-chip
          v-for="(item, i) in list" :key="i"
          :label="item"
          :icon="icons[item]"
          :selected.sync="select[item]"
          :color="color"
          :textColor="textColor"
          :removable="removable"
          :disable="disable"
          @remove="remove(item)"
        />
      </div>
    `
  }))
