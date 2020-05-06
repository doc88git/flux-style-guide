<template>
  <select-accordion
    class="FMultiSelect"
    :show-content="displayOptions"
    :is-active="hasValue"
    @close="hideOptions"
  >
    <select-input
      slot="header"
      :is-active="displayOptions"
      :search-query="searchQuery"
      :current-value="currentValue"
      :display-by="displayBy"
      :num-selected="itemsSelected"
      v-bind="$attrs"
      @toggle-options="toggleOptions"
      @search="search"
    />

    <select-item-group
      slot="content"
      :options="optionsByQuery"
      :display-clear="displayClearList"
      :track-by="trackBy"
      @clear="clearValues"
    >
      <template v-slot:option="{ option, index }">
        <slot name="option" v-bind="{ option, index }">
          <component
            :is="optionComponent"
            :option="option"
            :index="index"
            :is-selected="isOptionSelected(option)"
            :display-by="displayBy"
            :track-by="trackBy"
            @input="addItem"
            @remove="removeItem"
          />
        </slot>
      </template>
    </select-item-group>
  </select-accordion>
</template>

<script>
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

let intTimeout = 0

export default {
  name: 'FMultiSelect',

  components: {
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
      type: [Object, String, Number, Array],
      required: true
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
    }
  },

  data() {
    return {
      sortedOptions: JSON.parse(JSON.stringify(this.options || [])),
      displayOptions: false,
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
      return !this.multiple && this.value
        ? this.options.find(opt => opt[this.trackBy] === this.value)
        : null
    },
    optionsByQuery() {
      if (!this.searchQuery) return this.sortedOptions

      const words = this.searchQuery.trim().split('')
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
    }
  },

  watch: {
    displayOptions(display) {
      if (display) this.sortOptions()
    },
    searchQuery: 'debounceInput',
    options: 'sortOptions'
  },

  methods: {
    addItem(item) {
      if (this.multiple)
        return this.$emit('input', [...(this.value || []), item])

      this.$emit('input', item)

      this.displayOptions = this.multiple
        ? this.displayOptions
        : !this.displayOptions
    },
    removeItem({ option }) {
      if (this.multiple) {
        const index = (this.value || []).indexOf(option[this.trackBy])
        const value = JSON.parse(JSON.stringify(this.value || []))
        value.splice(index, 1)

        return this.$emit('input', value)
      }

      this.$emit('input', null)
    },
    isOptionSelected(option) {
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
      this.sortedOptions = this.options.sort((a, b) => {
        if (this.isOptionSelected(a) && this.isOptionSelected(b)) return 0
        if (this.isOptionSelected(a)) return -1
        if (this.isOptionSelected(b)) return 1

        return 0
      })
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
  min-width: 250px;
  height: fit-content;
}
</style>
