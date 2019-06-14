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
        <slot name="label">{{ label || "&nbsp;" }}</slot>
      </label>

      <div
        class="f-field__inner__field"
        :class="{
          'f-field__inner--hasAppend': $slots.append,
          'f-field__inner--hasError': hasError
        }"
      >
        <ValidationProvider
          :rules="rules"
          :name="name"
          tag="div"
          ref="ValidationProvider"
        >
          <template v-slot="validation">
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
              v-if="
                ($slots.hint || hint) && (!hasError && !validation.errors[0])
              "
              class="f-field__inner__hint"
            >
              <slot name="hint">{{ hint }}</slot>
            </div>

            <div
              v-if="validation.errors[0] || hasError"
              class="f-field__inner__error"
            >
              <slot name="error">
                {{
                  errorMessage ||
                    validation.errors[0] ||
                    "Há um erro neste campo"
                }}
              </slot>
            </div>
          </template>
        </ValidationProvider>
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
import { ValidationProvider } from "vee-validate";

export default {
  name: "f-field",
  components: {
    ValidationProvider
  },
  props: {
    label: {
      default: "",
      type: String
    },
    hasError: {
      default: false,
      type: Boolean
    },
    hint: String,
    name: String,
    rules: String,
    errorMessage: {
      default: "",
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.f-field {
  @apply flex flex-wrap w-full mb-6 mt-2;
  &__marginal {
    @apply h-20 items-end;
    transition: color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &__before {
    @apply flex flex-no-wrap items-center pr-4;
  }
  &__after {
    @apply flex flex-wrap;
    button {
      @apply mt-0 mb-0;
    }
  }
  &__inner {
    @apply w-auto relative;
    flex-grow: 10000;
    flex-shrink: 1;
    flex-basis: 0%;
    &__label {
      @apply block tracking-wide text-gray-700 font-bold mb-3;
    }
    &__hint {
      @apply block tracking-wide text-gray text-sm mb-2 mt-2;
    }
    &__error {
      @apply block tracking-wide text-red text-sm mb-2 mt-2;
    }
    &__input {
      @apply relative;
    }
    &__append {
      @apply h-8 absolute bottom-0 right-0 mb-4 z-10;
      button {
        @apply ml-0 mr-0 pl-2 pr-2;
      }
    }
    &--hasLabel {
      .f-field__inner__input {
        @apply pt-1 pb-1;
      }
    }
    &--hasError {
      input {
        @apply border border-red-500;
      }
    }
    &--hasAppend {
      input {
        @apply pr-12;
      }
    }
  }
}
</style>
