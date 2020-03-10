<template>
  <i class="material-icons" :class="classTyle">{{ name }}</i>
</template>

<script>
export default {
  name: 'f-icon-material',
  data: () => ({
    types: {
      outlined: 'material-icons-outlined',
      sharp: 'material-icons-sharp',
      twoTone: 'material-icons-two-tone',
      round: 'material-icons-round',
      default: ''
    }
  }),
  props: {
    name: {
      default: 'home',
      type: String,
      required: true
    },
    type: {
      default: 'default',
      type: String
    }
  },
  computed: {
    classTyle() {
      return this.types[this.type] || this.types.default
    }
  }
}
</script>

<style lang="scss" scoped>
.material-icons {
  font-size: var(--text-lg);
  fill: var(--color-primary);
}
</style>
