import { storiesOf } from '@storybook/vue'
import { number } from '@storybook/addon-knobs'
import FPagination from '../FPagination.vue'

storiesOf('Components|Pagination', module).add('Default', () => ({
  components: { FPagination },
  props: {
    currentPage: {
      default: number('currentPage', 1)
    },
    total: {
      default: number('total', 100)
    },
    perPage: {
      default: number('perPage', 6)
    },
    max: {
      default: number('max', 10)
    }
  },
  template: `
    <div class="p-8">
      <f-pagination :currentPage="currentPage" :total="total" :perPage="perPage" :max="max" />
    </div>
  `
}))
