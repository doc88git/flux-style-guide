<template>
  <div class="f-field" rules="required|email" mode="eager">
    <div v-if="$slots.before" class="f-field__before f-field__marginal">
      <slot name="before"> </slot>
    </div>

    <div class="f-field__inner">
      <label class="f-field__inner__label">
        <slot name="label">{{ label || "&nbsp;" }}</slot>
      </label>

      <div
        class="f-field__inner__field"
        :class="{
          'f-field__inner--hasAppend': $slots.append,
          'f-field__inner--hasError': hasError
        }"
      >
        <ValidationProvider :rules="rules" tag="div" :name="name">
          <template v-slot="{ errors }">
            <slot />

            <div
              v-if="($slots.hint || hint) && (!hasError && !errors[0])"
              class="f-field__inner__hint"
            >
              <slot name="hint">{{ hint }}</slot>
            </div>

            <div v-if="errors[0] || hasError" class="f-field__inner__error">
              <slot name="error">
                {{ errorMessage || errors[0] || "Há um erro neste campo" }}
              </slot>
            </div>
          </template>
        </ValidationProvider>
      </div>

      <div
        v-if="$slots.append"
        class="f-field__inner__append f-field__marginal"
      >
        <slot name="append"> </slot>
      </div>
    </div>

    <div v-if="$slots.after" class="f-field__after f-field__marginal">
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
  },
  data: () => ({
    value: ""
  }),
  mounted() {
    console.log(this.errors);
  }
};
</script>

<style lang="scss" scoped>
.f-field {
  @apply flex flex-wrap w-full mb-6 mt-2;
  &__marginal {
    @apply h-20;
    transition: color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &__before {
    @apply flex flex-no-wrap items-center pr-4;
  }
  &__after {
    @apply flex flex-wrap items-end;
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
    &__append {
      @apply absolute top-0 right-0 h-8 mt-8;
      button {
        @apply ml-0 mr-0 pl-2 pr-2;
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

// @apply w-auto flex flex-wrap pt-12 pr-2 -ml-6 z-10;
</style>
