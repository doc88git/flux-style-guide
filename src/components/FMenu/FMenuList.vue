<template>
  <ul :class="menuListClasses">
    <li v-if="$slots.prepend" class="FMenuList__prepend">
      <slot name="prepend" />
    </li>

    <li
      v-for="(item, index) in items"
      :key="item.id"
      :class="menuListItemClasses"
    >
      <slot name="li" v-bind="{ item, index }" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'f-menu-list',

  props: {
    items: {
      type: Array,
      required: true
    },
    isSub: Boolean,
    expand: Boolean,
    hideSubItems: Boolean
  },

  computed: {
    menuListClasses() {
      return [
        'FMenuList',
        {
          'FMenuList--sub': this.isSub,
          'FMenuList--parent': !this.isSub,
          'FMenuList--expand': this.expand,
          'FMenuList--hide-sub': this.hideSubItems
        }
      ]
    },
    menuListItemClasses() {
      return [
        'FMenuList__li',
        {
          'FMenuList--sub__li': this.isSub,
          'FMenuList--parent__li': !this.isSub
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/f-variables.scss';
@import '../../assets/f-transitions.scss';

$listWidth: 250px;

.FMenuList {
  width: 100%;

  &--parent {
    position: absolute;
    top: 0;
    left: 0;

    width: $listWidth;
    left: -$listWidth;

    height: 100%;
    padding: 10px 0 0;
    overflow: scroll;
    background-color: #fff;

    box-shadow: var(--shadow-base);
    transition: width 300ms ease, left 300ms ease, text-align 300ms ease;

    @media screen and (min-width: map-get($sizes, 'tablet')) {
      left: 0px;
      width: 100%;
    }

    &__li {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  &--sub {
    overflow: visible;
    max-height: 900px;
    transition: max-height 300ms ease, margin 300ms ease 300ms,
      overflow 350ms ease;
  }

  &--expand {
    width: $listWidth;
    left: 0px;
    text-align: center;
  }

  &--hide-sub {
    overflow: hidden;
    max-height: 0px;
    margin: 0;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
