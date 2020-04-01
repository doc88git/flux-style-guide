<template>
  <ul :class="menuListClasses">
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

.FMenuList {
  width: 100%;

  &--parent {
    height: 100%;
    padding: 10px 0 0;
    background-color: #fff;
    position: fixed;
    top: 70px;
    left: -100%;
    overflow: scroll;

    @media screen and (min-width: map-get($sizes, 'tablet' )) {
      position: absolute;
      top: 0;
      left: 0;
      @include transition(0.1s);
      box-shadow: var(--shadow-base);
    }

    &__li {
      display: flex;
      flex-direction: column;
      //margin-bottom: 30px;
      width: 100%;
    }
  }

  &--sub {
    overflow: visible;
    max-height: 900px;
    transition: max-height 300ms ease, margin 300ms ease 300ms,
      overflow 350ms ease;

    /*
    &__li {
      &:first-child {
        margin-top: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
    */
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
