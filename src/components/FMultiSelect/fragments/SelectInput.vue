<template>
  <div
    :class="rootClasses"
    @mouseenter="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <div :class="labelClasses" @click.once="emitToggle">
      {{ label }}
    </div>
    <div class="SelectInput__content">
      <div v-if="displaySearch" class="SelectInput__search">
        <f-field class="SelectInput__field">
          <f-input
            class="SelectInput__input"
            placeholder="Pesquisar"
            name="searchField"
            :value="searchQuery"
            @input="emitSearch"
          />

          <f-icon
            slot="append"
            size="base"
            lib="flux"
            name="search"
            color="gray-500"
          />
        </f-field>
      </div>

      <div v-else class="SelectInput__placeholder" @click.once="emitToggle">
        <div :class="placeholderClasses">
          {{ placeholderText }}
        </div>

        <!-- <select-badge v-if="numSelected" :number="numSelected" /> -->
        <f-Chip
          v-if="numSelected"
          :label="numSelected"
          class="SelectInput__badge"
        />

        <f-icon
          clickable
          size="sm"
          lib="flux"
          name="chevron-down"
          :class="iconClasses"
          :color="iconColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import SelectBadge from './SelectBadge'
import { FChip } from '../../FChip'
import { FIcon } from '../../FIcon'
import { FField, FInput } from '../../FField'

export default {
  name: 'SelectInput',

  components: {
    // SelectBadge,
    FChip,
    FField,
    FInput,
    FIcon
  },

  props: {
    /**
     * The floating label to be displayed on the input
     */
    label: {
      type: String,
      default: ''
    },

    /**
     * The placeholder to be displayed when no value is selected and
     * the label is floating on the top
     */
    placeholder: {
      type: String,
      default: 'Selecionar'
    },

    /**
     * Current value to be displayed, in case it isn't a multiple select.
     */
    currentValue: {
      type: Object,
      default: () => ({})
    },

    /**
     * The property name to use as the currentValue's label.
     */
    displayBy: {
      type: String,
      required: true
    },

    /**
     * Whether the MultiSelect is active or not (whether the options list
     * is being displayed, basically)
     */
    isActive: {
      type: Boolean,
      default: false
    },

    /**
     * Number of selected items, if it is multiple.
     */
    numSelected: {
      type: Number,
      default: 0
    },

    /**
     * Whether or not it is searchable
     */
    searchable: {
      type: Boolean,
      default: false
    },

    /**
     * The search query in case it is searchable
     */
    searchQuery: {
      type: String,
      default: ''
    }
  },

  data: () => ({ hover: false, badgeNumber: 10 }),

  computed: {
    rootClasses() {
      return [
        'SelectInput',
        {
          'SelectInput--active': this.isActive
        }
      ]
    },

    labelClasses() {
      return [
        'SelectInput__label',
        {
          'SelectInput__label--top': this.isActive || this.hasCurrentValue,
          'SelectInput__label--active': !!this.numSelected || this.hover
        }
      ]
    },

    placeholderClasses() {
      return [
        'SelectInput__placeholderText',
        {
          'SelectInput__placeholderText--hide': this.hasCurrentValue
            ? false
            : !this.isActive,
          'SelectInput__placeholderText--active': this.hasCurrentValue
        }
      ]
    },

    iconClasses() {
      return [
        'SelectInput__placeholderIcon',
        {
          'SelectInput__placeholderIcon--rotate': this.isActive
        }
      ]
    },

    iconColor() {
      return this.hasCurrentValue || this.isActive || this.hover
        ? 'primary'
        : 'gray-500'
    },

    displaySearch() {
      return this.isActive && this.searchable
    },

    hasCurrentValue() {
      return !!(this.currentValue || {})[this.displayBy]
    },
    placeholderText() {
      return this.hasCurrentValue
        ? this.currentValue[this.displayBy]
        : this.placeholder
    }
  },

  methods: {
    emitToggle() {
      this.$emit('toggle-options')
    },
    emitSearch(query) {
      this.$emit('search', query)
    },
    setHover(value) {
      this.hover = value
    }
  }
}
</script>

<style lang="scss">
.SelectInput {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  z-index: 1;

  min-height: 48px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;

  &__badge {
    transform: translateX(-15px);
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    user-select: none;

    color: #999;
    font-size: var(--text-base);
    transition: top 200ms ease, font-size 200ms ease, left 200ms ease,
      padding 200ms ease;

    &--active,
    &--top {
      color: var(--color-primary);
    }

    &--top {
      top: -7px;
      left: 8px;
      font-size: var(--text-xs);
      padding: 0 5px;
      transform: translateY(0px);

      background-color: #fff;
    }
  }

  &__content {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &__search {
    height: 35px;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    animation: 500ms fadeIn;
  }

  &__field {
    height: 35px;

    .f-field__inner__field,
    .f-field__inner__input {
      height: 100%;
    }

    .f-field__inner__append {
      margin-right: 5px;
    }

    .f-input::placeholder {
      font-style: italic;
    }
  }

  &__placeholder {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &__placeholderText {
    margin-right: auto;
    transition: opacity 400ms;
    user-select: none;
    color: #ccc;

    &--hide {
      opacity: 0;
      transition: opacity 200ms;
    }

    &--active {
      color: var(--color-primary);
    }
  }

  &__placeholderIcon {
    display: flex;
    align-items: center;
    transition: transform 300ms;

    &--rotate {
      transform: rotate(180deg);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
