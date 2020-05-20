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
      {{ option[displayBy] }}
    </div>
  </div>
</template>

<script>
import { FCheckbox } from '../../FCheckbox'

const hasKeys = (obj, keys) =>
  (keys || []).every(key => Object.keys(obj).includes(key))

export default {
  name: 'SelectItemCheck',

  components: { FCheckbox },

  props: {
    option: {
      type: Object,
      required: true,
      validator: v => hasKeys(v, ['value', 'label'])
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

  padding: 8px 10px 8px 15px;

  &--selected,
  &:hover {
    color: var(--color-primary);
  }

  &__value {
    margin-right: 10px;
  }

  &__label {
    user-select: none;
  }
}
</style>
