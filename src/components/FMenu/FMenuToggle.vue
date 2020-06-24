<template>
  <div class="FMenuToggle" :class="classMenu">
    <f-button
      class="FMenuToggle__button-absolute"
      dense
      :icon="buttonIcon"
      color="white"
      circle
      inverseColor
      small
      @click="changeOpened()"
    />
    <div class="FMenuToggle__content" v-if="openMenu">
      content
    </div>
  </div>
</template>

<script>
import { FButton } from '../FButton'
export default {
  name: 'f-menu-toggle',

  components: { FButton },

  data: () => ({
    noHover: false,
    time: null,
    forceClose: false,
    openMenu: false
  }),

  props: {
    isOpen: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    iconOpened: {
      type: String,
      default: 'arrow-left'
    },
    iconClosed: {
      type: String,
      default: 'arrow-right'
    }
  },

  mounted() {
    this.openMenu = this.isOpen
  },

  watch: {},

  computed: {
    buttonIcon() {
      let classIcon = this.iconClosed
      if (this.openMenu) classIcon = this.iconOpened
      return classIcon
    },
    classMenu() {
      return this.openMenu ? 'FMenuToggle--open' : ''
    }
  },
  methods: {
    changeOpened() {
      this.openMenu = !this.openMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/f-transitions.scss';
@import '../../assets/f-variables.scss';
$lineW: 18px;
$middleLineW: 13px;
$lastLineW: 16px;
$timeAnimation: 0.3s;
$timeTransition: 0.2s;

.FMenuToggle {
  position: relative;
  width: 30px;
  height: 100%;
  min-height: 300px;
  background: var(--color-gray-300);
  @include transition(0.1s);

  &--open {
    width: 190px;
  }

  &__button-absolute {
    position: absolute;
    top: calc(50% - 15px);
    right: -15px;
    -webkit-box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    @include transition(0.1s);
  }

  &__content {
    width: 100%;
    overflow: hidden;
    height: 100%;
  }
}
</style>
