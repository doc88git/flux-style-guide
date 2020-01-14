import { storiesOf } from '@storybook/vue'
import FTab from '../FTab.vue'

storiesOf('Components|Tab', module)
  .add('Default', () => ({
    components: { FTab },
    data: () => ({
      options: [
        {
          label: 'Produtos',
          value: 1
        },
        {
          label: 'Vendas',
          value: 2
        },
        {
          label: 'Vacas',
          value: 3
        }
      ]
    }),
    props: {},
    template: `
    <div style="padding: 20px;">
      <f-tab :options="options">
        <template slot="content-1">Content A</template>
        <template slot="content-2">Content B</template>
        <template slot="content-3">Content C</template>
      </f-tab>
    </div>
  `
  }))
  .add('Fill', () => ({
    components: { FTab },
    data: () => ({
      options: [
        {
          label: 'Produtos',
          value: 1
        },
        {
          label: 'Vendas',
          value: 2
        },
        {
          label: 'Vacas',
          value: 3
        }
      ]
    }),
    props: {},
    template: `
    <div style="padding: 20px;">
      <f-tab fill :options="options">
        <template slot="content-1">Content A</template>
        <template slot="content-2">Content B</template>
        <template slot="content-3">Content C</template>
      </f-tab>
    </div>
  `
  }))
