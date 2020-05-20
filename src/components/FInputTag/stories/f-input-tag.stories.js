import { storiesOf } from '@storybook/vue'

import { FInputTag } from '@/components/FInputTag'

storiesOf('Form|InputTag', module).add('Default', () => ({
  components: {
    FInputTag
  },

  data: () => ({
    tags: []
  }),

  methods: {
    addTag(value) {
      this.tags.push(value)
    },
    delTag(index) {
      this.tags.splice(index, 1)
    }
  },

  template: `
      <div style="padding: 20px;">
        <f-input-tag           
        @add="addTag"
        @del="delTag"
        :tags="tags"/>
      </div>
      `
}))
