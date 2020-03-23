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
    :disabled="disabled"
  >
    <div class="f-input__message" :class="[messageFontSize, colorText]">
      {{ message }}
    </div>
    <input
      :disabled="disabled"
      :value="value"
      :placeholder="placeHolder"
      class="f-input__input"
      :class="[colorText, inputFontSize, inputFontWeight]"
      @keydown.up="counterUp($event)"
      @keydown.down="counterDown($event)"
    />
    <div class="f-input__unity" :class="[unityFontSize, colorText]">
      {{ unity }}
    </div>
    <div class="f-input__counter">
      <button @click="counterUp" :class="colorButton" :name="iconUp">
        <f-icon class="f-input__up" :name="iconUp"></f-icon>
      </button>
      <button @click="counterDown" :name="iconDown">
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
      default: '%'
    },
    fontSizeInput: {
      type: String,
      default: '5xl'
    },
    fontSizeUnity: {
      type: String,
      default: 'xl'
    },
    fontSizeMessage: {
      type: String,
      default: 'base'
    },
    fontWeightInput: {
      type: String,
      default: 'light'
    },
    fontWeightUnity: {
      type: String,
      default: 'base'
    },
    fontWeightMessage: {
      type: String,
      default: 'base'
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
    },
    placeHolder: {
      type: String,
      default: 'Placeholder'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    numberType: {
      type: String,
      default: 'float',
      validator: val => ['int', 'float'].includes(val)
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
    },
    getPrecision() {
      return this.numberType === 'int' ? precision(this.sum) : 2
    }
  },
  methods: {
    counterUp(e) {
      e.preventDefault()
      const p = this.getPrecision
      this.value = parseFloat((this.value + this.sum).toFixed(p))
      this.inputValue()
    },
    counterDown(e) {
      e.preventDefault()
      const p = this.getPrecision
      this.value = parseFloat((this.value - this.sum).toFixed(p))
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
