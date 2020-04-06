<template>
  <div
    class="f-input-type"
    :class="[paddingInput, contentBbColor, contentBorderColor, colorText]"
    :disabled="disabled"
  >
    <div class="f-input-type__message" :class="[messageFontSize, colorText]">
      {{ message }}
    </div>
    <input
      :type="type"
      v-model="value"
      :disabled="disabled"
      :placeholder="placeHolder"
      class="f-input-type__input"
      :class="[colorText, inputFontSize, inputFontWeight]"
    />
    <div class="f-input-type__unity" :class="[unityFontSize, colorText]">
      {{ unity }}
    </div>
    <div class="f-input-type__counter">
      <f-button
        :class="colorButton"
        class="f-input-type__button"
        @click="counterUp"
        flat
        :icon="iconUp"
      ></f-button>
      <f-button
        class="f-input-type__button"
        @click="counterDown"
        :class="colorButton"
        flat
        :icon="iconDown"
      ></f-button>
    </div>
  </div>
</template>

<script>
import { FButton } from '../FButton'

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
    FButton
  },
  data: () => ({
    value: 0,
    timeout: null
  }),
  watch: {
    value: {
      handler() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.$emit('input', this.value)
          clearTimeout(this.timeout)
        }, parseInt(this.delay))
      }
    }
  },

  props: {
    type: {
      type: String,
      default: 'number'
    },
    delay: {
      type: [String, Number],
      default: 500
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
    iconUp: {
      type: String,
      default: 'chevron-up'
    },
    iconDown: {
      type: String,
      default: 'chevron-down'
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
      default: 'Valor'
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
    },
    counterDown(e) {
      e.preventDefault()
      const p = this.getPrecision
      this.value = parseFloat((this.value - this.sum).toFixed(p))
    },
    checkPropValue() {
      if (this.newValue != null) this.value = this.newValue
    }
  }
}
</script>

<style lang="scss" scoped>
.f-input-type {
  border-width: 1px;
  border-radius: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: var(--color-font-base);
  line-height: 1.25;
  height: auto;
  display: flex;
  width: 100%;
  align-items: center;
  overflow: hidden;

  &__input {
    width: 100%;
    text-align: end;
    background-color: transparent;
    outline: none;
  }

  &__button {
    padding: 0;
    margin: 0;
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
    margin-right: 8px;
  }

  &__counter {
    display: grid;
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
