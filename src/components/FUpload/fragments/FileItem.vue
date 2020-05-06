<template>
  <div :class="rootClasses">
    <div :class="previewClasses">
      <div
        v-if="previewable"
        :style="imgStyle"
        class="FileItem__preview__img"
      />
      <f-icon
        v-else
        name="file"
        lib="flux"
        :size="small ? 'base' : 'xl'"
        color="gray-700"
        class="FileItem__preview__icn"
      />
    </div>
    <div class="FileItem__title">{{ fileName }}</div>
    <div class="FileItem__actions">
      <div class="FileItem__actions__delete" @click="emitDelete">
        <f-icon size="xs" name="X" lib="flux" color="red-700" />
      </div>
    </div>
  </div>
</template>

<script>
const is = (value, constructor) => {
  return Object.prototype.toString.call(value) === `[object ${constructor}]`
}

export default {
  name: 'FileItem',

  props: {
    /**
     * The file to be processed, can be either a File object,
     * an URL poiting to the file.
     */
    file: {
      type: [String, File],
      required: true
    },

    /**
     * Makes the FileItem's appaerance more compact.
     */
    small: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    loading: false,
    fileObj: null
  }),

  computed: {
    rootClasses() {
      return [
        'FileItem',
        {
          'FileItem--loading': this.loading,
          'FileItem--small': this.small
        }
      ]
    },
    previewClasses() {
      return [
        'FileItem__preview',
        {
          'FileItem__preview--small': this.small
        }
      ]
    },
    imgStyle() {
      if (!this.previewable || this.loading) return {}

      return { backgroundImage: `url(${this.filePath})` }
    },
    previewable() {
      if (this.loading || !this.fileObj.type) return

      return this.fileObj.type.includes('image')
    },
    filePath() {
      if (!this.previewable || this.loading) return ''

      return URL.createObjectURL(this.fileObj) || ''
    },
    fileName() {
      return this.loading ? '' : this.fileObj.name.replace(/\//g, '')
    }
  },

  created() {
    if (is(this.file, 'String')) return this.fetchFile(this.file)

    this.fileObj = this.file
  },

  methods: {
    async fetchFile(fileUrl) {
      try {
        this.loading = true

        const fileName = fileUrl.substring(fileUrl.lastIndexOf('/'))
        const fileStream = await fetch(fileUrl, { mode: 'no-cors' })
        const fileBlob = await fileStream.blob()
        this.fileObj = new File([fileBlob], fileName)

        this.loading = false
      } catch (err) {
        const fileName = fileUrl.substring(fileUrl.lastIndexOf('/'))
        this.fileObj = new File([new Blob()], fileName)

        console.error('FileUpload Fetch error: ', err)
      }
    },
    emitDelete() {
      this.$emit('delete', this.file)
    }
  }
}
</script>

<style lang="scss">
.FileItem {
  display: flex;

  border: 1px solid #cccccc;
  border-radius: 5px;

  height: 70px;
  padding-right: 25px;

  &--small {
    height: 40px;
    padding-right: 7px;
  }

  &__preview {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 55px;
    height: 55px;
    margin: 7px;
    margin-right: 15px;

    &--small {
      width: 25px;
      height: 25px;
      margin-right: 7px;
    }

    &__img {
      border-radius: 3px;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    flex-grow: 1;
    color: #999;
    font-size: 12px;
  }

  &__actions {
    display: flex;
    align-items: center;

    &__delete {
      padding: 3px;
      border-radius: 50%;
      border: 1px solid var(--color-red-700);
      cursor: pointer;
    }
  }
}
</style>
