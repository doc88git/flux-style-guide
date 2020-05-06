<template>
  <div class="SelectItemGroup">
    <div
      :class="clearItemClasses"
      @mouseenter="setHover(true)"
      @mouseleave="setHover(false)"
      @click="emitClear"
    >
      <f-icon name="X" lib="flux" size="sm" :color="clearIconColor" />
      <span class="SelectItemGroup__clear__text">Limpar seleção</span>
    </div>

    <ul :class="ulClasses">
      <li
        v-for="(option, index) in options"
        :key="option[trackBy]"
        class="SelectItemGroup__ul__li"
      >
        <slot name="option" v-bind="{ option, index }" />
      </li>
    </ul>
  </div>
</template>

<script>
import { FIcon } from '../../FIcon'

export default {
  name: 'SelectItemGroup',

  components: { FIcon },

  props: {
    /**
     * Array of options to be displayed
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Whether or not the display the "Clear selection" section
     */
    displayClear: {
      type: Boolean,
      default: false
    },
    /**
     * The property to use as the option's trackBy value
     */
    trackBy: {
      type: String,
      required: true
    }
  },

  data: () => ({ hover: false }),

  computed: {
    clearItemClasses() {
      return [
        'SelectItemGroup__clear',
        {
          'SelectItemGroup__clear--hide': !this.displayClear
        }
      ]
    },
    ulClasses() {
      return [
        'SelectItemGroup__ul',
        {
          'SelectItemGroup__ul--has-selected': this.displayClear
        }
      ]
    },
    clearIconColor() {
      return this.hover ? 'red-500' : 'gray-500'
    }
  },

  methods: {
    setHover(value) {
      this.hover = value
    },
    emitClear() {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss">
.SelectItemGroup {
  width: 100%;
  max-height: calc(100% - 1px);
  z-index: 10;

  &__clear {
    display: flex;
    align-items: center;
    color: var(--color-gray-500);

    height: 12px;
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 10px;
    margin-left: 15px;
    transition: height 300ms ease, margin 300ms, opacity 100ms;

    &--hide {
      opacity: 0;
      height: 0px;
      margin: 0px;
    }

    &:hover {
      color: var(--color-red-500);
    }

    &__text {
      margin-left: 8px;
      font-size: 10.5px;
      user-select: none;
    }
  }

  &__ul {
    height: 100%;
    overflow-y: auto;

    margin-right: 5px;

    &--has-selected {
      height: calc(100% - 22px);
    }

    &::-webkit-scrollbar {
      background: #f0f0f0;
      border-radius: 12px;
      width: 5px;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 12px;
      width: 5px;
    }

    &::-webkit-scrollbar-corner {
      border-radius: 10px;
    }
  }
}
</style>
