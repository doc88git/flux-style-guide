<template>
  <div class="f-select" tabindex="-1">
    <span v-if="label" class="f-select__label">{{ label }}</span>

    <f-dropdown
      :list="optionsFiltered"
      :color="color"
      :textColor="textColor"
      :type="type"
      :closeOnClick="closeOnClick"
      :gray="gray"
      @selected="setValue"
      @status="setStatus"
    >
      <div v-show="showLabel" class="f-select__placeholder">
        {{ labelSelected || customLabel }}
      </div>

      <div v-show="multiple" class="f-select__multiple" ref="multipleInput">
        <f-chip
          v-for="item in multipleList"
          :key="item.id"
          :label="item.label"
          :value="item.value"
          :removable="true"
          color="gray"
          textColor="white"
          @remove="removeChip"
        />
      </div>

      <f-input
        ref="input"
        :name="name"
        v-show="openList && search"
        v-model="innerValue"
        class="f-select__input"
        :class="inputClasses"
      />
    </f-dropdown>
  </div>
</template>

<script>
import { FDropdown } from '../FDropdown/index.js'
import { FInput } from '../FField/index.js'
import { FChip } from '../FChip/index.js'

import Fuse from 'fuse.js'

const fuseOptions = {
  keys: ['label'],
  threshold: 0.1,
  shouldSort: false
}

let intTimeout = 0

export default {
  name: 'f-select',
  components: { FDropdown, FInput, FChip },
  data: () => ({
    innerValue: '',
    selected: null,
    selectedOld: null,
    openList: false,
    event: null,
    list: []
  }),
  props: {
    gray: Boolean,
    label: String,
    name: String,
    type: {
      type: String,
      default: 'input'
    },
    customLabel: {
      type: String,
      default: 'Selecione'
    },
    color: String,
    textColor: String,
    options: {
      type: Array,
      required: true
      // validator: items => {
      //   let filter = items.filter(item => {
      //     ;('label' in item && 'value' in item) ||
      //       ('id' in item && 'name' in item)
      //   })
      //   return filter.length === items.length
      // }
    },
    search: Boolean,
    multiple: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    '$attrs.value': {
      handler: function() {
        this.selected = this.$attrs.value
      },
      immediate: true
    },
    innerValue: {
      handler: function() {
        this.debounceInput(this.innerValue)
      }
    }
  },
  computed: {
    dropdownType() {
      return this.type === 'fill' ? 'default' : 'this.type'
    },
    labelSelected() {
      let selectedItem = this.options
        .filter(item => item.value === this.selected)
        .map(item => item.label || '')

      return selectedItem.join('')
    },
    optionsFiltered() {
      let fuse = new Fuse(this.options, fuseOptions)

      return this.innerValue ? fuse.search(this.innerValue) : this.options || []
    },
    inputClasses() {
      return {
        ['f-select--outlined']: this.type === 'outlined',
        ['f-select--input']: this.type === 'input',
        ['f-select--gray']: this.gray
      }
    },
    multipleList() {
      return this.list.map(item => {
        let v = this.options.filter(option => option.value === item)
        if (v.length) return v[0]
      })
    },
    showLabel() {
      if (!this.search && !this.multiple) return true
      if (this.search && !this.openList) return true

      if (this.multiple) return this.multipleList.length === 0

      return false
    }
  },
  methods: {
    removeChip(value) {
      this.list = this.list.filter(item => item !== value)
    },
    debounceInput(value) {
      if (intTimeout) clearTimeout(intTimeout)

      intTimeout = setTimeout(() => {
        this.$emit('search-value', value)
      }, 100)
    },
    setValue(value) {
      if (this.multiple) return this.addMultiple(value)
      this.selected = value

      this.$emit('input', value)
    },
    addMultiple(value) {
      if (this.list.includes(value)) return false

      this.list.push(value)
      this.selected = this.list
    },
    setFocus() {
      this.selectedOld = this.selected
      this.selected = null

      setTimeout(() => {
        this.$refs.input.$el.focus()
      }, 200)
    },
    setStatus(status) {
      if (status) this.setFocus()

      this.openList = status

      if (!status && !this.selected) this.selected = this.selectedOld

      if (!status) this.resetInnerValue()
    },
    resetInnerValue() {
      this.innerValue = ''
    },
    openDropdown() {
      if (this.openList) this.setFocus()

      if (!this.openList && !this.selected) {
        this.selected = this.selectedOld
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.f-select {
  position: relative;
  max-width: 100%;

  &:focus {
    outline: none;
  }

  &__label {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    margin-top: -8px;
    margin-left: 5px;
    background: white;
    padding: 0 4px;
    user-select: none;
    color: #cccccc;
    font-size: 10px;
  }

  &__placeholder {
    padding-right: 100%;
  }

  &__input {
    background-color: transparent;
    border-style: none;
    color: var(--color-white);
    padding: 0;
    margin: 0;
    height: 1.5rem;
  }

  &__multiple {
    flex-wrap: wrap;
  }

  &--outlined {
    color: var(--color-primary);
  }

  &--input {
    color: var(--color-black);
  }

  &--input {
    color: #cccccc;
  }
}
</style>
