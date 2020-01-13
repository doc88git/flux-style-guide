<template>
  <aside class="Fmenu-side">
    <nav class="Fmenu-side__nav">
      <ul
        class="Fmenu-side__nav__ul"
        :class="{ 'Fmenu-side__nav__ul--expand': menuExpand }"
      >
        <li
          v-for="menu in menuItems"
          :key="menu.id"
          class="Fmenu-side__nav__ul__li"
        >
          <f-tooltip
            position="right"
            class="Fmenu-side__nav__ul__tooltip"
            :disabled="menuExpand"
            :bgColor="color"
            :label="menu.name"
          >
            <a
              class="Fmenu-side__nav__ul__li__link text-gray"
              :class="[menuSelected === menu.id ? textColor : textHoverColor]"
              :href="menu.url"
              @click="clickButton(menu)"
            >
              <f-icon
                class="Fmenu-side__nav__ul__li__link--icon"
                :name="menu.icon"
                size="xl"
                type="outlined"
                style="zoom: 1.5;"
              />
              <span v-show="menuExpand" class="Fmenu-side__nav__ul__li__text">{{
                menu.name
              }}</span>
            </a>
            <template v-slot:content>{{ menu.name }}</template>
          </f-tooltip>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { FIcon } from '../FIcon'
import { FTooltip } from '../FTooltip'

export default {
  name: 'f-menu',
  components: {
    FIcon,
    FTooltip
  },
  data: () => ({
    appTitle: 'reembolso'
  }),
  props: {
    menuItems: {
      type: Array,
      default: () => {
        return [
          { name: 'Home', url: '#', id: 'home', icon: 'home' },
          { name: 'Empresa', url: '#', id: 'company', icon: 'apartment' }
        ]
      }
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
    }
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/f-transitions';
@import '../../assets/f-variables';

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

      @media screen and (min-width: var(--size-tablet)) {
        position: absolute;
        top: 0;
        left: 0;
        @include transition(0.1s);
        -webkit-box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.44);
        -moz-box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.44);
        box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.44);
      }

      &::-webkit-scrollbar {
        width: 0px;
      }

      &--expand {
        left: 0;
        @include transition(0.1s);
        text-align: center;

        @media screen and (min-width: var(--size-tablet)) {
          width: 230px;
          text-align: left;
        }
      }

      &__tooltip {
        width: 100%;
      }

      &__li {
        margin: 0px 0 20px;
        width: 100%;

        &__link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;

          @media screen and (min-width: var(--size-tablet)) {
            justify-content: flex-start;
            &:hover {
              .Fmenu-side__nav__ul__li__text {
                margin-left: 7px;
              }
            }
          }

          &--icon {
            margin-left: 15px;
          }

          &--selected {
            font-weight: bold;
          }
        }

        &__text {
          font-size: 15px;
          position: relative;
          margin-left: 5px;
          @include transition(0.1s);
        }
      }
    }
  }
}
</style>
