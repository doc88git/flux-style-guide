<template>
  <div class="f-input" :class="paddingInput">
    <div class="f-input__message">{{ message }}</div>
    <input :value="value" type="number" class="f-input__input" />
    <div class="f-input__unity">{{ unity }}</div>
    <div class="f-input__counter">
      <button @click="counterUp">
        <f-icon class="f-input__up" :name="iconUp"></f-icon>
      </button>
      <button @click="counterDown">
        <f-icon class="f-input__down" :name="iconDown"></f-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { FIcon } from '../FIcon'

export default {
  name: 'f-input-type',
  components: {
    FIcon
  },
  data: () => ({
    value: 0
  }),
  props: {
    name: {},
    type: {
      default: 'number',
      type: String
    },
    color: {
      type: String,
      default: 'primary'
    },
    iconUp: {
      type: String,
      default: 'keyboard_arrow_up'
    },
    iconDown: {
      type: String,
      default: 'keyboard_arrow_down'
    },
    message: {
      type: String,
      default: 'Demanda acima de:'
    },
    unity: {
      type: String,
      default: ''
    },
    fontSizeInput: {
      type: String,
      default: '2xl'
    },
    fontSizeUnity: {
      type: String,
      default: '2xl'
    },
    fontSizeMessage: {
      type: String,
      default: '2xl'
    },
    paddingX: {
      type: String,
      default: 'sm'
    }
  },
  computed: {
    paddingInput() {
      return `p-x--${this.paddingX}`
      // `br--${this.borderRadius}`,
      // `m--${this.margin}`,
      // `color--background--${this.bgColor}`,
      // `color--text--${this.textColor}`
    }
    // fontHeight() {
    //   ``
    // }
  },
  methods: {
    counterUp() {
      this.value++
    },
    counterDown() {
      this.value--
    },
    inputValue() {
      this.$emit('input-value', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.f-input {
  border: 1px solid var(--color-gray-500);
  border-radius: 5px;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  &__input {
    width: 100%;
    text-align: end;
    font-size: 40px;
    font-weight: 300;
  }

  &__message {
    white-space: nowrap;
  }

  &__unity {
    padding-top: 13px;
    border-right: 1px solid var(--color-gray-300);
    height: 34px;
    padding-right: 10px;
    font-size: 15px;
    font-weight: 300;
  }

  &__counter {
  }

  &__up {
    height: 32px;
    width: 32px;
  }

  &__down {
    height: 32px;
    width: 32px;
    font-size: 1.5rem;
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
