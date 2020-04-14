<template>
  <div class="p--base m-b--xl">
    <f-button
      @click="triggerTwice"
      label="Trigger twice"
    />
    <f-button
      @click="triggerNoGroupingTwice"
      label="Trigger twice (no grouping)"
    />
    <f-button
      @click="triggerTwiceCustomGroup"
      label="Trigger twice (custom group)"
    />
  </div>
</template>

<script>
export default {
  methods: {
    triggerTwice() {
      this.$f.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })

      this.$f.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },

    triggerNoGroupingTwice() {
      this.$f.notify({
        group: false,
        message: 'Jim pinged you.',
        color: 'purple'
      })

      this.$f.notify({
        group: false,
        message: 'Jim pinged you.',
        color: 'purple'
      })
    },

    triggerTwiceCustomGroup() {
      this.$f.notify({
        group: 'my-group',
        message: 'Jim pinged you.',
        color: 'purple'
      })

      // same group as the previous one,
      // so it will replace it and
      // increment the badge number:
      this.$f.notify({
        group: 'my-group',
        message: 'Jack has messaged you.',
        color: 'primary'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
