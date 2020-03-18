<template>
  <aside class="Fmenu-side">
    <nav class="Fmenu-side__nav">
      <ul :class="menuListClasses">
        <li
          v-for="menu in menuItems"
          :key="menu.id"
          class="Fmenu-side__nav__ul__li"
        >
          <f-menu-item
            :menu-item="menu"
            :icon-lib="iconLib"
            :menu-expand="menuExpand"
            :is-selected="isItemSelected(menu)"
            :color="color"
            @click="handleItemClick"
          />

          <ul v-if="hasSubMenu(menu)" :class="subMenuClasses(menu)">
            <li
              v-for="subMenu in menu.subItems"
              :key="subMenu.id"
              class="Fmenu-side__nav__ul__li__ul__li"
            >
              <f-menu-item
                is-sub
                :menu-item="subMenu"
                :icon-lib="iconLib"
                :menu-expand="menuExpand"
                :is-selected="menuSelected === menu.id"
                :bg-color="color"
              />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { FTooltip } from '../FTooltip'
import FIcon from '../FIcon/FIcon'
import { FLink } from '../FLink'
import FMenuItem from './FMenuItem'

export default {
  name: 'f-menu',
  components: {
    FMenuItem,
    FTooltip,
    FIcon,
    FLink
  },

  data: () => ({
    appTitle: 'reembolso',
    expandItem: ''
  }),

  props: {
    subItemsLimit: {
      type: Number,
      default: 10
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
    subMenuClasses(menu) {
      const isSelected = this.expandItem === menu.id
      const subItems = menu.subItems || []
      const allowHide =
        !!subItems.length && subItems.length >= this.subItemsLimit

      return [
        'Fmenu-side__nav__ul__li__ul',
        { 'Fmenu-side__nav__ul__li__ul--hidden': !isSelected && allowHide }
      ]
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
@import '../../assets/f-variables.scss';
@import '../../assets/f-transitions.scss';

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

    &__ul {
      width: 100%;
      height: 100%;
      padding: 25px 0 0;
      background-color: #fff;
      position: fixed;
      top: 70px;
      left: -100%;

      @media screen and (min-width: map-get($sizes, 'tablet' )) {
        position: absolute;
        top: 0;
        left: 0;
        @include transition(0.1s);
        box-shadow: var(--shadow-base);
      }

      &::-webkit-scrollbar {
        width: 0px;
      }

      &--expand {
        left: 0;
        @include transition(0.1s);
        text-align: center;

        @media screen and (min-width: map-get($sizes, 'tablet' )) {
          width: 230px;
          text-align: left;
        }
      }

      &__li {
        margin-left: 27px;
        margin-bottom: 35px;
        width: 100%;

        &__ul {
          overflow: visible;
          max-height: 900px;
          transition: max-height 300ms ease, margin 300ms ease 300ms,
            overflow 350ms ease;

          &--hidden {
            overflow: hidden;
            max-height: 0px;
            margin: 0;
          }

          &__li:first-child {
            margin-top: 20px;
          }

          &__li:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }
    }
  }
}
</style>
