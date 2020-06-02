<template>
  <div class="p--base">
    <h6>Icon</h6>
    <f-button
      @click="showNotifWithIcon"
      label="Show Icon Notification"
      class="m-b--xl"
    />
    <h6>Avatar</h6>
    <f-button
      @click="showNotifWithAvatar"
      label="Show Avatar Notification"
    />
  </div>
</template>

<script>
export default {
  methods: {
    showNotifWithIcon() {
      this.$f.notify({
        message: 'Jim pinged you.',
        icon: 'home'
      })
    },
    showNotifWithAvatar() {
      this.$f.notify({
        message: 'Jim pinged you.',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
