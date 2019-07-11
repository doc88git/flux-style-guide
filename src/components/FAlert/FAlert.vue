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
import { FButton } from "../FButton/index.js";

export default {
  name: "f-alert",
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
      if (!this.outline && !this.fill) return this.color;
      // fill
      if (this.fill) return "white";
      // outline
      if (this.outline) return this.color;

      return "primary";
    },
    hasTitle() {
      return this.$slots.title || !!this.title;
    },
    hasContent() {
      return this.$slots.content || !!this.content;
    },
    alertStyle() {
      let btnDefault = {
        ["f-alert--default"]: !this.outline && !this.fill,
        [`color--text--${this.color}`]: !this.outline && !this.fill
      };

      let btnFill = {
        ["f-alert--fill"]: this.fill === true,
        [`color--default--${this.color}`]: !!this.color && this.fill
      };

      let btnOutline = {
        ["f-alert--outline"]: this.outline === true,
        [`color--outline--${this.color}`]: !!this.color && this.outline
      };

      return {
        ...btnDefault,
        ...btnFill,
        ...btnOutline,
        [`color--text--${this.textColor}`]: !!this.textColor
      };
    }
  },
  methods: {
    close() {
      const { time, id } = this;
      this.$emit("close", { time, id });
    }
  }
};
</script>

<style lang="scss" scoped>
.f-alert {
  @apply relative;
  @apply max-w-full p-2;
  @apply whitespace-normal;
  @apply rounded-lg mx-auto bg-white shadow-md;
  @apply bg-white text-gray-700;
  @apply mb-2;
  @apply flex flex-col;
  width: 350px;

  &__close {
    @apply absolute;
    top: 6px;
    right: 5px;
  }

  &__header {
    @apply text-sm font-bold p-0 m-0 mb-2;
    padding-right: 20px;
  }

  &__body {
    @apply text-sm m-0;
  }

  &__separator {
    @apply my-2;
  }

  &--default {
    @apply border rounded border-gray-200;
  }

  &--fill {
    // @apply bg-primary text-white;
  }

  &--outline {
    @apply border rounded;
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

@import "../../assets/f-colors.scss";
</style>
