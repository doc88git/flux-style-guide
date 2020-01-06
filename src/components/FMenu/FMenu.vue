<template>
  <div>
    <button>
      <span v-for="n in 4" :key="n" :class="'icon-widget'"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'f-menu',
  data: () => ({
    appTitle: 'reembolso'
  }),
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    action: {
      type: Function
    }
  },
  methods: {
    toggleMenu({ payload, context }) {
      console.log('toggled')
      this.$emit('click', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
span.icon-widget {
  height: 100px;
  width: 10px;
}
</style>
