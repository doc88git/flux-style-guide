<template>
  <div :class="rootClasses" class="SelectItemPhoto" @click="emitInput">
    <div class="SelectItemPhoto__photo">
      <img
        v-if="!isSelected"
        class="SelectItemPhoto__photoDimensions"
        :src="option.photo"
      />
      <div v-if="isSelected" class="SelectItemPhoto__checkDiv">
        <f-icon size="sm" name="check" lib="flux" color="white" />
      </div>
    </div>
    <div class="SelectItemPhoto__name">
      <span> {{ option[displayBy] }} </span>
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
  padding: 4px 10px 4px 15px;
  color: #999;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }

  &__checkDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    background-color: var(--color-primary);
    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn 1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
  }

  &__photo {
    width: 26px;
    height: 25px;
    border-radius: 15px;
    margin-right: 12px;
  }

  &__photoDimensions {
    height: 100%;
    width: 100%;
    border-radius: 15px;
    animation: fadeIn 1s ease-in-out;
  }

  &__name {
    display: flex;
    align-items: center;
    font-size: var(--text-base);
    width: 185px;
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
