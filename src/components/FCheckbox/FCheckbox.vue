<template>
  <div class="f-checkbox">
    <label :for="id">
      <input
        type="checkbox"
        class="f-checkbox"
        :id="id"
        :value='value'
        :disabled="isDisabled"
        :label="label"
        :checked="checked"
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
    &__custom {
      cursor: pointer;
      height: 15px;
      width: 15px;
      background-color: transparent;
      border-radius: 3px;
      transition: all .1s ease-in-out;
      display: inline-flex;
      border: 1px solid #cdcdcd;
      position: relative;

      &:hover {
        border: 1px solid black;
      }

      .f-icon {
        opacity: 0;
        transition: all .2s ease-in-out;
        color: lightseagreen
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
</style>