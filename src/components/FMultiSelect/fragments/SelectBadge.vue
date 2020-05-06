<template>
  <div class="SelectBadge">
    <span class="SelectBadge__number">{{ number }}</span>
  </div>
</template>

<script>
export default {
  name: 'SelectBadge',

  props: {
    number: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.SelectBadge {
  margin-right: 15px;
  height: 18px;
  width: 29px;
  background-color: var(--color-primary);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__number {
    color: #fff;
    font-size: 11px;
    line-height: 11px;
  }
}
</style>
