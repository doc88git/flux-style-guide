<template>
  <div class="FBanner">
    <section class="FBanner__container">
      <div class="FBanner__images">
        <img
          class="FBanner__image-box"
          v-for="(image, i) in images"
          :key="image.id"
          :src="image.src"
          :class="slideClass(image.class, i)"
          :style="slideStyle(i)"
        />
        <div class="FBanner__buttons" v-if="isSliderBullet">
          <span
            v-for="(image, i) in images"
            :key="image.id"
            :class="slideClass(image.class, i)"
            @click="handleActiveSlider(i)"
          ></span>
        </div>
        <div class="FBanner__arrow-button FBanner__arrow-button--left">
          <svg
            v-if="isLastArrow"
            @click="prev()"
            class="FBanner__slider-arrow FBanner__slider-arrow--left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
            />
          </svg>
        </div>
        <div class="FBanner__arrow-button FBanner__arrow-button--right">
          <svg
            v-if="isFirstArrow"
            @click="next()"
            class="FBanner__slider-arrow FBanner__slider-arrow--right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
            />
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import banner1 from '../../assets/images/u509_banner_1.png'
import banner2 from '../../assets/images/bg-gradient_u9_banner_2.png'
import banner3 from '../../assets/images/u510_banner_1.png'
import banner4 from '../../assets/images/bg-gradient_u10_banner_2.png'
import { setTimeout } from 'timers'

export default {
  data() {
    return {
      images: [
        {
          src: banner1,
          classes: '',
          id: 0
        },
        {
          src: banner2,
          classes: '',
          id: 1
        },
        {
          src: banner3,
          classes: '',
          id: 2
        },
        {
          src: banner4,
          classes: '',
          id: 3
        }
      ],
      activeBanner: 0
    }
  },
  props: {
    bullet: Boolean,
    outSlider: Boolean
  },
  computed: {
    isLastImage() {
      return this.activeBanner < this.images.length - 1
    },
    isFirstImage() {
      return this.activeBanner > 0
    },
    isSlider() {
      return !this.bullet && !this.outSlider
    },
    isSliderBullet() {
      return this.bullet && !this.outSlider
    },
    isFirstArrow() {
      return this.isLastImage && this.isSlider
    },
    isLastArrow() {
      return this.isFirstImage && this.isSlider
    }
  },
  mounted() {
    this.handleActiveSlider(0)
  },
  methods: {
    handleActiveSlider(index) {
      this.lastBanner = this.activeBanner
      this.activeBanner = index
    },

    slideClass(classes, i) {
      return [
        `${classes}`,
        { show: this.activeBanner === i },
        { active: this.activeBanner === i },
        { after: this.activeBanner < i },
        { animation: this.activeBanner === i || this.lastBanner === i }
      ]
    },

    slideStyle(i) {
      return `z-index: ${-i}`
    },

    next() {
      this.handleActiveSlider(this.activeBanner + 1)
      setTimeout(() => {
        this.activeBanner + 1
        console.log('um de cada vez')
      }, 1500)
    },

    prev() {
      this.handleActiveSlider(this.activeBanner - 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.FBanner {
  position: relative;

  &__container {
    max-width: 100%;
    max-height: 100%;
  }

  &__images {
    width: 100%;
    position: absolute;
    overflow: hidden;
    padding-top: 56.25%;
    border-radius: 10px;
  }

  &__image-box {
    position: absolute;
  }

  &__arrow-button {
    position: absolute;
    z-index: 1;
    width: 50px;
    top: 50%;
    &--left {
      left: 1px;
    }
    &--right {
      right: 20px;
    }
  }

  img {
    position: absolute;
    transform: translateX(-100%);
    visibility: hidden;
    border-radius: 10px;
    top: 0;
    height: 100%;
  }

  img.show {
    transform: translateX(0%);
  }

  img.after {
    transform: translateX(50%);
  }

  img.animation {
    transition: all 1s ease;
    visibility: visible;
  }

  &__buttons {
    align-items: flex-end;
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: center;
    span {
      width: 10px;
      height: 10px;
      background-color: #ccc;
      margin: 3px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: rgb(146, 146, 146);
        transition: 0.3s;
      }
      &.active {
        background-color: rgb(92, 90, 90);
      }
    }
  }

  &__slider-arrow {
    position: relative;
    display: block;
    fill: #ccc;
    height: 80px;
    top: 50%;
    padding: 30px;
    transition: transform 0.2s;
    z-index: 100;
    cursor: pointer;

    &--right:hover,
    &--left:hover {
      fill: #ccc;
    }
    &--right {
      &:hover {
        transform: scale(1.5);
      }
    }
    &--left {
      transform: rotate(180deg);
      &:hover {
        transform: scale(1.5) rotate(180deg);
      }
    }
  }
}
</style>
