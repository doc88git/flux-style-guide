<template>
  <div class="FBanner">
    <div class="FBanner__banner-slider-box">
      <svg
        @click="prev()"
        class="FBanner__slider-arrow FBanner__slider-arrow--left"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        v-if="currentNumber != 0"
      >
        <path
          d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
        />
      </svg>
      <svg
        @click="next()"
        v-if="currentNumber >= 0 && currentNumber != this.images.length - 1"
        class="FBanner__slider-arrow FBanner__slider-arrow--right"
        id="slider-arrow-right"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
        />
      </svg>
      <div class="FBanner__banner-box">
        <img
          class="FBanner__banner-slider-image"
          v-for="(image, key) in images"
          :key="key"
          :src="image"
          :class="imageClass(key)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import banner1 from "../../assets/images/u509_banner_1.png";
import banner2 from "../../assets/images/bg-gradient_u9_banner_2.png";
import banner3 from "../../assets/images/u510_banner_1.png";
import banner4 from "../../assets/images/bg-gradient_u9_banner_2.png";
import json from "./banner.json";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      images: [banner1, banner2, banner3, banner4],
      currentNumber: 0,
      json,
      animation: false
    };
  },
  computed: {
    assetUrl() {
      return require(this.images);
    }
  },
  methods: {
    imageClass(index) {
      return [
        {
          "slide__prev image-show":
            index < this.currentNumber &&
            Math.abs(index - this.currentNumber) <= 1
        },
        { "slide__active image-show": index === this.currentNumber },
        {
          "slide__next image-show next-to":
            index > this.currentNumber &&
            Math.abs(index - this.currentNumber) <= 1
        }
      ];
    },
    next() {
      if (!this.animation) {
        if (this.images.length - 1 > this.currentNumber) {
          this.animation = true;
          this.currentNumber++;
        }
        setTimeout(() => {
          this.animation = false;
        }, 1500);
      }
    },
    prev() {
      if (!this.animation) {
        if (this.currentNumber > 0) {
          this.animation = true;
          this.currentNumber--;
          setTimeout(() => {
            this.animation = false;
          }, 1500);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.FBanner {
  &__slider-arrow {
    position: absolute;
    display: block;
    z-index: 1;
    fill: #fff;
    // fill: #1a202c;
    margin-right: 2px;
    margin-bottom: 2px;
    top: 260px;
    right: 20px;
    width: 90;
    height: 80px;
    padding: 30px;
    transition: transform 0.2s;
    z-index: 3;
    cursor: pointer;

    &--right:hover,
    &--left:hover {
      fill: #fff;
    }
    &--right {
      right: 4px;
      &:hover {
        transform: scale(1.5);
      }
    }
    &--left {
      left: 4px;
      transform: rotate(180deg);
      &:hover {
        transform: scale(1.5) rotate(180deg);
      }
    }
  }

  &__banner-slider-box {
    width: 1410px;
    height: 600px;
    border-radius: 10px;
    overflow: hidden;
    margin: 5px;
    position: absolute;
    background-color: #ccc;
  }

  &__banner-slider-image {
    position: absolute;
    object-fit: cover;
    &:not(.image-show) {
      display: none;
    }
    &.slide__prev {
      transform: translateX(-100%);
      z-index: 3;
    }
    &.slide__active {
      transform: translateX(0%);
      z-index: 2;
    }
    &.slide__next {
      transform: translateX(50%);
    }
    &.slide__prev,
    &.slide__active,
    &.slide__next {
      transition: transform 1.5s ease-in-out;
    }
  }

  &__banner-box {
    bottom: 97px;
    position: relative;
  }

  &__slider-box {
    max-height: 100%;
  }
}
</style>
