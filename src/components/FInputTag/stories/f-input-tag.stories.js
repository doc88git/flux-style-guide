import { storiesOf } from '@storybook/vue'

import { FInputTag } from '@/components/FInputTag'

storiesOf('Components|InputTag', module).add('Default', () => ({
  components: {
    FInputTag
  },

  data: () => ({
    tags: []
  }),

  methods: {
    handler(value) {
      this.tags.push(value)
    },
    handler2(index) {
      this.tags.splice(index, 1)
    }
  },

  template: `
      <div style="padding: 20px;">
        <f-input-tag           
        @addToParent="handler"
        @delToParent="handler2"
        :tags="tags"/>
      </div>
      `
}))
