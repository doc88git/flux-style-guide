import { storiesOf } from '@storybook/vue'

import { FLink } from '@/components/FLink'

storiesOf('Components|Link', module)
  .add(
    'Router',
    () => ({
      components: { FLink },
      template: `
        <div class="p-8">
          <f-link to="/">Link</f-link>
        </div>
      `
    }),
    {
      info: {
        sumary: 'Link component'
      }
    }
  )
  .add(
    'Link',
    () => ({
      components: { FLink },
      template: `
        <div class="p-8">
          <f-link link="http://" label="http://">
        </div>
      `
    }),
    {
      info: {
        sumary: 'Link component'
      }
    }
  )
