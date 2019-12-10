<template>
    <section class="Fmenu-side">
      <f-button
        class="Fmenu-side__button"
        :icon="iconMenu"
        :bigger="true"
        :radius="false"
        :color="color"
        @click="menuExpand = !menuExpand"
      />
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
                <f-icon :name="menu.icon" size="xl" type="outlined" />
                <span
                  v-show="menuExpand"
                  class="Fmenu-side__nav__ul__li__text"
                  >{{ menu.name }}</span
                ></a
              >
              <template v-slot:content>{{ menu.name }} </template>
            </f-tooltip>
          </li>
        </ul>
      </nav>
    </section>
</template>

<script>
import { FButton } from "../FButton";
import { FIcon } from "../FIcon";
import { FTooltip } from "../FTooltip";

export default {
  name: "f-menu",
  components: {
    FButton,
    FIcon,
    FTooltip
  },
  data: () => ({
    appTitle: "reembolso",
    menuExpand: false
  }),
  props: {
    menuItems: {
      type: Array,
      default: () => {
        return [
          { name: "Home", url: "#", id: "home", icon: "home" },
          { name: "Empresa", url: "#", id: "company", icon: "apartment" },
          {
            name: "Configurações",
            url: "#",
            id: "configuration",
            icon: "brightness_5"
          }
        ];
      }
    },
    menuSelected: {
      type: String,
      default: "company"
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    textHoverColor() {
      return `hover:text-${this.color}`;
    },
    textColor() {
      return `color--text--${this.color}`;
    },
    iconMenu() {
      return this.menuExpand ? "chevron_left" : "menu";
    }
  },
  methods: {
    clickButton(menu) {
      this.menuExpand = false;
      this.$emit("click", menu);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/f-transitions";
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
  }

  &__nav {
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    flex-grow: 1;

    &__ul {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0 0;
      width: 100%;
      height: 100%;
      // overflow-x: scroll;
      @include transition(0.1s);
      -webkit-box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.44);
      -moz-box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.44);
      box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.44);

      &::-webkit-scrollbar {
        width: 0px;
      }

      &--expand {
        width: 230px;
        @include transition(0.1s);
        text-align: left;
      }

      &__tooltip {
        width: 100%;
      }

      &__li {
        margin: 0px 0 8px;
        width: 100%;

        &__link {
          padding-left: 27px;
          width: 100%;
          display: inline-block;

          &:hover {
            .Fmenu-side__nav__ul__li__text {
              margin-left: 5px;
            }
          }

          &--selected {
            font-weight: bold;
          }
        }

        &__text {
          font-size: 15px;
          position: relative;
          top: -2px;
          @include transition(0.1s);
        }
      }
    }
  }
}
</style>
