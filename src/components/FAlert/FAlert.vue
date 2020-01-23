<template>
  <div
    class="f-alert"
    :class="alertStyle"
    @mouseover="$emit('mouseover', { id, e: $event })"
    @mouseleave="$emit('mouseleave', { id, e: $event })"
  >
    <div class="f-alert__close" v-if="closable">
      <f-button flat dense icon="close" @click="close" />
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
    color: {
      type: String,
      default: ''
    },
    fill: Boolean,
    closable: Boolean,
    time: Number,
    id: [String, Number]
  },
  computed: {
    hasTitle() {
      return this.$slots.title || !!this.title
    },
    hasContent() {
      return this.$slots.content || !!this.content
    },
    alertStyle() {
      let btnFill = {
        ['f-alert--fill']: this.fill === true,
        [`color--default--${this.color}`]: this.fill === true
      }

      return {
        ...btnFill,
        [`color--outline--${this.color}`]: true
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
  padding: 0.75rem;
  white-space: normal;
  border-radius: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  box-shadow: var(--shadow-base);
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 1px solid;

  &--fill {
    color: var(--color-white);
    border-color: transparent;
  }

  &__close {
    position: absolute;
    top: 0;
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
}
</style>
