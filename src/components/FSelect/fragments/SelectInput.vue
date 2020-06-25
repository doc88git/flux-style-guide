<template>
  <div
    :class="rootClasses"
    @mouseenter="setHover(true)"
    @mouseleave="setHover(false)"
    @click="emitToggle"
  >
    <div :class="labelClasses">
      {{ label }}
    </div>

    <div class="SelectInput__content">
      <div v-show="displaySearch" class="SelectInput__search" @click.stop>
        <f-input
          class="SelectInput__searchInput"
          :placeholder="searchPlaceholder"
          name="searchField"
          :value="searchQuery"
          @input="emitSearch"
          @keyup.enter="emitInput"
        >
          <f-icon
            slot="append"
            size="base"
            lib="flux"
            name="search"
            color="gray-500"
          />
        </f-input>
      </div>

      <div v-show="displayAvatarRow" class="SelectInput__avatarRow">
        <avatar-list :avatars="currentValue || []" />
      </div>

      <div v-show="!displaySearch" class="SelectInput__placeholder">
        <template v-if="!displayAvatarRow">
          <div :class="placeholderClasses">
            <f-icon
              v-if="isNullSelected && nullOptionIcon"
              :name="nullOptionIcon"
              lib="flux"
              size="sm"
              color="primary"
              class="SelectItemGroup__ul__nullOption__icon"
            />

            {{ placeholderText }}
          </div>

          <f-chip
            v-if="numSelected"
            :label="numSelected"
            class="SelectInput__badge"
          />
        </template>

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
import { FChip } from '../../FChip'
import { FIcon } from '../../FIcon'
import { FInput } from '../../FField'

import AvatarList from './AvatarList'

export default {
  name: 'SelectInput',

  components: {
    FChip,
    FInput,
    FIcon,
    AvatarList
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
      type: [Object, Array],
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

    searchPlaceholder: {
      type: String,
      default: 'Pesquisar'
    },

    /**
     * The search query in case it is searchable
     */
    searchQuery: {
      type: String,
      default: ''
    },

    /**
     * Whether or not to show the selected option's pictures
     * (only works for `type="photo"`)
     */
    showSelectedPics: {
      type: Boolean,
      default: false
    },

    /**
     * Whether or not the null optionis selected
     */
    isNullSelected: {
      type: Boolean,
      default: false
    },

    /**
     * NullOption's label text
     */
    nullOptionText: {
      type: String,
      default: ''
    },

    /**
     * NullOption's icon, if any
     */
    nullOptionIcon: {
      type: String,
      default: ''
    }
  },

  data: () => ({ hover: false, badgeNumber: 10 }),

  computed: {
    displayAvatarRow() {
      if (
        !this.showSelectedPics ||
        !this.currentValue ||
        !Array.isArray(this.currentValue)
      )
        return

      return !this.displaySearch && !!(this.currentValue || []).length
    },

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
          'SelectInput__label--top':
            this.isActive || this.hasCurrentValue || this.isNullSelected,
          'SelectInput__label--active': !!this.numSelected || this.hover
        }
      ]
    },

    placeholderClasses() {
      return [
        'SelectInput__placeholderText',
        {
          'SelectInput__placeholderText--hide':
            this.isNullSelected || !this.label || this.hasCurrentValue
              ? false
              : !this.isActive,
          'SelectInput__placeholderText--active':
            this.hasCurrentValue || this.isNullSelected,
          'SelectInput__placeholderText--main': !this.label
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
      return this.isNullSelected ||
        this.hasCurrentValue ||
        this.isActive ||
        this.hover
        ? 'primary'
        : 'gray-500'
    },

    displaySearch() {
      return this.isActive && this.searchable
    },

    hasCurrentValue() {
      if (!this.currentValue) return

      return Array.isArray(this.currentValue)
        ? this.showSelectedPics && !!(this.currentValue || []).length
        : !!(this.currentValue || {})[this.displayBy]
    },
    placeholderText() {
      return this.hasCurrentValue
        ? this.currentValue[this.displayBy]
        : this.isNullSelected
        ? this.nullOptionText
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
    emitInput() {
      this.$emit('search-input', this.searchQuery)
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
    z-index: 10;

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
      background-color: var(--color-white);
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

  &__searchInput {
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

  &__avatarRow {
    width: 100%;
    flex-grow: 1;
  }

  &__placeholder {
    display: flex;
    align-items: center;
    flex-grow: 1;

    margin: auto 0;
    height: 100%;
    cursor: pointer;
  }

  &__placeholderText {
    display: flex;
    align-items: center;

    margin-right: auto;
    transition: opacity 400ms;
    user-select: none;
    color: #ccc;

    &--main {
      color: #999;
    }

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
