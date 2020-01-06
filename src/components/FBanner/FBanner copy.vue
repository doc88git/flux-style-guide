<template>
  <div class="FBanner" :class="bannerStyle">
    <div class="FBanner__container">
      <svg
        @click="prev()"
        class="FBanner__slider-arrow--out-slider--left FBanner__slider-arrow FBanner__slider-arrow--out-slider"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        v-if="currentNumber != 0 && outSlider && !bullet"
      >
        <path
          d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
        />
      </svg>
      <div class="FBanner__banner-slider-box">
        <svg
          @click="prev()"
          class="FBanner__slider-arrow FBanner__slider-arrow--left"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          v-if="currentNumber != 0 && !bullet && !outSlider"
        >
          <path
            d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
          />
        </svg>

        <svg
          @click="next()"
          v-if="
            currentNumber >= 0 &&
              currentNumber != this.images.length - 1 &&
              !bullet &&
              !outSlider
          "
          class="FBanner__slider-arrow FBanner__slider-arrow--right"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
          />
        </svg>

        <div
          class="FBanner__banner-box FBanner__banner-box--out-slider-banner-box"
        >
          <img
            class="FBanner__banner-slider-image"
            v-for="(image, key) in images"
            :key="key"
            :src="image"
            :class="classImages[key]"
          />
        </div>
        <div class="FBanner__bullet" v-if="bullet && !outSlider">
          <button
            v-for="(image, key) in images"
            :key="key"
            class="FBanner__bullet-button"
            @click="setImage(key)"
          ></button>
        </div>
      </div>
      <svg
        @click="next()"
        v-if="
          currentNumber >= 0 &&
            currentNumber != this.images.length - 1 &&
            outSlider &&
            !bullet
        "
        class="FBanner__slider-arrow FBanner__slider-arrow--out-slider FBanner__slider-arrow--out-slider--right"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.65,15.85a.48.48,0,0,0,.7,0l7.5-7.5a.48.48,0,0,0,0-.7L4.35.15a.48.48,0,0,0-.7,0,.48.48,0,0,0,0,.7L10.79,8,3.65,15.15A.48.48,0,0,0,3.65,15.85Z"
        />
      </svg>
      <div class="FBanner__bullet-out" v-if="bullet && outSlider">
        <button
          v-for="(image, key) in images"
          :key="key"
          class="FBanner__bullet-out-button-out"
          @click="setImage(key)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import banner1 from '../../assets/images/u509_banner_1.png'
import banner2 from '../../assets/images/bg-gradient_u9_banner_2.png'
import banner3 from '../../assets/images/u510_banner_1.png'
import banner4 from '../../assets/images/bg-gradient_u9_banner_2.png'
// import json from "./banner.json";
import { setTimeout } from 'timers'

