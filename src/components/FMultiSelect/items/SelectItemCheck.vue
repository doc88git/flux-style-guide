<template>
  <div :class="rootClasses" @click="emitInput">
    <div class="SelectItemCheck__value">
      <f-checkbox
        :checked="isSelected"
        @change="emitInput"
        @click.native.stop
      />
    </div>
    <div class="SelectItemCheck__label">
      <div v-if="$slots.prepend" class="SelectItemCheck__prepend">
        <slot name="prepend" />
      </div>

      <span class="SelectItemCheck__labelText">{{ option[displayBy] }}</span>

      <div v-if="$slots.append" class="SelectItemCheck__append">
        <slot name="append" />
      </div>
    </div>
  </div>
</template>

<script>
import { FCheckbox } from '../../FCheckbox'

export default {
  name: 'SelectItemCheck',

  components: { FCheckbox },

  props: {
    option: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    isSelected: {
      type: Boolean,
      required: true
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
        'SelectItemCheck',
        {
          'SelectItemCheck--selected': this.isSelected
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
.SelectItemCheck {
  display: flex;
  align-items: center;
  color: #999;
  cursor: pointer;

  padding: 8px 15px 8px 15px;

  &--selected,
  &:hover {
    color: var(--color-primary);
  }

  &__value {
    margin-right: 10px;
    flex-shrink: 0;
  }

  &__label {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }

  &__append {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  }

  &__prepend {
  }

  &__labelText {
    flex-shrink: 0;
    user-select: none;
  }
}
</style>
