import { storiesOf } from '@storybook/vue'

import { FLink } from '@/components/FLink'

storiesOf('Components|Link', module)
  .add(
    'Router',
    () => ({
      components: { FLink },
      template: `
        <div style="padding: 20px;">
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
        <div style="padding: 20px;">
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
