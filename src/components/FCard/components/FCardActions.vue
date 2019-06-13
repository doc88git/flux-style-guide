<template>
  <div class="f-card-actions" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: "f-card-actions",
  props: {
    align: {
      type: String,
      default: "center"
    }
  },
  computed: {
    classes() {
      return {
        ["f-card-actions--align-center"]: this.align === "center",
        ["f-card-actions--align-justify"]: this.align === "justify",
        ["f-card-actions--align-left"]: this.align === "left",
        ["f-card-actions--align-right"]: this.align === "right"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.f-card-actions {
  @apply flex items-center content-center;
  &--align-center {
    @apply justify-center;
  }
  &--align-justify {
    @apply justify-between;
  }
  &--align-left {
    @apply justify-start;
  }
  &--align-right {
    @apply justify-end;
  }
}
</style>
