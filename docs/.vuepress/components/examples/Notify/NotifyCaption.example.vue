<template>
  <div class="p--base m-b--xl">
    <f-button
      color="purple"
      @click="showNotifWithCaption"
      label="Show Notification"
    />
  </div>
</template>

<script>
export default {
  methods: {
    showNotifWithCaption() {
      this.$f.notify({
        message: 'Jim pinged you.',
        caption: '5 minutes ago',
        color: 'secondary'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
