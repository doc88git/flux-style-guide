<template>
  <div class="p--base m-b--xl">
    <f-button
      color="purple"
      @click="showNotifWithActions"
      label="Show Notification"
    />
  </div>
</template>

<script>
export default {
  methods: {
    showNotifWithActions() {
      this.$f.notify({
        message: 'Jim just pinged you.',
        color: 'primary',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          {
            label: 'Dismiss',
            color: 'white',
            handler: () => {
              /* ... */
            }
          }
        ]
      })

      this.$f.notify({
        message: 'Jim just pinged you.',
        color: 'primary',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          {
            label: 'Reply',
            color: 'yellow',
            handler: () => {
              /* ... */
            }
          },
          {
            label: 'Dismiss',
            color: 'white',
            handler: () => {
              /* ... */
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
