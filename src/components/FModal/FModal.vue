<template>
  <section class="f-modal" @click="clickOff">
    <div class="f-modal__content">
      <slot name="image-header">
        <f-image v-if="headerBg" rounded-t :src="headerBg" />
      </slot>
      <slot name="content">
        <main class="f-modal__body">
          <slot></slot>
        </main>
      </slot>
    </div>
  </section>
</template>

<script>
import FImage from '../FImage/FImage'

export default {
  name: 'f-modal',
  components: {
    FImage
  },
  props: {
    headerBg: String,
    show: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    window.addEventListener('keyup', this.onKeyUp)
  },
  destroyed() {
    window.removeEventListener('keyup', this.onKeyUp)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    onKeyUp(e) {
      if (e.keyCode === 27) this.close()
    },
    clickOff(e) {
      if (e.target.classList[0] === 'f-modal') this.close()
    }
  }
}
</script>

<style lang="scss">
.f-modal {
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  z-index: 100;

  .f-card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.f-modal__content {
  padding: 20px;
  margin: auto;
}
</style>
