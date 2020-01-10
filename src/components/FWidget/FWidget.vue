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
  name: 'f-widget',
  props: {
    theme: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.f-widget {
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  width: 35px;
  &.primary {
    color: var(--color-primary);
    cursor: pointer;
  }

  .f-icon {
    i {
      font-size: 1.875rem;
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
    opacity: 0.75;
  }
}
</style>
