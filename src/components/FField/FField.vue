<template>
  <div class="f-field" rules="required|email" mode="eager">
    <div
      v-if="$slots.before"
      class="f-field__before "
      :class="{ 'f-field__marginal': $slots.label || label }"
    >
      <slot name="before"> </slot>
    </div>

    <div
      class="f-field__inner"
      :class="{
        'f-field__inner--hasLabel': $slots.label || label
      }"
    >
      <label v-if="$slots.label || label" class="f-field__inner__label">
        <slot name="label">{{ label || '&nbsp;' }}</slot>
      </label>

      <div
        class="f-field__inner__field"
        :class="{
          'f-field__inner--hasAppend': $slots.append,
          'f-field__inner--hasError': hasError
        }"
      >
        <div class="f-field__inner__input">
          <slot />
          <div
            v-if="$slots.append"
            class="f-field__inner__append"
            :class="{ 'f-field__marginal': $slots.label || label }"
          >
            <slot name="append"> </slot>
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
    </div>

    <div
      v-if="$slots.after"
      class="f-field__after"
      :class="{ 'f-field__marginal': $slots.label || label }"
    >
      <slot name="after"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'f-field',
  props: {
    label: {
      default: '',
      type: String
    },
    hint: String,
    rules: String,
    errorMessage: {
      default: '',
      type: String
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
    }
  }
}
</script>

<style lang="scss" scoped>
.f-field {
  display: flex;
  flex-wrap: wrap;
  &__marginal {
    height: 4.5rem;
    align-items: flex-end;
    transition: color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &__before {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding-right: 1rem;
  }
  &__after {
    flex-wrap: wrap;
    display: flex;
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
    &__label {
      display: block;
      letter-spacing: 0.025em;
      font-weight: 700;
      color: var(--color-gray-700);
    }
    &__hint {
      display: block;
      letter-spacing: 0.025em;
      font-size: var(--text-sm);
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: var(--color-gray);
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
      .f-field__inner__input {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
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
