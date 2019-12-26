<template>
  <div class="FTagGroup">
    <div class="FTagGroup__box">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FTagGroup"
};
</script>

<style lang="scss" scoped>
.FTagGroup {
  min-height: 57px;
  min-width: 700px;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 204, 0.582);
    border-radius: 10px;
  }

  &__box {
    display: flex;
    padding: 10px;
    padding-left: 0;
    padding-bottom: 0;
  }

  .FTag {
    position: relative;
    &:before {
      content: "";
      width: 20px;
      height: 1px;
      background-color: black;
      position: absolute;
      transform: translateX(-100%) translateY(15px);
    }
    &:first-child:before {
      display: none;
    }
  }
}
</style>
