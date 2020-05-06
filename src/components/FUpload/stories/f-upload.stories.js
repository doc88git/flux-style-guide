import { storiesOf } from '@storybook/vue'
import { FUpload } from '../index.js'

storiesOf('Form|Upload', module)
  .add('Default', () => ({
    components: { FUpload },
    data: () => ({}),
    props: {},
    template: `
      <div style="padding: 40px; width: 100%; text-align: center;">
        <f-upload>
          <f-button
            :disabled="false"
            color="standard"
            text-color="white"
            icon="delete"
            :small="true"
            @click="clearFiles()"
          />
        </f-upload>
      </div>
    `
  }))
  .add('Multiple', () => ({}))
