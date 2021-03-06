<template>
  <component
    :is="componentIs"
    :type="type"
    :class="classes"
    :disabled="disabled"
    :readonly="readonly"
    :name="name"
    v-html="['textarea'].includes(type) && value"
    v-bind="[$attrs, $props]"
    @input="runMask"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @keyup="$emit('keyup', $event)"
    class="f-input"
    ref="input"
  />
</template>

<script>
import MaskMixin from '../../mixins/mask.js'

export default {
  name: 'f-input',
  components: {},
  mixins: [MaskMixin],
  data() {
    return {
      innerValue: this.__getInitialMaskedValue()
    }
  },
  props: {
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    name: {
      default: '',
      type: String,
      required: true
    },
    type: {
      default: 'text',
      type: String,
      validator: val =>
        [
          'text',
          'password',
          'tel',
          'url',
          'email',
          'textarea',
          'number'
        ].includes(val)
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  watch: {
    value: {
      handler(newValue, oldValue) {
        if (
          newValue !== oldValue &&
          (newValue === '' || (newValue === null && this.$refs.input))
        ) {
          this.$refs.input.value = newValue
        }
      }
    }
  },
  computed: {
    componentIs() {
      return this.isTextarea ? 'textarea' : 'input'
    },
    isTextarea() {
      return this.type === 'textarea'
    },
    classes() {
      return {
        'f-input': true,
        'f-input__textarea': this.type === 'textarea',
        'f-input--readonly': this.readonly,
        'f-input--disabled': this.disabled
      }
    }
  },
  methods: {
    runMask(e) {
      let value = e.target.value

      if (this.mask && !this.isTextarea) return this.__updateMaskValue(value)

      this.__emitValue(value)
    },
    __emitValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.f-input {
  border-width: 1px;
  border-radius: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: var(--color-font-base);
  line-height: 1.25;
  height: 100%;
  display: inline;
  width: 100%;

  &:focus {
    outline: 0;
    border-color: var(--color-primary);
  }
  &:hover {
    border-color: var(--color-primary);
  }
  &__textarea {
    width: 100%;
  }
  &--hasError {
    border-width: 1px;
    border-color: #f56565;
  }
  &--readonly {
    color: var(--color-gray-300);
  }
  &--disabled {
    color: var(--color-gray-300);
  }
}
</style>
