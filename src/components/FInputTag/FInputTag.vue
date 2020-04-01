<template>
  <div id="customComponentId" class="customComponent" @click="listenClick">
    <div class="tagInput">
      <div class="tags">
        <div v-for="(tag, index) in tags" :key="tag.id" class="tag">
          <f-chip style="height: 30px;">
            {{ tag }}
            <button
              style="margin-left: 10px; outline: 0;"
              @click="delTag(index)"
            >
              X
            </button>
          </f-chip>
        </div>
        <input
          id="tagsInput"
          v-model="sectorInput"
          class="inputTags"
          @change="addTag"
          type="text"
          :placeholder="placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FChip } from '../FChip'

export default {
  components: {
    FChip
  },

  data() {
    return {
      sectorInput: ''
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
      if (!this.sectorInput) return
      this.$emit('addToParent', this.sectorInput)
      this.sectorInput = ''
    },

    delTag(index) {
      this.$emit('delToParent', index)
    },

    listenClick() {
      document.getElementById('tagsInput').focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.inputTags {
  outline: 0;
  height: 25px;
  font-size: 15px;
  max-width: 165px;
  padding: 19px;
  margin-left: 5px;
  border: none;
}

.tagInput {
  display: flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  max-width: 100%;
  border-radius: 5px;
}

.tagInput:hover {
  border: 1px solid var(--color-primary);
  cursor: text;
}

.tagsInputTitle {
  margin-bottom: 5px;
  display: block;
  letter-spacing: 0.025em;
  font-weight: 700;
  color: var(--color-font-base);
}

.tag {
  display: inline-block;
  margin: 2px;
}
.tags {
  max-width: 100%;
  font-size: 0;
}
</style>
