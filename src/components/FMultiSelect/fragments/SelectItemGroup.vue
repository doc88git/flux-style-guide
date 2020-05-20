<template>
  <div class="SelectItemGroup">
    <div
      :class="clearItemClasses"
      @mouseenter="setHover('clear', true)"
      @mouseleave="setHover('clear', false)"
      @click="emitClear"
    >
      <f-icon name="X" lib="flux" size="sm" :color="clearIconColor" />
      <span class="SelectItemGroup__clear__text">Limpar seleção</span>
    </div>

    <div
      :class="selectAllItemClasses"
      @mouseenter="setHover('selectAll', true)"
      @mouseleave="setHover('selectAll', false)"
      @click="emitSelectAll"
    >
      <f-icon name="check" lib="flux" size="sm" :color="selectAllIconColor" />
      <span class="SelectItemGroup__select-all__text">Selecionar todos</span>
    </div>

    <ul :class="ulClasses">
      <li
        v-for="(option, index) in options"
        :key="getItemKey(option)"
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
     * Whether or not the display the "Select all" section
     */
    selectAll: {
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

  data: () => ({
    hover: {
      clear: false,
      selectAll: false
    }
  }),

  computed: {
    clearItemClasses() {
      return [
        'SelectItemGroup__clear',
        {
          'SelectItemGroup__clear--hide': !this.displayClear
        }
      ]
    },
    selectAllItemClasses() {
      return [
        'SelectItemGroup__select-all',
        {
          'SelectItemGroup__select-all--hide': !this.selectAll
        }
      ]
    },
    ulClasses() {
      return [
        'SelectItemGroup__ul',
        {
          'SelectItemGroup__ul--has-selected':
            this.displayClear || this.selectAll
        }
      ]
    },
    clearIconColor() {
      return this.hover.clear ? 'red-500' : 'gray-500'
    },
    selectAllIconColor() {
      return this.hover.selectAll ? 'primary' : 'gray-500'
    }
  },

  methods: {
    setHover(item, value) {
      this.hover[item] = value
    },
    emitClear() {
      this.$emit('clear')
    },
    getItemKey(item) {
      return JSON.stringify(item[this.trackBy])
    },
    emitSelectAll() {
      this.$emit('select-all')
    }
  }
}
</script>

<style lang="scss">
.SelectItemGroup {
  width: 100%;
  max-height: calc(100% - 1px);
  z-index: 10;

  &__select-all,
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
      display: none;
      opacity: 0;
      height: 0px;
      margin: 0px;
    }

    &__text {
      margin-left: 8px;
      font-size: var(--text-sm);
      user-select: none;
    }
  }

  &__select-all {
    &:hover {
      color: var(--color-primary);
    }
  }

  &__clear {
    &:hover {
      color: var(--color-red-500);
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
