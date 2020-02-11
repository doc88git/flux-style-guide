<template>
  <div class="FToggle">
    <div class="FToggle__wrapper position">
      <div class="FToggle__wrapper--label" :class="labelPosition" href="#">
        <slot name="before" />
      </div>
      <div class="FToggle__switch" @click="switchToggle" href="#">
        <div class="FToggle__ball" :class="{ 'FToggle__ball--active': value }"></div>
      </div>
      <span
        class="FToggle__wrapper--label"
        :class="{ 'FToggle__wrapper--label--active': value }"
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
      console.log(this.align)
      return this.position === 1 ? 'b' : 'a'
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
  background: $teste;

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
    @include position(1);

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
