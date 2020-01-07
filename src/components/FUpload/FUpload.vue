<template>
  <div
    id="drop_zone"
    ref="file"
    :class="{ active: hover }"
    @drop="dropHandler"
    @dragover="dragHandlerOver"
    @dragleave="dragLeave"
  >
    <div class="upload">
      <div v-if="files" class="files">
        <img :src="path" alt="" class="thumb" />
        {{ files }}
        <f-button
          :disabled="false"
          label="Remover"
          color="standard"
          text-color="white"
          icon="delete"
          :small="true"
          @click="clearFiles()"
        />
      </div>
      <div v-else>
        Arraste aqui seu arquivo ou
        <label id="label-upload" for="fileElem"
          >procure no seus documentos</label
        >
        <input
          id="fileElem"
          ref="file"
          type="file"
          accept="image/*"
          @change="handleUpload"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FButton } from "../FButton";
export default {
  name: "f-upload",
  components: {
    FButton
  },
  data: () => ({
    files: null,
    path: null,
    hover: false
  }),
  computed: {
    classDynamic() {
      return [`f-upload--${this.hover}`];
    }
  },
  methods: {
    dropHandler(e) {
      // Prevent default behavior (Prevent file from being opened)

      e.preventDefault();
      const file = e.dataTransfer.files[0];

      if (file.type.match("image.*")) {
        this.readFile(file);
      }
      this.hover = false;
    },
    dragHandlerOver(e) {
      // Prevent default behavior (Prevent file from being opened)
      this.hover = true;
      e.preventDefault();
    },
    dragLeave() {
      this.hover = false;
    },
    handleUpload(e) {
      // const fileName = e.target.files[0].name
      const file = e.target.files[0];
      this.readFile(file);
    },
    readFile(file) {
      const reader = new FileReader();
      this.files = file.name;
      reader.onload = e => {
        this.path = e.target.result;
        this.$emit("upload_data", e.target.result);
      };
      this.$emit("upload_label", this.files);
      reader.readAsDataURL(file);
    },
    clearFiles() {
      this.files = null;
      this.path = null;
      this.$emit("upload_label", this.files);
      this.$emit("upload_data", this.path);
    }
  }
};
</script>

<style lang="scss" scoped>
#drop_zone {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  border: 1px dashed;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  padding: 0 3em;
  transition: all 0.2s ease-out;

  &:hover {
    border-color: var(--color-primary);
  }

  &.active {
    box-shadow: 0 0 10px var(--color-secondary-lighter);
    border-color: var(--color-primary);
  }
}

.files {
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  width: 100%;
}

#fileElem {
  display: none;
}

.upload {
  width: 100%;
  display: flex;
  justify-content: center;
}

.thumb {
  max-width: 70px;
}

#label-upload {
  cursor: pointer;
  color: var(--color-primary);
  &:hover {
    text-decoration: underline;
  }
}
</style>
