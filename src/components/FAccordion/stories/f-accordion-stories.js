import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import { FAccordion } from '../index.js'

storiesOf('Components|Accordion', module).add('Default', () => ({
  components: { FAccordion },

  data: () => ({
    title: text('Title', 'Título')
  }),

  template: `
      <div style="max-width: 500px; margin: 70px auto">
        <f-accordion :title="title">
          <h4>Conteúdo</h4>
          <h4>Conteúdo</h4>
          <h4>Conteúdo</h4>
          <h4>Conteúdo</h4>
          <h4>Conteúdo</h4>
        </f-accordion>
      </div>
    `
}))
