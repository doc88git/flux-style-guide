<template>
  <f-field :is-active="displayOptions" v-bind="$attrs">
    <template v-for="slotName in fieldSlots" :slot="slotName">
      <slot v-if="$slots[slotName]" :name="slotName" />
    </template>

    <select-accordion
      class="FMultiSelect"
      :show-content="displayOptions"
      :is-active="hasValue || nullOptionSelected"
      @close="hideOptions"
    >
      <select-input
        slot="header"
        :is-active="displayOptions"
        :search-query="searchQuery"
        :current-value="currentValue"
        :display-by="displayBy"
        :num-selected="itemsSelected"
        :is-null-selected="nullOptionSelected && displayNullOption"
        :null-option-text="nullOptionText"
        :null-option-icon="nullOptionIcon"
        :show-selected-pics="['photo'].includes(type)"
        :label="label"
        v-bind="$attrs"
        v-on="$listeners"
        @toggle-options="toggleOptions"
        @search="search"
      />

      <select-item-group
        slot="content"
        :display-null-option="displayNullOption"
        :is-null-selected="nullOptionSelected"
        :null-option-text="nullOptionText"
        :null-option-icon="nullOptionIcon"
        :options="optionsByQuery"
        :display-clear="displayClearList"
        :select-all="displaySelectAll"
        :track-by="trackBy"
        @clear="clearValues"
        @select-all="setSelectAll"
        @toggle-null-option="toggleNullOption"
      >
        <slot
          v-if="$slots['list-prepend']"
          slot="list-prepend"
          name="list-prepend"
        />

        <template v-slot:option="{ option, index }">
          <slot
            name="option"
            v-bind="{ option, index, isSelected: isOptionSelected(option) }"
          >
            <component
              :is="optionComponent"
              :option="option"
              :index="index"
              :is-selected="isOptionSelected(option)"
              :display-by="displayBy"
              :track-by="trackBy"
              @input="addItem"
              @remove="removeItem"
            >
              <slot
                name="option-prepend"
                slot="prepend"
                v-bind="{ option, index, isSelected: isOptionSelected(option) }"
              />

              <slot
                name="option-append"
                slot="append"
                v-bind="{ option, index, isSelected: isOptionSelected(option) }"
              />
            </component>
          </slot>
        </template>
      </select-item-group>
    </select-accordion>
  </f-field>
</template>

<script>
import { FField } from '../FField'

import SelectAccordion from './fragments/SelectAccordion'
import SelectItemGroup from './fragments/SelectItemGroup'
import SelectInput from './fragments/SelectInput'

import SelectItem from './items/SelectItem'
import SelectItemCheck from './items/SelectItemCheck'
import SelectItemPhoto from './items/SelectItemPhoto'

const normalizeString = value =>
  value.normalize('NFD').replace(/[\u0300-\u036F]/g, '')

const matches = (word, words) => {
  if (!word) return

  const normalizedWords = normalizeString(words)
  const regularSplit = words.split(word).length - 1
  const noAccentsSplit = normalizedWords.split(word).length - 1
  return regularSplit || noAccentsSplit
}

const is = (value, constructor) => {
  return Object.prototype.toString.call(value) === `[object ${constructor}]`
}

let intTimeout = 0

