<template>
  <div class="FToggle">
    <div class="FToggle__wrapper">
      <div class="FToggle__wrapper--label" :class="labelPosition" v-if="$slots.before">
        <slot name="before" />
      </div>
      <div class="FToggle__switch" @click="switchToggle">
        <div class="FToggle__ball" :class="{ 'FToggle__ball--active': value }"></div>
      </div>
      <span
        class="FToggle__wrapper--label"
        :class="[{ 'FToggle__wrapper--label--active': value }, labelPosition]"
      >{{ labelName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FToggle',
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    labelName() {
      return this.value ? 'Ligado' : 'Desligado'
    },
    labelPosition() {
      return `FToggle__wrapper--label--${this.align}`
    }
  },
  methods: {
    switchToggle() {
      this.$emit('input', !this.value)
    }
  }
}
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
    order: 1;
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

    &--label {
      display: flex;
      align-items: center;

      &--left {
        order: 0;
        margin-right: 8px;
      }

      &--right {
        order: 2;
        margin-left: 8px;
      }

      &--active {
        color: #79df28;
      }
    }
  }
}
</style>
