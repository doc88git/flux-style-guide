<template>
  <div :class="{ 'FTitle--border': !noBorder }" class="FTitle">
    <div class="FTitle__wrapper">
      <div v-if="$slots.before" class="FTitle__wrapper--before">
        <slot name="before" />
      </div>
      <h1 class="FTitle__text">{{ text }}</h1>
      <div v-if="$slots.after" class="FTitle__wrapper--after">
        <slot name="after" />
      </div>
    </div>
    <hr class="FTitle__hr" />
  </div>
</template>

<script>
export default {
  name: "FTitle",
  components: {},
  props: {
    noBorder: {
      type: Boolean
    },
    text: {
      type: String,
      default: ""
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.FTitle {
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;

  &__wrapper {
    display: flex;

    &--before {
      display: flex;
      align-items: center;
      margin-right: 20px;
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

  &__text {
    display: flex;
    align-items: center;
    font-size: 1.3em;
    color: #000;
    padding: 0;
    margin: 0;
  }
}
</style>