export default {
  name: 'FSelect',

  components: {
    FField,
    SelectAccordion,
    SelectItemGroup,
    SelectInput,

    SelectItem,
    SelectItemCheck,
    SelectItemPhoto
  },

  props: {
    /**
     * Current value, must be an array if it is multiple
     */
    value: {
      required: true
    },

    /**
     * The field's label
     */
    label: {
      type: String,
      default: ''
    },

    /**
     * Array of Option objects.
     */
    options: {
      type: Array,
      default: () => []
    },

    /**
     * Defines the variation of the MultiSelect item's
     */
    type: {
      type: String,
      default: 'base',
      validator: v => ['photo', 'check', 'base'].includes(v)
    },

    /**
     * Defines the property of the option object to use to be
     * displayed as the label
     */
    displayBy: {
      type: String,
      default: 'label'
    },

    /**
     * Defines the property of the option object to select all items
     */
    selectAll: {
      type: Boolean,
      default: false
    },

    /**
     * Defines the property of the option object to use as the value
     */
    trackBy: {
      type: String,
      default: 'value'
    },

    /**
     * Whether or not the select is multiple.
     */
    multiple: {
      type: Boolean,
      default: true
    },

    /**
     * Emit search to parent.
     */
    searchRequest: {
      type: Boolean,
      default: false
    },

    /**
     * Whether or not to display an option to indicate that the field will be empty
     */
    displayNullOption: {
      type: Boolean,
      default: false
    },

    /**
     * NullOption's icon, if any
     */
    nullOptionIcon: {
      type: String,
      default: ''
    },

    /**
     * NullOption's label text
     */
    nullOptionText: {
      type: String,
      default: 'Nenhum'
    }
  },

  data() {
    return {
      nullOptionSelected: false,
      displayOptions: false,
      sortedOptions: [],
      searchQuery: ''
    }
  },

  computed: {
    itemsSelected() {
      return this.multiple ? (this.value || []).length : 0
    },
    hasValue() {
      return this.multiple
        ? !!(this.value || []).length
        : this.value !== null && this.value !== undefined && !!this.value
    },
    currentValue() {
      if (this.multiple)
        return this.options.filter(option =>
          (this.value || [])
            .map(v => JSON.stringify(v))
            .includes(JSON.stringify(option[this.trackBy]))
        )

      return this.value
        ? this.options.find(
            opt =>
              JSON.stringify(opt[this.trackBy]) === JSON.stringify(this.value)
          )
        : null
    },
    optionsByQuery() {
      if (!this.searchQuery) return this.sortedOptions

      const words = this.searchQuery.trim().split(' ')
      const options = this.sortedOptions.filter(({ label }) =>
        words.every(word => matches(word.toLowerCase(), label.toLowerCase()))
      )

      return options
    },
    optionComponent() {
      const optionTypes = {
        photo: 'select-item-photo',
        check: 'select-item-check',
        base: 'select-item'
      }

      return optionTypes[this.type]
    },
    displayClearList() {
      return this.multiple && !!(this.value || []).length
    },
    displaySelectAll() {
      if (!this.multiple || this.searchQuery) return false
      return !this.displayClearList && this.selectAll
    },
    fieldSlots() {
      return ['before', 'after', 'label', 'append', 'error', 'hint']
    }
  },

  watch: {
    displayOptions(display) {
      this.searchQuery = ''

      if (display) this.sortOptions()
      else this.emitBlur()
    },
    searchQuery: 'debounceInput',
    options: 'setSortedOptions'
  },

  methods: {
    setSortedOptions() {
      this.sortedOptions = JSON.parse(JSON.stringify(this.options || []))
    },
    addItem(item) {
      if (this.nullOptionSelected) this.nullOptionSelected = false

      if (this.multiple)
        return this.$emit('input', [...(this.value || []), item])

      this.$emit('input', item)

      this.displayOptions = this.multiple
        ? this.displayOptions
        : !this.displayOptions
    },
    toggleNullOption() {
      if (!this.nullOptionSelected)
        this.$emit('input', this.multiple ? [] : null)

      this.nullOptionSelected = !this.nullOptionSelected
      this.displayOptions = !this.displayOptions
    },
    removeItem({ option }) {
      if (!this.multiple) return

      const index = (this.value || []).indexOf(option[this.trackBy])
      const value = JSON.parse(JSON.stringify(this.value || []))
      value.splice(index, 1)

      return this.$emit('input', value)
    },
    emitBlur() {
      this.$emit('blur')
    },
    isOptionSelected(option) {
      if (is(option[this.trackBy], 'Object')) {
        return !this.multiple
          ? JSON.stringify(this.value) === JSON.stringify(option[this.trackBy])
          : !!(this.value || []).find(
              v => JSON.stringify(v) === JSON.stringify(option[this.trackBy])
            )
      }

      return this.multiple
        ? (this.value || []).includes(option[this.trackBy])
        : this.value === option[this.trackBy]
    },
    toggleOptions(value) {
      this.displayOptions = value || !this.displayOptions
    },
    hideOptions() {
      this.displayOptions = false
    },
    sortOptions() {
      this.setSortedOptions()

      this.sortedOptions = this.sortedOptions.sort((a, b) => {
        if (this.isOptionSelected(a) && this.isOptionSelected(b)) return 0
        if (this.isOptionSelected(a)) return -1
        if (this.isOptionSelected(b)) return 1

        return 0
      })
    },
    setSelectAll() {
      this.displayOptions = true
      const mappedOptions = this.sortedOptions.map(
        option => option[this.trackBy]
      )

      this.$emit('input', [...(this.value || []), ...mappedOptions])
    },
    clearValues() {
      this.$emit('input', [])
    },
    search(query) {
      this.searchQuery = query
    },
    debounceInput() {
      if (!this.searchRequest) return false

      if (intTimeout) clearTimeout(intTimeout)

      intTimeout = setTimeout(() => {
        this.$emit('request', this.searchQuery)
      }, 100)
    }
  }
}
</script>

<style lang="scss">
.FMultiSelect {
  z-index: 0;
  min-width: 250px;
  height: fit-content;
}
</style>
