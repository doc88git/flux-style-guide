<template>
  <component
    v-if="dynamicComponent"
    v-bind="[$attrs, $props]"
    :is="dynamicComponent"
  />
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  props: {
    componentSrc: {
      type: String,
      required: true
    }
  },
  mounted() {
    import(this.componentSrc).then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
