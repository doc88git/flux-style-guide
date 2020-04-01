<template>
  <aside class="Fmenu-side">
    <nav class="Fmenu-side__nav">
      <f-menu-list :expand="menuExpand" :items="menuItems">
        <template v-slot:li="{ item }">
          <f-menu-item
            :menu-item="item"
            :menu-expand="menuExpand"
            :is-selected="isItemSelected(item)"
            v-bind="$attrs"
            @click="handleItemClick"
          />

          <f-menu-list
            v-if="hasSubMenu(item)"
            :hide-sub-items="hideSubItems(item)"
            :items="item.subItems"
            is-sub
          >
            <template v-slot:li="{ item: subItem }">
              <f-menu-item
                is-sub
                :menu-item="subItem"
                :menu-expand="menuExpand"
                :is-selected="isItemSelected(subItem)"
                v-bind="$attrs"
                @click="handleItemClick"
              />
            </template>
          </f-menu-list>
        </template>
      </f-menu-list>
    </nav>
  </aside>
</template>

<script>
import FMenuList from './FMenuList'
import FMenuItem from './FMenuItem'

export default {
  name: 'f-menu',

  components: {
    FMenuList,
    FMenuItem
  },

  data: () => ({ expandItem: '' }),

  props: {
    subItemsLimit: {
      type: Number,
      default: 1
    },
    menuItems: {
      type: Array,
      default: () => ({})
    },
    menuSelected: {
      type: String,
      default: 'company'
    },
    menuExpand: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    menuExpand(expand) {
      if (!expand) this.expandItem = ''
    }
  },

  methods: {
    hideSubItems(menu) {
      const isSelected = this.isItemSelected(menu)
      const subItems = menu.subItems || []
      const allowHide =
        !!subItems.length && subItems.length >= this.subItemsLimit

      return !isSelected && allowHide
    },
    hasSubMenu(menu) {
      return !!(menu.subItems || []).length
    },
    isItemSelected({ id, subItems }) {
      if (this.expandItem) return this.expandItem === id

      return (
        this.menuSelected === id ||
        !!(subItems || []).find(sub => sub.id === this.menuSelected)
      )
    },
    handleItemClick(ev) {
      console.log('ev')
      if (!(ev.subItems || []).length) return this.$emit('click', ev)

      this.expandItem = ev.id !== this.expandItem ? ev.id : ''
      if (!this.menuExpand) this.$emit('expand')
    }
  }
}
</script>

<style lang="scss" scoped>
span.icon-widget {
  height: 100px;
  width: 10px;
}

.Fmenu-side {
  width: 70px;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;

  font-family: var(--font-primary);

  &__button {
    margin: 0;
    width: 100%;
    text-align: center;
    min-height: 70px;
  }

  &__nav {
    display: inline-block;
    padding: 0;
    margin: 0;
    top: 0;
    position: relative;
    width: 100%;
    height: auto;
    flex-grow: 1;
  }
}
</style>
