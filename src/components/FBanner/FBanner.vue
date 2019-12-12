<template>
  <div class="FBanner">
    <section class="FBanner__container">
      <div class="FBanner__images">
        <img
          v-for="(image, i) in images"
          :key="image.id"
          :src="image.src"
          :class="slideClass(image.class, i)"
          :style="slideStyle(i)"
        />
        <div class="FBanner__arrow-button">
          <svg
            v-if="isFirstImage && !bullet && !outSlider"
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
        <div class="FBanner__arrow-button">
          <svg
            v-if="isLastImage && !bullet && !outSlider"
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
      <div class="FBanner__buttons" v-if="bullet && !outSlider">
        <span
          v-for="(image, i) in images"
          :key="image.id"
          :class="slideClass(image.class, i)"
          @click="handleActiveSlider(i)"
        ></span>
      </div>
    </section>
  </div>
</template>

<script>
import banner1 from "../../assets/images/u509_banner_1.png";
import banner2 from "../../assets/images/bg-gradient_u9_banner_2.png";
import banner3 from "../../assets/images/u510_banner_1.png";
import banner4 from "../../assets/images/bg-gradient_u10_banner_2.png";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      images: [
        {
          src: banner1,
          classes: "",
          id: 0
        },
        {
          src: banner2,
          classes: "",
          id: 1
        },
        {
          src: banner3,
          classes: "",
          id: 2
        },
        {
          src: banner4,
          classes: "",
          id: 3
        }
      ],
      activeBanner: 0
    };
  },
  props: {
    bullet: Boolean,
    outSlider: Boolean
  },
  computed: {
    isLastImage() {
      return this.activeBanner < this.images.length - 1;
    },
    isFirstImage() {
      return this.activeBanner > 0;
    }
  },
  mounted() {
    this.handleActiveSlider(0);
  },
  methods: {
    handleActiveSlider(index) {
      this.lastBanner = this.activeBanner;
      this.activeBanner = index;
    },

    slideClass(classes, i) {
      return [
        `${classes}`,
        { show: this.activeBanner === i },
        { active: this.activeBanner === i },
        { after: this.activeBanner < i },
        { animation: this.activeBanner === i || this.lastBanner === i }
      ];
    },

    slideStyle(i) {
      return `z-index: ${-i}`;
    },

    next() {
      this.handleActiveSlider(this.activeBanner + 1);
      setTimeout(() => {
        this.activeBanner + 1;
        console.log("um de cada vez");
      }, 1500);
    },

    prev() {
      this.handleActiveSlider(this.activeBanner - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.FBanner {
  &__container {
    // overflow: hidden;
    // max-width: 100%;
    // border-radius: 10px;
    // height: 600px;
    // max-height: 100%;
  }

  &__images {
    // border-radius: 10px;
    // width: 100%;
    // // height: 600;
    // position: relative;
  }

  &__arrow-button {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    height: 350px;
    width: 50px;
  }

  img {
    // width: 100%;
    // border-radius: 10px;
    // max-width: 100%;
    position: absolute;
    object-fit: cover;
    transform: translateX(-100%);
    visibility: hidden;
  }

  img.show {
    // border-radius: 10px;
    transform: translateX(0%);
  }

  img.after {
    // border-radius: 10px;
    // width: 100%;
    transform: translateX(50%);
  }

  img.animation {
    // border-radius: 10px;
    transition: all 1s ease;
    visibility: visible;
  }

  &__buttons {
    display: flex;
    position: relative;
    // justify-content: center;
    // padding: 10px;
    // top: 95%;
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
    position: absolute;
    display: block;
    fill: #ccc;
    // margin-right: 2px;
    // margin-bottom: 2px;
    // top: 275px;
    // right: 20px;
    width: 90;
    height: 80px;
    padding: 30px;
    transition: transform 0.2s;
    z-index: 100;
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
}
</style>
