<template>
  <div :class="rootClasses" class="SelectItemPhoto" @click="emitInput">
    <div class="SelectItemPhoto__photo">
      <div class="SelectItemPhoto__photoDimensions" :style="backgroundImage" />
      <div v-if="isSelected" class="SelectItemPhoto__checkDiv">
        <f-icon size="xs" name="check" lib="flux" color="white" />
      </div>
    </div>
    <div class="SelectItemPhoto__name">
      <div v-if="$slots.prepend" class="SelectItemPhoto__prepend">
        <slot name="prepend" />
      </div>

      <span class="SelectItemPhoto__nameText">{{ option[displayBy] }}</span>

      <div v-if="$slots.append" class="SelectItemPhoto__append">
        <slot name="append" />
      </div>
    </div>
  </div>
</template>

<script>
import { FIcon } from '../../FIcon'

export default {
  name: 'SelectItemPhoto',

  components: { FIcon },

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
        'SelectItemPhoto',
        {
          'SelectItemPhoto--selected': this.isSelected
        }
      ]
    },
    backgroundImage() {
      return {
        backgroundImage: `url(${this.option.photo})`
      }
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
.SelectItemPhoto {
  display: flex;
  padding: 4px 15px 4px 15px;
  color: #999;
  cursor: pointer;

  &--selected,
  &:hover {
    color: var(--color-primary);
    background-color: #f0f0f0;
  }

  &__checkDiv {
    position: relative;
    top: -8px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13px;
    width: 13px;
    border-radius: 15px;
    background-color: var(--color-primary);
    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn 1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
  }

  &__photo {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin-right: 12px;
    flex-shrink: 0;
  }

  &__photoDimensions {
    height: 100%;
    width: 100%;
    border-radius: 15px;
    animation: fadeIn 1s ease-in-out;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__name {
    display: flex;
    align-items: flex-start;
    flex-grow: 1;
    padding-top: 5px;
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

  &__nameText {
    font-size: var(--text-base);
    flex-shrink: 0;
    max-width: calc(100% - 40px);
    word-break: break-word;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
