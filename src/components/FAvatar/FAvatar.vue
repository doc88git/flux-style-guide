<template>
  <img
    class="f-avatar"
    :src="src"
    :style="imgStyles"
    v-bind="$attrs"
    @click="click"
  />
</template>

<script>
export default {
  name: 'f-avatar',

  props: {
    src: {
      type: String,
      default: 'https://cdn.quasar.dev/img/avatar5.jpg'
    },
    click: {
      type: Function,
      default: () => ({})
    },
    size: {
      type: [String, Number],
      default: 50
    }
  },

  computed: {
    imgStyles() {
      return {
        width: `${+this.size}px`,
        height: `${+this.size}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.f-avatar {
  display: inline-block;

  position: relative;
  vertical-align: middle;
  object-fit: cover;
  background-position: center;

  border-width: 2px;
  border-radius: 100%;

  font-size: var(--text-5xl);
  padding: 1px;

  height: 50px;
  width: 50px;
}
</style>
