<template>
  <div class="checkbox">
    <label :for="id">
      <input
        type="checkbox"
        class="f-checkbox"
        :id="id"
        :value='value'
        :disabled="isDisabled"
        :label="label"
        @change="$emit('checkbox', $event.target.checked)"  
        hidden
      >
      <span class="f-checkbox__custom">
        <f-icon name="check" class="f-checkbox__custom__icon"></f-icon>
      </span>
      <slot name="label"></slot>
    </label>

  </div>
</template>

<script>
import FIcon from '../FIcon/FIcon.vue'
export default {
  name: "f-checkbox",
  components: { FIcon },
  props: {
    color: {
      type: String
    },
    id: {
      type: [Number, String]
    },
    filled: {
      type: Boolean
    },
    value: {
      type: String,
      default: 'Termos'
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
        transform: scale(.9);

        &--base {
          @apply text-xl;
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