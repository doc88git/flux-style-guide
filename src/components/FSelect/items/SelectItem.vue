<template>
  <div :class="rootClasses" @click="emitInput">
    <div v-if="$slots.prepend" class="SelectItem__prepend">
      <slot name="prepend" />
    </div>

    <span class="SelectItem__label">{{ option[displayBy] }}</span>

    <div v-if="$slots.append" class="SelectItem__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectItem',

  props: {
    option: {
      type: [Object, String],
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    isSelected: {
      type: Boolean,
      default: false
    },

    trackBy: {
      type: String,
      required: true
    },

    displayBy: {
      type: String,
      required: true
    }
  },

  computed: {
    rootClasses() {
      return [
        'SelectItem',
        {
          'SelectItem--selected': this.isSelected
        }
      ]
    }
  },

  methods: {
    emitInput() {
      if (this.isSelected)
        return this.$emit('remove', { option: this.option, index: this.index })

      this.$emit('input', this.option[this.trackBy])
    }
  }
}
</script>

<style lang="scss" scoped>
.SelectItem {
  display: flex;
  align-items: flex-start;
  color: #999;
  cursor: pointer;

  padding: 8px 10px 8px 15px;

  &--selected,
  &:hover {
    color: var(--color-primary);
    background-color: #f0f0f0;
  }

  &__label {
    flex-shrink: 0;
    user-select: none;
    max-width: calc(100% - 40px);
    word-break: break-word;
  }

  &__prepend {
    margin-right: 10px;
    margin-top: 2px;
  }

  &__append {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  }
}
</style>
