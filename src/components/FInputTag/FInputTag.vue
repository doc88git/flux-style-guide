<template>
  <div class="FInputTag" @click="listenClick">
    <div class="FInputTag__body">
      <div class="FInputTag__tags">
        <div v-for="(tag, index) in tags" :key="tag.id" class="FInputTag__tag">
          <f-chip :label="tag" removable @remove="delTag(index)" />
        </div>
        <f-input
          name="tagsinput"
          id="tagsInput"
          v-model="arrayInput"
          class="FInputTag__input"
          @keypress.native.enter="addTag"
          @input="arrayInput = $event"
          type="text"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FChip } from '../FChip'
import { FInput } from '../FField'

export default {
  components: {
    FChip,
    FInput
  },

  data() {
    return {
      arrayInput: ''
    }
  },

  props: {
    tags: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: () => 'Digite aqui'
    }
  },

  methods: {
    addTag() {
      if (!this.arrayInput) return
      this.$emit('add', this.arrayInput)
      this.arrayInput = ''
    },

    delTag(index) {
      this.$emit('del', index)
    },

    listenClick() {
      document.getElementById('tagsInput').focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.FInputTag {
  &__input {
    outline: 0;
    height: 25px;
    font-size: var(--text-base);
    max-width: 165px;
    padding: 19px;
    margin-left: 5px;
    border: none;
  }

  &__body {
    display: flex;
    align-items: center;
    border: 1px solid #e2e8f0;
    max-width: 100%;
    border-radius: 5px;

    &:hover {
      border: 1px solid var(--color-primary);
      cursor: text;
    }
  }

  &__tag {
    display: inline-block;
    margin: 2px;
  }

  &__tags {
    max-width: 100%;
    font-size: 0;
  }
}
</style>
