<template>
  <div>
    <section class="Fmenu-side">
      <f-button
        v-show="menuExpand"
        class="Fmenu-side__button"
        icon="chevron_left"
        :bigger="true"
        :radius="false"
        @click="menuExpand = !menuExpand"
      />
      <f-button
        v-show="!menuExpand"
        class="Fmenu-side__button"
        icon="menu"
        :bigger="true"
        :radius="false"
        @click="menuExpand = !menuExpand"
      />
      <nav class="Fmenu-side__nav">
        <ul
          class="Fmenu-side__nav__ul"
          :class="{ 'Fmenu-side__nav__ul--expand': menuExpand }"
        >
          <li v-for="n in 10" :key="n" class="Fmenu-side__nav__li">
            <f-tooltip position="right" :label="`link` + n">
              teste asdasd
              <template v-slot:content>
                <a class="Fmenu-side__nav__li_link" href="#">
                  <f-icon name="home" />
                  <span v-show="menuExpand">link {{ n }}</span></a
                >
              </template>
            </f-tooltip>
          </li>
        </ul>
      </nav>
    </section>
    <!-- <button>
      <span v-for="n in 4" :key="n" :class="'icon-widget'"></span>
    </button> -->
  </div>
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
    color: {
      type: String,
      default: "primary"
    },
    action: {
      type: Function
    }
  },
  methods: {
    toggleMenu({ payload, context }) {
      console.log("toggled");
      this.$emit("click", payload);
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
  background: #ccc;
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
      background: green;
      width: 100%;
      height: 100%;
      padding-left: 27px;
      // overflow-x: scroll;
      @include transition(0.1s);

      &::-webkit-scrollbar {
        width: 0px;
      }

      &--expand {
        width: 230px;
        @include transition(0.1s);
        text-align: left;
      }
    }
  }
}
</style>
