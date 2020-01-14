<template>
  <label :for="id" class="f-checkbox__wrapper">
    <input
      type="checkbox"
      class="f-checkbox"
      :id="id"
      :checked="checked"
      :disabled="isDisabled"
      :label="label"
      @change="$emit('change', $event.target.checked)"
      hidden
    />
    <span class="f-checkbox__custom">
      <f-icon name="check" class="f-checkbox__custom__icon"></f-icon>
    </span>
    <div class="f-checkbox__label" v-if="$slots.label">
      <slot name="label"></slot>
    </div>
  </label>
</template>

<script>
import FIcon from '../FIcon/FIcon.vue'
export default {
  name: 'f-checkbox',
  components: { FIcon },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    id: {
      type: [Number, String]
    },
    checked: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.f-checkbox {
  display: inline-flex;
  appearance: none;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__custom {
    cursor: pointer;
    height: 15px;
    width: 15px;
    background-color: transparent;
    border-radius: 3px;
    display: inline-flex;
    border: 1px solid #cdcdcd;
    position: relative;

    &:hover {
      border: 1px solid black;
    }

    .f-icon {
      opacity: 0;
      color: lightseagreen;
      transform: scale(0.9);

      &--base {
        font-size: var(--text-xl);
      }
    }
  }

  &:checked {
    ~ .f-checkbox__custom {
      border: 1px solid lightseagreen;
      .f-icon {
        opacity: 1;
      }
    }
  }
}

.f-checkbox--gray {
  .f-checkbox__custom {
    background-color: #ccc;
    border: 1px solid #cdcdcd;

    &:hover {
      border: 1px solid transparent;
      background: darken(#ccc, 20%);
    }

    .f-icon {
      color: lightseagreen;
      &__label {
        display: flex;
        align-items: center;
        margin-left: 7px;
      }
    }
  }

  .f-checkbox--gray {
    .f-checkbox__custom {
      background-color: #ccc;
      border: 1px solid #cdcdcd;

      &:hover {
        border: 1px solid transparent;
        background: darken(#ccc, 20%);
      }
    }

    .f-icon {
      color: lightseagreen;
    }
  }

  .f-checkbox {
    &:checked {
      ~ .f-checkbox__custom {
        background: lightseagreen;
        border: 1px solid transparent;
        .f-icon {
          color: #fff;
        }
      }
    }
  }
}
</style>