export default {
  data() {
    return {
      currentNumber: 0,
      lastCurrentNumber: 0,
      animation: false,
      images: [banner1, banner2, banner3, banner4],
      classImages: [],
      activeImage: 'slide__active image-show',
      nextImage: 'slide__next image-show',
      prevImage: 'slide__prev image-show'
    }
  },
  props: {
    bullet: Boolean,
    outSlider: Boolean
    // images: Array
  },
  computed: {
    bannerStyle() {
      return {
        'FBanner--out-slider': ''
      }
    }
  },
  watch: {
    currentNumber() {
      if (Math.abs(this.lastCurrentNumber - this.currentNumber) >= 2) {
        // this.animation = true;
        // this.currentNumber++;
      }
      // this.lastCurrentNumber = this.currentNumber;
    }
  },
  created() {
    this.classImages = Array.from({ length: this.images.length }, () => null)
    this.classImages[0] = this.activeImage
    this.classImages[1] = this.nextImage
  },
  methods: {
    next() {
      if (!this.animation) {
        if (this.images.length - 1 > this.currentNumber) {
          let initialImages = Array.from(
            { length: this.images.length },
            () => null
          )
          this.animation = true
          this.lastCurrentNumber = this.currentNumber
          this.currentNumber++
          initialImages[this.currentNumber] = this.activeImage
          initialImages[this.currentNumber + 1] = this.nextImage
          initialImages[this.currentNumber - 1] = this.prevImage
          this.classImages = initialImages
        }
        setTimeout(() => {
          this.animation = false
        }, 1500)
      }
    },
    prev() {
      if (!this.animation) {
        if (this.currentNumber > 0) {
          let initialImages = Array.from(
            { length: this.images.length },
            () => null
          )
          this.animation = true
          this.lastCurrentNumber = this.currentNumber
          this.currentNumber--
          initialImages[this.currentNumber] = this.activeImage
          initialImages[this.currentNumber + 1] = this.nextImage
          initialImages[this.currentNumber - 1] = this.prevImage
          this.classImages = initialImages
          setTimeout(() => {
            this.animation = false
          }, 1500)
        }
      }
    },
    setImage(index) {
      if (!this.animation) {
        console.log(this.lastCurrentNumber, this.currentNumber)
        if (Math.abs(this.lastCurrentNumber - this.currentNumber) >= 2) {
          // let initialImages = Array.from(
          //   { length: this.images.length },
          //   () => null
          // );
          // this.animation = true;
          // this.lastCurrentNumber = this.currentNumber;
          // this.currentNumber = index;
          // // Esta parte vai mudar o inicio
          // if (this.lastCurrentNumber - this.currentNumber > 0) {
          //   console.log("entrei");
          //   this.classImages[this.lastCurrentNumber - 1] = null;
          //   this.classImages[this.currentNumber] = this.prevImage;
          //   initialImages[this.currentNumber] = this.activeImage;
          //   initialImages[this.lastCurrentNumber] = this.nextImage;
          //   initialImages[this.currentNumber - 1] = this.prevImage;
          //   this.classImages = initialImages;
          // } else {
          //   //outrladja
          // }
          // // initialImages[this.currentNumber] = this.activeImage;
          // // initialImages[this.currentNumber + 1] = this.nextImage;
          // // initialImages[this.currentNumber - 1] = this.prevImage;
          // // Esta parte vai mudar o final
          // this.classImages = initialImages;
          // setTimeout(() => {
          //   this.animation = false;
          // }, 1500);
          console.log('caso especial')
        } else {
          let initialImages = Array.from(
            { length: this.images.length },
            () => null
          )
          this.animation = true
          this.lastCurrentNumber = this.currentNumber
          this.currentNumber = index
          initialImages[this.currentNumber] = this.activeImage
          initialImages[this.currentNumber + 1] = this.nextImage
          initialImages[this.currentNumber - 1] = this.prevImage
          this.classImages = initialImages
          setTimeout(() => {
            this.animation = false
          }, 1500)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.FBanner {
  &__container {
    max-width: 100%;
    max-height: 700px;
    position: relative;
  }

  &__slider-arrow {
    position: absolute;
    display: block;
    z-index: 1;
    fill: #ccc;
    margin-right: 2px;
    margin-bottom: 2px;
    top: 44%;
    right: 20px;
    width: 90;
    height: 80px;
    padding: 30px;
    transition: transform 0.2s;
    z-index: 3;
    cursor: pointer;

    &--right:hover,
    &--left:hover {
      fill: #ccc;
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

    &--out-slider {
      fill: #ccc;
      top: 44%;

      &--right:hover,
      &--left:hover {
        fill: #1a202c;
      }
      &--right {
        right: 30px;
        &:hover {
          transform: scale(1.5);
        }
      }
      &--left {
        left: 30px;
        transform: rotate(180deg);
        &:hover {
          transform: scale(1.5) rotate(180deg);
        }
      }
    }
  }

  &__banner-slider-box {
    border-radius: 10px;
    max-height: 600px;
    max-width: calc(100% - 180px);
    overflow: hidden;
    margin: auto;
    position: relative;
    background-color: #ccc;
  }

  &__banner-slider-image {
    top: 0;
    position: absolute;
    &:not(.image-show) {
      display: none;
    }
    &.slide__prev {
      transform: translateX(-100%);
      z-index: 4;
    }
    &.slide__active {
      transform: translateX(0%);
      z-index: 3;
    }
    &.slide__next {
      transform: translateX(50%);
      z-index: 2;
    }
    &.slide__prev,
    &.slide__active,
    &.slide__next {
      transition: transform 1.5s ease-in-out;
    }
  }

  &__banner-box {
    padding-top: 56.25%;
    position: relative;
  }

  &__slider-box {
    padding-top: 56.25%;
  }

  &__bullet {
    justify-content: center;
    display: flex;
    position: absolute;
    bottom: 15px;
    width: 100%;
    &-button {
      background-color: #ccc;
      cursor: pointer;
      z-index: 5;
      position: relative;
      padding: 10px;
      margin: 0 5px 0 5px;
      border-radius: 50px;
      height: 0.5px;
      width: 0.5px;
      opacity: 0.6;
      &:hover {
        opacity: 0.9;
      }
      &:active {
        opacity: 0.9;
      }
    }
  }

  &__bullet-out {
    justify-content: center;
    display: flex;
    position: relative;
    width: auto;
    margin-top: 10px;
    &-button-out {
      background-color: #ccc;
      cursor: pointer;
      z-index: 5;
      position: relative;
      padding: 10px;
      margin: 0 5px 0 5px;
      border-radius: 50px;
      height: 0.5px;
      width: 0.5px;
      opacity: 0.6;
      &:hover {
        opacity: 0.9;
      }
      &:active {
        opacity: 0.9;
      }
    }
  }
}
</style>
