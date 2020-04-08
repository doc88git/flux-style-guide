<template>
  <div class="f-dropdown" :class="classes" @click="toggleDropdown">
    <div
      class="f-dropdown__inner"
      :class="{
        'f-dropdown__inner--opened': isOpen
      }"
    >
      <div class="f-dropdown__inner__content">
        <slot>{{ labelSelected }}</slot>
      </div>
      <div v-if="caret" class="f-dropdown__inner__append">
        <f-icon :name="iconName" :color="iconColor" />
      </div>
    </div>
    <transition :name="`slide-${position}`">
      <div class="f-dropdown__list" v-show="isOpen" @keyup="itemNavigation">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="`dwn:${index}`"
            @click="clickOnItem($event, item)"
            :class="{
              'f-dropdown__active-item': currentItem === item.value
            }"
          >
            {{ item.label }}
            <!-- <f-icon
              v-if="currentItem === item.value"
              :name="iconStatus"
              :color="iconColor"
            /> -->
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { FIcon } from '../FIcon/index.js'

export default {
  name: 'f-dropdown',
  components: { FIcon },
  data: () => ({
    isOpen: false,
    selected: null,
    currentItem: 1
  }),
  props: {
    list: {
      type: Array,
      required: true,
      validator: list => {
        let required = ['label', 'value']

        let filter = list.filter(() => {
          return (
            list.filter(item => {
              return required.filter(r => !!item[r]).length === required.length
            }).length === list.length
          )
        })

        return filter.length === list.length
      }
    },
    // iconStatus: {
    //   type: String,
    //   default: 'check'
    // },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    input: Boolean,
    open: Boolean,
    gray: Boolean,
    caret: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default',
      validator: item => {
        return ['default', 'outlined', 'input'].includes(item)
      }
    },
    position: {
      type: String,
      default: 'down'
    },
    color: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    enableEnter: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    document.addEventListener('keyup', this.itemNavigation)
    if (this.enableEnter) {
      document.addEventListener('keypress', this.onEnter)
    }
  },
  computed: {
    isOutlined() {
      return this.type === 'outlined'
    },
    iconName() {
      return this.isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
    },
    iconColor() {
      return this.isOutlined ? this.color : this.textWhite
    },
    selectedItem() {
      let selectedItem = this.list.filter(item => item.value === this.selected)
      return selectedItem.length ? selectedItem[0] : this.list[0]
    },
    labelSelected() {
      return this.selectedItem && this.selectedItem.label
        ? this.selectedItem.label
        : ''
    },
    valueSelected() {
      return this.selectedItem && this.selectedItem.value
        ? this.selectedItem.value
        : ''
    },
    classes() {
      return {
        'f-dropdown--outlined': this.type === 'outlined',
        'f-dropdown--input': this.type === 'input',
        'f-dropdown--gray': this.gray
      }
      // return this.isOutlined ? "f-dropdown--outlined" : "";
    }
  },
  watch: {
    open: {
      handler: function(value) {
        if (value) return this.openList()
        return this.closeList()
        // this.toggleDropdown(null, value);
      }
    }
  },
  methods: {
    onEnter(e) {
      if (e.keyCode === 13) {
        this.selectItem()
      }
    },
    isClickedIn(e, classItem) {
      let isClicked = e.composedPath().filter(item => {
        return item.classList ? item.classList.contains(classItem) : false
      })

      return isClicked.length
    },
    isClickedOut(e) {
      return !this.isClickedIn(e, 'f-dropdown')
    },
    clickedInCaret(e) {
      return (
        this.isClickedIn(e, 'f-icon') && this.iconName === 'keyboard_arrow_up'
      )
    },
    closeList() {
      this.isOpen = false

      if (process.browser) {
        window.removeEventListener('click', this.toggleDropdown)
      }

      this.emitStatus()
    },
    openList() {
      this.isOpen = true

      if (process.browser) {
        window.addEventListener('click', this.toggleDropdown)
      }

      this.emitStatus()
    },
    emitStatus() {
      this.$emit('status', this.isOpen)
    },
    toggleDropdown(e) {
      if (this.isClickedOut(e) || this.clickedInCaret(e)) {
        this.closeList()
        e.stopPropagation()

        return false
      }

      this.openList()

      e.stopPropagation()
    },
    selectItem() {
      this.selected = this.currentItem
      this.$emit('selected', this.currentItem)

      this.closeList()
    },
    clickOnItem(e, item) {
      this.selected = item.value
      this.$emit('selected', item.value)

      if (this.closeOnClick) this.closeList()

      e.stopPropagation()
    },
    itemNavigation(event) {
      if (event.keyCode == 38 && this.currentItem > 1) {
        this.currentItem--
      } else if (event.keyCode == 40 && this.currentItem < this.list.length) {
        this.currentItem++
      }
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('click', this.toggleDropdown)
      window.removeEventListener('keyup', () => {})
      window.removeEventListener('keypress', () => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.f-dropdown {
  user-select: none;
  position: relative;
  max-width: 100%;
  min-width: 200px;
  height: 100%;
  &:focus {
    box-shadow: none;
    outline: 0;
  }
  &__inner {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: var(--color-primary);
    border-radius: 0.25rem;
    color: var(--color-white);
    width: 100%;
    padding: 0.5rem 0.75rem;
    min-width: 100%;
    max-width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
    align-items: center;
    &__content {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__append {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      width: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      .f-icon {
        padding: 0.5rem;
        margin: -0.5rem;
        cursor: pointer;
      }
    }
    &--opened {
      border-radius: 0;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
  }

  &__active-item {
    background-color: var(--color-gray-300);
    color: var(--color-primary);
  }

  &__list {
    position: absolute;
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background-color: var(--color-primary);
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    width: 100%;
    color: var(--color-white);
    text-align: left;
    z-index: 10;
    overflow: auto;
    max-height: 200px;
    ul {
      list-style-type: none;
      li {
        padding: 0.25rem 0.5rem;
        vertical-align: middle;
        &:hover {
          color: var(--color-primary);
          background-color: var(--color-gray-300);
        }
      }
    }
  }

  &--outlined {
    .f-dropdown__inner {
      background-color: var(--color-white);
      color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }
    .f-dropdown__list {
      background-color: var(--color-white);
      border-width: 1px;
      border-top-width: 0;
      border-style: solid;
      border-color: var(--color-gray);
      color: var(--color-gray-600);
      ul {
        li {
          &:hover {
            background-color: var(--color-white);
          }
        }
      }
    }
  }

  &--input {
    .f-dropdown__inner {
      background-color: var(--color-white);
      color: var(--color-gray-600);
      border: 1px solid var(--color-primary);
    }
    .f-dropdown__list {
      background-color: var(--color-white);
      color: var(--color-gray-600);
      border: 1px solid;
      border-top-width: 0;
      border-color: var(--color-primary);
      ul {
        li {
          &:hover {
            background-color: var(--color-gray-300);
          }
        }
      }
    }
  }

  &--gray {
    .f-dropdown__inner {
      border: 1px solid #cccccc;
      color: #999999;
    }

    .f-dropdown__list {
      border-color: #cccccc;
    }
  }
}
</style>
