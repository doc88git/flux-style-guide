<template>
  <div :class="{ 'FTitle--border': !noBorder }" class="FTitle">
    <slot name="before" />
    <h1 class="FTitle__text">{{ text }}</h1>
    <slot name="after" />
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

  &__hr {
    border-color: #ccc;
    margin-top: 20px;
  }

  &__text {
    font-size: 1.3em;
    color: #000;
    padding: 0;
    margin: 0;
  }
}
</style>
