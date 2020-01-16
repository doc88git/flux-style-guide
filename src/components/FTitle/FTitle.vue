<template>
  <div :class="{ 'FTitle--border': !noBorder }" class="FTitle">
    <div class="FTitle__wrapper">
      <div v-if="$slots.before" class="FTitle__wrapper--before">
        <slot name="before" />
      </div>
      <h1 class="FTitle__wrapper__text">{{ text }}</h1>
      <div v-if="$slots.after" class="FTitle__wrapper--after">
        <slot name="after" />
      </div>
    </div>
    <hr class="FTitle__hr" />
  </div>
</template>

<script>
export default {
  name: 'FTitle',
  components: {},
  props: {
    noBorder: {
      type: Boolean
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.FTitle {
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  color: var(--color-font-base);

  &__wrapper {
    display: flex;

    &--before {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }

    &__text {
      display: flex;
      align-items: center;
      font-size: var(--text-xl);
      padding: 0;
      margin: 0;
    }

    &--after {
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
  }

  &__hr {
    border-color: #ccc;
    margin-top: 20px;
  }
}
</style>
