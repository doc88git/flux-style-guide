<template>
  <f-tooltip
    overlap
    position="right"
    aligned="center"
    class="FMenuItem"
    :disabled="menuExpand"
    :label="menuItem.name"
    :bg-color="color"
  >
    <f-link
      :class="linkClasses"
      :link="getUrl('url', menuItem)"
      :to="getUrl('to', menuItem)"
      @click.native="clickButton(menuItem)"
    >
      <f-icon
        v-if="!isSub"
        :lib="iconLib"
        :name="menuItem.icon"
        :color="menuItem.color"
        type="outlined"
        clickable
        class="FMenuItem__link__icon"
      />

      <span v-else class="FMenuItem__link__bullet" />

      <span v-show="menuExpand" :class="linkTextClasses">
        {{ menuItem.name }}
      </span>

      <f-icon
        v-if="hasSubItems && menuExpand"
        :lib="iconLib"
        name="chevron-right"
        :color="isSelected ? menuItem.color : 'gray'"
        type="outlined"
        size="sm"
        :class="subIconClasses"
      />
    </f-link>
    <template v-slot:content>{{ menuItem.name }}</template>
  </f-tooltip>
</template>

<script>
import { FTooltip } from '../FTooltip'
import { FLink } from '../FLink'
import FIcon from '../FIcon/FIcon'

export default {
  name: 'f-menu-item',

  components: {
    FLink,
    FIcon,
    FTooltip
  },

  props: {
    menuItem: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    iconLib: {
      type: String,
      default: 'flux'
    },
    isSub: Boolean,
    menuExpand: Boolean,
    isSelected: Boolean
  },

  computed: {
    textHoverColor() {
      return `hover:text-${this.color}`
    },
    textColor() {
      return `color--text--${this.color}`
    },
    hasSubItems() {
      return !!(this.menuItem.subItems || []).length
    },
    linkClasses() {
      return [
        'FMenuItem__link text-gray',
        {
          'FMenuItem__link--selected': this.isSelected
        }
      ]
    },
    linkTextClasses() {
      return [
        'FMenuItem__link__text',
        {
          'FMenuItem__link__text--sub': this.isSub,
          'FMenuItem__link__text--selected': this.isSelected
        }
      ]
    },
    iconClasses() {
      return [
        'FMenuItem__link__icon',
        {
          'FMenuItem__link__icon--selected': this.isSelected
        }
      ]
    },
    bulletClasses() {
      return [
        'FMenuItem__link__bullet',
        {
          'FMenuItem__link__bullet--selected': this.isSelected
        }
      ]
    },
    subIconClasses() {
      return [
        'FMenuItem__link__sub_icon',
        {
          'FMenuItem__link__sub_icon--rotate': this.isSelected
        }
      ]
    }
  },

  methods: {
    clickButton(menu) {
      this.$emit('click', menu)
    },
    getUrl(type, menu) {
      return type in menu ? menu[type] : null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/f-variables.scss';
@import '../../assets/f-transitions.scss';

.FMenuItem {
  height: 20px;
  width: 100%;

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    padding-left: 27px;

    @media screen and (min-width: map-get($sizes, 'tablet' )) {
      justify-content: flex-start;
      &:hover {
        .Fmenu-side__nav__ul__li__text {
          margin-left: 7px;
        }
      }
    }

    &--selected &__icon {
      color: red !important;
    }

    &__icon {
      margin-right: 10px;

      &:hover {
        color: var(--color-primary-lighter);
      }
    }

    &__sub_icon {
      margin-left: auto;
      margin-right: 20px;
      transition: transform ease 300ms;

      &--rotate {
        transform: rotate(90deg);
      }
    }

    &__bullet {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: grey;

      margin-left: 5px;
      margin-right: 15px;
    }

    &__text {
      font-size: 13px;
      font-weight: bold;
      position: relative;
      margin-left: 5px;
      @include transition(0.1s);

      &--sub {
        color: #a8abb0;
        font-size: var(--text-base);
        font-weight: normal;
      }

      &--selected {
        color: var(--color-primary);
      }

      &:hover {
        transform: translateX(2px);
        color: var(--color-primary);
      }
    }
  }
}
</style>
