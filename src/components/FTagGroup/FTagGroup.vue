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
  min-height: 100px;
  min-width: 700px;
  &__box {
    display: flex;
  }

  .FTag {
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

@import "../../assets/f-colors.scss";
</style>
