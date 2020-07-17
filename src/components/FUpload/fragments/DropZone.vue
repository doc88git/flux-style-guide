<template>
  <div class="DropZone">
    <div class="DropZone__box" @click="triggerInput">
      <p class="DropZone__text">
        {{ placeholderText }} ou clique
        <span class="DropZone__textHighlight">
          para abrir os documentos
        </span>
        para fazer upload do arquivo
      </p>

      <input
        ref="fileInput"
        type="file"
        class="DropZone__input"
        :accept="extensions"
        :multiple="multiple"
        @change.prevent="emitUpload"
      />
    </div>

    <div v-if="$slots.default" class="DropZone__slot">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropZone',

  props: {
    /**
     * The file extensions to be accepted
     */
    extensions: {
      type: Array,
      required: true
    },

    /**
     * The first half of the text displayed as placeholder
     * when no files are present.
     */
    placeholderText: {
      type: String,
      default: 'Arraste aqui seu arquivo'
    },

    /**
     * Whether it accepts multiple files or not
     */
    multiple: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    emitUpload() {
      this.$emit('upload', this.$refs.fileInput)
    },
    triggerInput() {
      if (!this.$refs.fileInput) return

      this.$refs.fileInput.click()
    }
  }
}
</script>

<style lang="scss">
.DropZone {
  display: flex;
  flex-direction: column;

  border: 1px dashed #ccc;
  border-radius: 5px;

  &:hover {
    border: 1px dashed var(--color-primary);
    cursor: pointer;

    .DropZone__textHighlight {
      text-decoration: underline;
    }
  }

  &__box {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    flex-shrink: 0;
    width: 100%;
  }

  &__text {
    text-decoration: none !important;
    color: #999;
  }

  &__textHighlight {
    color: var(--color-primary);
  }

  &__input {
    display: none;
  }
}
</style>
