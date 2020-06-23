<template>
  <div :class="rootClasses">
    <div v-if="$slots.before" class="f-field__before">
      <slot name="before" />
    </div>

    <div :class="innerClasses">
      <div :class="innerFieldClasses">
        <label
          v-if="hasLabel"
          :class="innerLabelClasses"
          @click="delegateFocus"
        >
          <slot name="label">{{ label || '&nbsp;' }}</slot>
        </label>

        <div class="f-field__inner__input">
          <slot />
          <div v-if="$slots.append" class="f-field__inner__append">
            <slot name="append" />
          </div>
        </div>
      </div>

      <div
        v-if="($slots.hint || hint) && !hasError"
        class="f-field__inner__hint"
      >
        <slot name="hint">{{ hint }}</slot>
      </div>

      <div v-if="$slots.error || hasError" :class="errorClasses">
        <slot name="error">
          {{ errorMessage || 'Há um erro neste campo' }}
        </slot>
      </div>
    </div>

    <div v-if="$slots.after" class="f-field__after">
      <slot name="after" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'f-field',

  props: {
    /**
     * The field's label
     */
    label: {
      type: String,
      default: ''
    },

    /**
     * Wether or not the input has a value
     */
    isActive: {
      type: Boolean,
      default: false
    },

    labelStyle: {
      type: String,
      default: 'standard',
      validator: v => ['floating', 'standard'].includes(v)
    },

    /**
     * The hint text to display below the field
     */
    hint: {
      type: String,
      default: ''
    },

    /**
     * The error message to be displayed for validation.
     */
    errorMessage: {
      type: String,
      default: ''
    }
  },

  computed: {
    isLabelFloated() {
      return ['floating'].includes(this.labelStyle)
    },
    hasError() {
      const getSlotErrorText = () => {
        if (!this.$slots.error) return ''

        return this.$slots.error
          .map(item => item.text)
          .join('')
          .trim()
      }

      return getSlotErrorText() || !!this.errorMessage
    },
    hasLabel() {
      return !!this.$slots.label || !!this.label
    },
    rootClasses() {
      return ['f-field', { 'f-field--isActive': this.isActive }]
    },
    innerClasses() {
      return [
        'f-field__inner',
        {
          'f-field__inner--hasLabel': this.hasLabel,
          'f-field__inner--floatingLabel': this.isLabelFloated
        }
      ]
    },
    innerLabelClasses() {
      return [
        'f-field__inner__label',
        {
          'f-field__inner__label--standard': !this.isLabelFloated,
          'f-field__inner__label--floating': this.isLabelFloated,
          'f-field__inner__label--floating--top':
            this.isLabelFloated && this.isActive
        }
      ]
    },
    innerFieldClasses() {
      return [
        'f-field__inner__field',
        {
          'f-field__inner__field--floatingLabel': this.isLabelFloated,
          'f-field__inner--hasAppend': this.$slots.append,
          'f-field__inner--hasError': this.hasError
        }
      ]
    },
    errorClasses() {
      return [
        'f-field__inner__error',
        {
          'f-field__inner__error--hasError': this.hasError
        }
      ]
    }
  },

  methods: {
    delegateFocus() {
      const slotEl = this.$slots.default[1]
      if (!slotEl) return

      slotEl.elm.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
$fieldHeight: 48px;

.f-field {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 0;
  transition: z-index 0ms ease 300ms;

  &--isActive {
    z-index: 1;
    transition: z-index 0ms ease 0ms;
  }

  &__before {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding-right: 1rem;

    height: $fieldHeight;
  }

  &__after {
    flex-wrap: wrap;
    display: flex;
    align-items: center;

    height: $fieldHeight;

    button {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &__inner {
    width: auto;
    position: relative;
    max-width: 100%;
    flex-grow: 10000;
    flex-shrink: 1;
    flex-basis: 0%;

    &__field {
      position: relative;

      &--floatingLabel {
        height: $fieldHeight;

        &:hover .f-field__inner__label {
          color: var(--color-primary);
        }
      }
    }

    &__label {
      &--standard {
        display: block;
        letter-spacing: 0.025em;
        font-weight: 700;
        color: var(--color-font-base);
        margin-bottom: 10px;
      }

      &--floating {
        position: absolute;
        z-index: 20;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        user-select: none;

        color: var(--color-gray);
        font-size: var(--text-base);
        transition: top 200ms ease, font-size 200ms ease, left 200ms ease,
          padding 200ms ease;

        &--active,
        &--top {
          color: var(--color-primary);
        }

        &--top {
          top: -7px;
          left: 8px;
          font-size: var(--text-xs);
          padding: 0 5px;
          transform: translateY(0px);

          background-color: #fff;
        }
      }
    }

    &__hint {
      display: block;
      letter-spacing: 0.025em;
      font-size: var(--text-sm);
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: var(--color-font-base);
    }

    &__error {
      display: block;
      letter-spacing: 0.025em;
      color: var(--color-red);
      font-size: 0.875rem;
      margin: 0;

      &--hasError {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
    }

    &__input {
      position: relative;
      z-index: 10;
      height: 100%;
    }

    &__append {
      right: 4.85px;
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      bottom: 0;
      z-index: 10;

      button {
        margin-left: 0;
        margin-right: 0;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }

    &--hasLabel {
      .f-field__inner__input ::placeholder {
        display: none;
        visibility: hidden;
      }
    }

    &--hasError {
      &--floatingLabel {
        input {
          border: 1px solid var(--color-red);
        }
      }
    }

    &--hasAppend {
      input {
        padding-right: 3rem;
      }
    }
  }
}
</style>
