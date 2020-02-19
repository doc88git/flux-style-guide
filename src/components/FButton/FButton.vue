<template>
  <component
    :is="componentType"
    class="btn"
    type="button"
    :class="btnStyle"
    :disabled="disabled"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <div class="btn__inner" :class="btnInnerCenter">
      <div class="btn__inner__icon" :class="btnCenter" v-if="icon">
        <f-icon :name="icon" />
      </div>
      <div v-if="hasContent" class="btn__inner__content">
        <slot> {{ label }} </slot>
      </div>
    </div>
  </component>
</template>

<script>
import { FIcon } from '../FIcon'

export default {
  name: 'FButton',
  components: {
    FIcon
  },
  props: {
    link: Boolean,
    outline: Boolean,
    flat: Boolean,
    small: Boolean,
    bigger: Boolean,
    dense: Boolean,
    label: String,
    disabled: Boolean,
    icon: String,
    color: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: true
    },
    textColor: String
  },
  computed: {
    componentType() {
      return this.link ? 'a' : 'button'
    },
    hasDefaultSlot() {
      return !!this.$slots.default
    },
    hasContent () {
      return !!this.label || !!this.hasDefaultSlot
    },
    hasName() {
      return this.label === ''
    },
    hasBg() {
      return !this.flat && !this.outline
    },
    btnColors () {
      return {
        [`color--text--${this.textColor}`]: !!this.textColor,
        [`color--flat--${this.color}`]: !!this.color && this.flat,
        [`color--outline--${this.color}`]: !!this.color && this.outline,
        [`color--default--${this.color}`]: !!this.color && !this.flat && !this.outline,
      }
    },
    btnSize () {
      return {
        ['btn--small']: this.small,
        ['btn--bigger']: this.bigger
      }
    },
    btnBox () {
      return {
        ['btn--default']: !this.flat && !this.outline,
        ['btn--outline']: this.outline,
        ['btn--flat']: this.flat,
        ['btn--dense']: this.dense,
        ['btn--noradius']: !this.radius
      }
    },
    btnStyle() {
      return [{ ...this.btnColors, ...this.btnSize, ...this.btnBox }]
    },
    btnCenter() {
      return this.hasContent ? '' : ['btn__inner__icon--center']
    },
    btnInnerCenter() {
      return this.hasContent ? '' : ['btn__inner--center']
    },
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-flex;
  align-items: center;

  text-align: center;
  padding: 0.5rem 0.75rem;
  height: fit-content;
  margin: 0.25rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
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
