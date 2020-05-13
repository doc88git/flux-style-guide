<template>
  <div class="f-field">
    <div v-if="$slots.before" class="f-field__before">
      <slot name="before" />
    </div>

    <div :class="innerClasses">
      <div :class="innerFieldClasses">
        <label v-if="hasLabel" :class="innerLabelClasses">
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

      <div v-if="hasError" class="f-field__inner__error">
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
    hasError() {
      if (!this.$slots.error) return false

      let slotText = this.$slots.error
        .map(item => item.text)
        .join('')
        .trim()

      return !!slotText || !!this.errorMessage
    },
    hasLabel() {
      return !!this.$slots.label || !!this.label
    },
    innerClasses() {
      return ['f-field__inner', { 'f-field__inner--hasLabel': this.hasLabel }]
    },
    innerLabelClasses() {
      return [
        'f-field__inner__label',
        {
          'f-field__inner__label--top': this.isActive
        }
      ]
    },
    innerFieldClasses() {
      return [
        'f-field__inner__field',
        {
          'f-field__inner--hasAppend': this.$slots.append,
          'f-field__inner--hasError': this.hasError
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$fieldHeight: 48px;

.f-field {
  display: flex;
  flex-wrap: wrap;

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
      height: 48px;

      &:hover .f-field__inner__label {
        color: var(--color-primary);
      }
    }

    &__label {
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
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
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
      input {
        border: 1px solid var(--color-red);
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
