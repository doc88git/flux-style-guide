<template>
  <f-tooltip
    position="right"
    aligned="end"
    :class="['FMenuItem']"
    :disabled="menuExpand"
    :label="menuItem.name"
    :bg-color="color"
  >
    <f-link
      class="FMenuItem__link text-gray"
      :class="isSelected ? textColor : textHoverColor"
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
        size="sm"
        class="FMenuItem__link--icon"
      />

      <span v-else class="FMenuItem__link__bullet" />

      <span
        v-show="menuExpand"
        :class="[
          'FMenuItem__link__text',
          { 'FMenuItem__link__text--sub': isSub }
        ]"
      >
        {{ menuItem.name }}
      </span>
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
    color: String,
    isSub: Boolean,
    iconLib: String,
    menuExpand: Boolean,
    isSelected: Boolean
  },

  computed: {
    textHoverColor() {
      return `hover:text-${this.color}`
    },
    textColor() {
      return `color--text--${this.color}`
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

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: map-get($sizes, 'tablet' )) {
      justify-content: flex-start;
      &:hover {
        .Fmenu-side__nav__ul__li__text {
          margin-left: 7px;
        }
      }
    }

    &--icon {
      margin-right: 10px;

      &:hover {
        color: var(--color-primary-lighter);
      }
    }

    &--selected {
      font-weight: bold;
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
      font-size: var(--text-base);
      position: relative;
      margin-left: 5px;
      @include transition(0.1s);

      &:hover {
        transform: translateX(2px);
      }

      &:not(&--sub) {
        font-weight: bold;
      }
    }
  }
}
</style>
