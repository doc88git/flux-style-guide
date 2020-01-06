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
      list: ['car', 'bus', 'train'],
      icons: {
        car: 'directions_car',
        bus: 'directions_bus',
        train: 'train'
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
      <div class="p-8">
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
        car: false,
        bus: false,
        train: false
      },
      list: ['car', 'bus', 'train'],
      icons: {
        car: 'directions_car',
        bus: 'directions_bus',
        train: 'train'
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
      <div class="p-8">
        <f-chip
          v-for="(item, i) in list" :key="i"
          :label="item"
          :icon="icons[item]"
          :selected.sync="select[item]"

          @remove="remove(item)"

          :color="color"
          :textColor="textColor"
          :removable="removable"
          :disable="disable"
        />
      </div>
    `
  }))
