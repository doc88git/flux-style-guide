<template>
  <div
    class="FUpload"
    @drop.prevent.stop
    @dragover.prevent.stop
    @dragenter.prevent.stop
    @dragleave.prevent.stop
    @input.prevent.stop
  >
    <transition name="FUpload--fade">
      <drop-zone
        v-if="!hasFiles || multiple"
        :multiple="multiple"
        :extensions="extensions"
        v-bind="$attrs"
        @upload="handleUpload"
      >
        <file-list v-if="multiple" :files="value" v-on="$listeners" />
      </drop-zone>
    </transition>

    <transition name="FUpload--fade">
      <file-item v-if="!multiple && value" :file="value" v-on="$listeners" />
    </transition>
  </div>
</template>

<script>
import DropZone from './fragments/DropZone'
import FileList from './fragments/FileList'
import FileItem from './fragments/FileItem'

export default {
  name: 'FUpload',

  components: {
    DropZone,
    FileList,
    FileItem
  },

  props: {
    /**
     * List of files.
     */
    value: {
      type: [File, String, Array],
      required: true
    },

    /**
     * Allowed file extensions
     */
    extensions: {
      type: Array,
      required: true
    },

    /**
     * Whether the component should support multiple files or not
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Limits the amount of files that the component should accept
     * in case it is multipe.
     */
    fileLimit: {
      type: [Number, String],
      default: ''
    }
  },

  computed: {
    hasFiles() {
      if (!Array.isArray(this.value)) return !!this.value

      return !!(
        (this.value || []).length &&
        this.value.some(f => f && Object.keys(f).length)
      )
    }
  },

  methods: {
    handleUpload({ files }) {
      if (this.overLimit(files)) return
      Array.from(files).forEach(file => this.$emit('upload', file))
    },
    overLimit(files) {
      if (!Array.isArray(this.values) || !this.fileLimit) return false
      if (this.fileLimit && (this.value || []).length >= +this.fileLimit)
        return true

      return (
        Array.from(files).length + (this.value || []).length >= +this.fileLimit
      )
    }
  }
}
</script>

<style lang="scss">
.FUpload {
  position: relative;
  width: 100%;

  &--fade {
    &-enter-active,
    &-leave-active {
      position: absolute;
      width: 100%;
      transition: opacity 200ms;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>
