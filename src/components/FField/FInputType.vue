<template>
  <div
    class="f-input"
    :class="[
      paddingInput,
      contentBbColor,
      contentBorderColor,
      colorText,
      borderRadiusContent
    ]"
  >
    <div class="f-input__message">{{ message }}</div>
    <input
      :value="value"
      type="number"
      class="f-input__input"
      :class="colorText"
      @keydown.up="counterUp($event)"
      @keydown.down="counterDown($event)"
    />
    <div class="f-input__unity">{{ unity }}</div>
    <div class="f-input__counter">
      <button @click="counterUp" :class="colorButton">
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

function precision(a) {
  if (!isFinite(a)) return 0
  var e = 1,
    p = 0
  while (Math.round(a * e) / e !== a) {
    e *= 10
    p++
  }
  return p
}

export default {
  name: 'f-input-type',
  components: {
    FIcon
  },
  data: () => ({
    value: 0
  }),
  props: {
    type: {
      type: String,
      default: 'number'
    },
    bgColorContent: {
      type: String,
      default: 'white'
    },
    borderColorContent: {
      type: String,
      default: 'gray-500'
    },
    buttonColor: {
      type: String,
      default: 'white'
    },
    textColor: {
      type: String,
      default: 'font-base'
    },
    borderRadius: {
      type: String,
      default: 'base'
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
    fontWeightInput: {
      type: String,
      default: '2xl'
    },
    fontWeightUnity: {
      type: String,
      default: '2xl'
    },
    fontWeightMessage: {
      type: String,
      default: '2xl'
    },
    paddingX: {
      type: String,
      default: 'sm'
    },
    newValue: {
      type: Number,
      default: null
    },
    sum: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    this.checkPropValue()
  },
  computed: {
    paddingInput() {
      return `p-x--${this.paddingX}`
    },
    messageFontSize() {
      return `text-size--${this.fontSizeMessage}`
    },
    inputFontSize() {
      return `text-size--${this.fontSizeInput}`
    },
    unityFontSize() {
      return `text-size--${this.fontSizeUnity}`
    },
    messageFontWeight() {
      return `text-weight--${this.fontWeightMessage}`
    },
    inputFontWeight() {
      return `text-weight--${this.fontWeightInput}`
    },
    unityFontWeight() {
      return `text-weight--${this.fontWeightUnity}`
    },
    colorText() {
      return `color--text--${this.textColor}`
    },
    contentBbColor() {
      return `color--background--${this.bgColorContent}`
    },
    contentBorderColor() {
      return `color--border--${this.borderColorContent}`
    },
    borderRadiusContent() {
      return `br--${this.borderRadius}`
    },
    colorButton() {
      return `color--background--${this.buttonColor}`
    }
  },
  methods: {
    counterUp(e) {
      e.preventDefault()
      this.value = parseFloat(
        (this.value + this.sum).toFixed(precision(this.sum))
      )
      this.inputValue()
    },
    counterDown(e) {
      e.preventDefault()
      this.value = parseFloat(
        (this.value - this.sum).toFixed(precision(this.sum))
      )
      this.inputValue()
    },
    inputValue() {
      this.$emit('input', this.value)
    },
    checkPropValue() {
      if (this.newValue != null) this.value = this.newValue
    }
  }
}
</script>

<style lang="scss" scoped>
.f-input {
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
    background-color: transparent;
    outline: none;
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
    background-color: transparent;
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
