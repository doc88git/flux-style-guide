<template>
  <img :src="src" @click="click" class="f-avatar" />
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
    }
  }
}
</script>

<style lang="scss" scoped>
.f-avatar {
  align-items: center;
  border-width: 2px;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  border-radius: 9999px;
  object-fit: cover;
  background-position: center;
  height: 50px;
  width: 50px;
  font-size: 48px;
  padding: 1px;
}
</style>
