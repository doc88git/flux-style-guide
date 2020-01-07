<template>
  <div class="FToggle">
    <div class="FToggle__wrapper">
      <div v-if="$slots.before" class="FToggle__wrapper--label">
        <slot name="before" />
      </div>
      <div class="FToggle__switch" @click="switchToggle">
        <div
          class="FToggle__ball"
          :class="{ 'FToggle__ball--active': value }"
        ></div>
      </div>
      <span
        v-if="!$slots.before && !$slots.after"
        class="FToggle__wrapper--label"
        :class="{ 'FToggle__wrapper--label--active': value }"
        >{{ labelName }}</span
      >
      <div v-if="$slots.after" class="FToggle__wrapper--label">
        <slot name="after" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FToggle",
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelName() {
      return this.value ? "Ligado" : "Desligado";
    }
  },
  methods: {
    switchToggle() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.FToggle {
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;

  &__switch {
    width: 40px;
    border: 1px solid #c1c1c1;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    padding: 1px;
  }

  &__ball {
    height: 16px;
    width: 16px;
    border-radius: 10px;
    background-color: #c1c1c1;
    transition: transform 0.1s ease-in-out;

    &--active {
      transform: translateX(125%);
      background-color: #79df28;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    margin-right: 20px;

    &--label {
      display: flex;
      align-items: center;

      &--active {
        color: #79df28;
      }

      &:first-child {
        margin-right: 10px;
      }

      &:last-child {
        margin-left: 10px;
      }
    }
  }
}
</style>
