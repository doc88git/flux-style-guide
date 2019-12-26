<template>
  <div class="f-widget" :class="[theme, size]">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "f-widget",
  props: {
    theme: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.f-widget {
  @apply cursor-pointer flex flex-wrap;
  width: 35px;
  &.primary {
    @apply text-primary;
    cursor: pointer;
  }

  .f-icon {
    i {
      @apply text-3xl;
    }
  }
  > span {
    width: 11px;
    height: 11px;
    border: 3px solid;
    display: block;
    margin: 1px;
    border-radius: 3px;
  }

  &:hover {
    @apply opacity-75;
  }
}
</style>
