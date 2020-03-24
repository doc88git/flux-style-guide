<template>
  <aside class="Fmenu-side">
    <nav class="Fmenu-side__nav">
      <f-menu-list :expand="menuExpand" :items="menuItems">
        <template v-slot:li="{ item }">
          <f-menu-item
            :menu-item="item"
            :icon-lib="iconLib"
            :menu-expand="menuExpand"
            :is-selected="isItemSelected(item)"
            :color="color"
            @click="handleItemClick"
          />

          <f-menu-list
            v-if="hasSubMenu(item)"
            :hide-sub-items="hideSubItems(item)"
            :items="item.subItems || []"
            is-sub
          >
            <template v-slot:li="{ item: subItem }">
              <f-menu-item
                is-sub
                :menu-item="subItem"
                :icon-lib="iconLib"
                :menu-expand="menuExpand"
                :is-selected="menuSelected === subItem.id"
                :bg-color="color"
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

  data: () => ({
    appTitle: 'reembolso',
    expandItem: ''
  }),

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
    color: {
      type: String,
      default: 'primary'
    },
    menuExpand: {
      type: Boolean,
      default: false
    },
    iconLib: {
      type: String,
      default: 'material'
    }
  },

  computed: {
    menuListClasses() {
      return [
        'Fmenu-side__nav__ul',
        { 'Fmenu-side__nav__ul--expand': this.menuExpand }
      ]
    }
  },

  methods: {
    hideSubItems(menu) {
      const isSelected = this.expandItem === menu.id
      const subItems = menu.subItems || []
      const allowHide =
        !!subItems.length && subItems.length >= this.subItemsLimit

      return !isSelected && allowHide
    },
    hasSubMenu(menu) {
      return !!(menu.subItems || []).length
    },
    isItemSelected({ id }) {
      return this.menuSelected === id
    },
    handleItemClick(ev) {
      if (!(ev.subItems || []).length) return this.$emit('click', ev)
      this.expandItem = ev.id !== this.expandItem ? ev.id : ''
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
