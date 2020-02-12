<template>
  <div class="f-input">
    <div class="f-input__message">Demanda acima de:</div>
    <input type="number" class="f-input__input" />
    <div class="f-input__counter">
      <button class="f-input__up"></button>
      <button class="f-input__down"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'f-input-type',
  components: {},
  data() {},
  props: {
    // value: 'a',
    name: {},
    type: {
      default: 'number',
      type: String
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.f-input {
  border: 1px solid var(--color-gray-500);
  border-radius: 5px;
  height: 64px;
  width: 428px;
  display: flex;
  align-items: center;

  &__input {
    border: 1px solid var(--color-gray-300);
  }

  &__message {
    border: 1px solid green;
  }

  &__counter {
    background: url('../../assets/angle-arrow-down.svg') no-repeat 50% 50%;
    background-size: 32px 32px;
    height: 35px;
    width: 35px;
  }
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
