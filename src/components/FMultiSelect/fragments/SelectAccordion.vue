<template>
  <div v-click-outside="emitClose" class="SelectAccordion" :class="parentStyle">
    <div ref="header" class="SelectAccordion__header">
      <slot name="header" />
    </div>

    <div :class="contentClasses" :style="contentStyle">
      <div class="SelectAccordion__content__inner" :style="innerStyle">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectAccordion',

  props: {
    /**
     * Wether or not to display the accordion's content
     */
    showContent: {
      type: Boolean,
      required: true
    },
    /**
     * Whether or not there is a item selected, it simply changes
     * the border color.
     */
    isActive: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({ contentPadding: 48 }),

  computed: {
    contentClasses() {
      return [
        'SelectAccordion__content',
        {
          'SelectAccordion__content--expand': this.showContent,
          'SelectAccordion__content--active': this.isActive
        }
      ]
    },
    parentStyle() {
      return {
        'SelectAccordion__parent--active': this.showContent
      }
    },
    contentStyle() {
      return {
        paddingTop: `${this.contentPadding - 2}px`
      }
    },
    innerStyle() {
      return {
        maxHeight: `${250 - this.contentPadding - 2}px`
      }
    }
  },

  watch: {
    showContent() {
      if (this.$refs.header) this.$nextTick(this.calcPadding)
    }
  },

  methods: {
    emitClose() {
      if (this.showContent) this.$emit('close')
    },
    calcPadding() {
      this.contentPadding = this.$refs.header
        ? this.$refs.header.offsetHeight
        : 48
    }
  }
}
</script>

<style lang="scss" scoped>
.SelectAccordion {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 0;

  transition: z-index 1s ease;

  &__parent--active {
    z-index: 1;
    transition: z-index 1ms ease;
  }

  border-radius: 5px;

  &:hover .SelectAccordion__content {
    border-color: var(--color-primary);
  }

  &__header {
    position: relative;
    z-index: 20;

    display: flex;
    min-height: 48px;
    justify-content: space-between;
  }

  &__content {
    position: absolute;
    z-index: 10;
    top: 0px;
    left: 0px;

    width: 100%;
    max-height: 48px;

    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;

    padding-top: 46px;

    overflow: hidden;
    box-shadow: 0px 1px 29px -19px rgba(0, 0, 0, 0);
    transition: max-height 300ms ease-in, overflow 0ms ease 300ms,
      box-shadow 300ms ease, padding 300ms ease;

    &--active,
    &--expand {
      border-color: var(--color-primary);
    }

    &--expand {
      // Header height + dropdown height
      max-height: calc(48px + 220px);
      box-shadow: 0px 1px 29px -19px rgba(0, 0, 0, 0.35);
    }

    &__inner {
      display: flex;

      max-height: 220px;
      padding-bottom: 5px;
      overflow: hidden;
    }
  }
}
</style>
