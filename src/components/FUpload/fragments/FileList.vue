<template>
  <div :class="classes">
    <file-item
      v-for="(file, index) in files"
      :key="`${index}-${file.name || file}`"
      :file="file"
      class="FileList__item"
      small
      @delete="emitDelete($event, index)"
    />
  </div>
</template>

<script>
import FileItem from './FileItem'

export default {
  name: 'FileList',

  components: { FileItem },

  props: {
    /**
     * List of files to display
     */
    files: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    classes() {
      return [
        'FileList',
        {
          'FileList--empty': !(this.files || []).length
        }
      ]
    }
  },

  methods: {
    emitDelete(file, index) {
      this.$emit('delete', { file, index })
    }
  }
}
</script>

<style lang="scss">
.FileList {
  &:not(&--empty) {
    padding: 5px;
  }

  &__item:not(:last-child) {
    margin-bottom: 5px;
  }
}
</style>
