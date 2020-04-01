<template>
  <div class="BasicAccordion">
    <div class="BasicAccordion__header">
      <p class="BasicAccordion__header__p">
        {{ title }}
      </p>

      <f-icon
        :class="iconClasses"
        lib="flux"
        name="chevron-up"
        type="outlined"
        size="lg"
        color="black"
        clickable
        @click.native="toggleContent"
      />
    </div>

    <div :class="contentClasses">
      <div class="BasicAccordion__content__inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import FIcon from '../FIcon/FIcon'

export default {
  name: 'f-accordion',

  components: { FIcon },

  props: {
    title: {
      type: String,
      required: true
    }
  },

  data: () => ({ hideContent: false }),

  computed: {
    contentClasses() {
      return [
        'BasicAccordion__content',
        {
          'BasicAccordion__content--hidden': this.hideContent
        }
      ]
    },

    iconClasses() {
      return [
        'BasicAccordion__header__icon',
        {
          'BasicAccordion__header__icon--rotate': this.hideContent
        }
      ]
    }
  },

  methods: {
    toggleContent() {
      this.hideContent = !this.hideContent
    }
  }
}
</script>

<style lang="scss" scoped>
.BasicAccordion {
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 16px #0000001f;

  &__header {
    display: flex;
    height: 60px;
    padding: 0 35px 0 20px;

    &__p {
      display: flex;
      align-items: center;

      flex-grow: 1;
      vertical-align: middle;
      font-size: 16px;
      font-weight: bold;
      color: #666666;
    }

    &__icon {
      display: flex;
      align-items: center;
      transition: transform 300ms;

      &--rotate {
        transform: rotate(180deg);
      }
    }
  }

  &__content {
    max-height: 900px;
    overflow: hidden;
    transition: max-height 300ms ease-in, overflow 0ms ease 300ms;

    &--hidden {
      max-height: 0px;
    }

    &__inner {
      padding: 0 20px 20px 20px;
    }
  }
}
</style>
