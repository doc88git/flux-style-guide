<template>
  <div
    class="f-alert"
    :class="alertStyle"
    @mouseover="$emit('mouseover', { id, e: $event })"
    @mouseleave="$emit('mouseleave', { id, e: $event })"
  >
    <div class="f-alert__close" v-if="closable">
      <f-button flat dense icon="close" :color="closeColor" @click="close" />
    </div>
    <div class="f-alert__header" v-if="hasTitle">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="f-alert__body" v-if="hasContent">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { FButton } from '../FButton/index.js'

export default {
  name: 'f-alert',
  components: {
    FButton
  },
  props: {
    title: String,
    content: {
      type: String
    },
    color: String,
    textColor: String,
    fill: Boolean,
    outline: Boolean,
    closable: Boolean,
    time: Number,
    id: [String, Number]
  },
  computed: {
    closeColor() {
      // default
      if (!this.outline && !this.fill) return this.color
      // fill
      if (this.fill) return 'white'
      // outline
      if (this.outline) return this.color

      return 'primary'
    },
    hasTitle() {
      return this.$slots.title || !!this.title
    },
    hasContent() {
      return this.$slots.content || !!this.content
    },
    alertStyle() {
      let btnDefault = {
        ['f-alert--default']: !this.outline && !this.fill,
        [`color--text--${this.color}`]: !this.outline && !this.fill
      }

      let btnFill = {
        ['f-alert--fill']: this.fill === true,
        [`color--default--${this.color}`]: !!this.color && this.fill
      }

      let btnOutline = {
        ['f-alert--outline']: this.outline === true,
        [`color--outline--${this.color}`]: !!this.color && this.outline
      }

      return {
        ...btnDefault,
        ...btnFill,
        ...btnOutline,
        [`color--text--${this.textColor}`]: !!this.textColor
      }
    }
  },
  methods: {
    close() {
      const { time, id } = this
      this.$emit('close', { time, id })
    }
  }
}
</script>

<style lang="scss" scoped>
.f-alert {
  position: relative;
  max-width: 100%;
  padding: 0.5rem;
  white-space: normal;
  border-radius: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  background-color: var(--color-white);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  color: var(--color-gray-700);
  width: 350px;

  &__close {
    position: absolute;
    top: 6px;
    right: 5px;
  }

  &__header {
    font-size: var(--text-sm);
    font-weight: 700;
    padding: 0;
    margin: 0;
    margin-bottom: 0.5rem;
    padding-right: 20px;
  }

  &__body {
    font-size: var(--text-sm);
    margin: 0;
  }

  &__separator {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  &--default {
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-gray-200);
  }

  &--fill {
  }

  &--outline {
    border-radius: 0.25rem;
  }

  &--top {
  }
  &--buttom {
  }
  &--center {
  }
  &--left {
  }
  &--right {
  }
}
</style>
