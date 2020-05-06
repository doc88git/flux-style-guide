import { storiesOf } from '@storybook/vue'
import { FUpload } from '../index.js'

storiesOf('Form|Upload', module)
  .add('Multiple', () => ({
    components: { FUpload },
    data: () => ({ files: [] }),
    methods: {
      updateFiles(file) {
        this.files.push(file)
      },
      deleteFile({ index }) {
        this.files.splice(index, 1)
      }
    },
    template: `
      <div style="padding: 40px; width: 100%; text-align: center;">
        <f-upload
          multiple
          :value="files"
          :extensions="['.jpg', '.png', '.zip', '.rar', '.txt']"
          @upload="updateFiles"
          @delete="deleteFile"
        />
      </div>
    `
  }))
  .add('Simple', () => ({
    components: { FUpload },
    data: () => ({ file: '' }),
    methods: {
      updateFile(file) {
        this.file = file
      },
      deleteFile() {
        this.file = ''
      }
    },
    template: `
      <div style="padding: 40px;">
        <f-upload
          :value="file"
          :extensions="['.jpg', '.png', '.zip', '.rar', '.txt']"
          @upload="updateFile"
          @delete="deleteFile"
        />
      </div>
    `
  }))
