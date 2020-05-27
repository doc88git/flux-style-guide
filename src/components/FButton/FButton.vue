<template>
  <button
    class="btn"
    type="button"
    :class="[btnStyle]"
    @click="click"
    @click.stop="blur"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    :disabled="disabled"
  >
    <div class="btn__inner" :class="[btnInnerCenter]">
      <div class="btn__inner__icon" :class="[btnCenter]" v-if="icon">
        <f-icon :name="icon" lib="flux" :color="iconColor" />
      </div>
      <div v-if="label || $slots.default" class="btn__inner__content">
        <slot> {{ label }} </slot>
      </div>
    </div>
  </button>
</template>

<script>
import { FIcon } from '../FIcon'

export default {
  name: 'FButton',
  components: {
    FIcon
  },
  props: {
    outline: Boolean,
    flat: Boolean,
    small: Boolean,
    bigger: Boolean,
    dense: Boolean,
    label: String,
    disabled: Boolean,
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: true
    },
    textUppercase: {
      type: Boolean,
      default: true
    },
    textColor: String
  },
  computed: {
    hasName() {
      return this.label === ''
    },
    hasBg() {
      return !this.flat && !this.outline
    },
    btnStyle() {
      let btnDefault = {
        ['btn--default']: !this.flat && !this.outline,
        [`color--default--${this.color}`]: !this.flat && !this.outline
      }

      let btnFlat = {
        ['btn--flat']: this.flat === true,
        [`color--flat--${this.color}`]: !!this.color && this.flat
      }

      let btnOutline = {
        ['btn--outline']: this.outline === true,
        [`color--outline--${this.color}`]: !!this.color && this.outline
      }

      let btnRadius = {
        ['btn--noradius']: this.radius === false
      }

      return {
        ...btnDefault,
        ...btnOutline,
        ...btnFlat,
        ...btnRadius,
        ['btn--small']: this.small,
        ['btn--bigger']: this.bigger,
        ['btn--dense']: this.dense,
        ['btn--text-uppercase']: this.textUppercase,
        [`color--text--${this.textColor}`]: !!this.textColor
      }
    },
    btnCenter() {
      if (this.label || this.hasDefaultSlot) return ''
      return 'btn__inner__icon--center'
    },
    btnInnerCenter() {
      if (this.label || this.hasDefaultSlot) return ''
      return 'btn__inner--center'
    },
    hasDefaultSlot() {
      return !!this.$slots.default
    }
  },
  methods: {
    blur(e) {
      e.target.blur()
    },
    click(e) {
      this.$emit('click', e)
    },
    mouseover(e) {
      this.$emit('mouseover', e)
    },
    mouseleave(e) {
      this.blur(e)
      this.$emit('mouseleave', e)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/f-variables';

.btn {
  text-align: center;
  padding: 0.5rem 0.75rem;
  height: fit-content;
  margin: 0.25rem;
  border-radius: 0.25rem;
  width: auto;
  border: none;
  cursor: pointer;
  &:hover {
    outline: 0;
    opacity: 0.7;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    outline: 0;
  }

  &:disabled {
    opacity: 50%;
    cursor: default;
  }

  &--text-uppercase {
    text-transform: uppercase;
  }

  &--noradius {
    border-radius: 0px;
  }

  &--default {
    color: var(--color-white);
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }

  &--small {
    text-align: center;
    padding: 0.25rem 1.25rem;

    * {
      font-size: var(--text-sm);
    }
  }

  &--bigger {
    font-size: 1rem;
    height: 4rem;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    margin: 0.25rem;
    width: auto;
  }

  &--bigger-x {
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    height: 5rem;
    font-size: 1.25rem;
  }

  &--dense {
    padding: 0 0.5rem;
    margin: 0;
  }

  &--flat {
    background: transparent;
  }

  &--outline {
    color: var(--color-primary);
    border: 1px solid;
    border-radius: 0.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  @each $name, $color in $colors-theme {
    &.color--outline--#{$name} {
      color: var(--color-#{$name});
      border-color: var(--color-#{$name});
    }
  }

  &__inner {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    width: 100%;

    &--center {
      justify-content: center;
    }

    &__icon {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      padding: 0.5rem 0;
      &--center {
        margin-right: 0;
      }
    }

    &__content {
      height: 100%;
      text-align: center;
      width: 100%;
      letter-spacing: 1px;
    }
  }
}
</style>
