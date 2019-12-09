<template>
  <div class="FBanner" :class="bannerStyle">
    <section class="FBanner__container">
      <div class="FBanner__box">
        <img
          class="FBanner__slider-image"
          v-for="image in images"
          :key="image.id"
          :src="image.src"
          :class="`FBanner__slider-image--${image.classes}`"
          :style="{ 'z-index': image.zIndex }"
        />
      </div>
    </section>
    <div class="FBanner__buttons">
      <div
        v-for="(image, i) in images"
        :key="image.id"
        @click="handleActiveSlider(i)"
      ></div>
    </div>
  </div>
</template>

<script>
import banner1 from "../../assets/images/u509_banner_1.png";
import banner2 from "../../assets/images/bg-gradient_u9_banner_2.png";
import banner3 from "../../assets/images/u510_banner_1.png";
import banner4 from "../../assets/images/bg-gradient_u9_banner_2.png";

export default {
  data() {
    return {
      images: [
        {
          src: banner1,
          classes: "",
          id: 0,
          zIndex: ""
        },
        {
          src: banner2,
          classes: "",
          id: 1,
          zIndex: ""
        },
        {
          src: banner3,
          classes: "",
          id: 2,
          zIndex: ""
        },
        {
          src: banner4,
          classes: "",
          id: 3,
          zIndex: ""
        }
      ]
    };
  },
  mounted() {
    this.handleActiveSlider(0);
    this.setIndexes();
  },
  methods: {
    setImages() {},
    handleActiveSlider(index) {
      this.resetClasses();
      this.setShowClass(index);
      this.setAfterClass(index);
    },

    resetClasses() {
      this.images.forEach(slider => (slider.classes = ""));
    },

    setShowClass(i) {
      this.images[i].classes = "show";
    },

    setAfterClass(i) {
      let afterSlides = this.images.slice(i + 1);
      afterSlides.forEach(slider => (slider.classes = "after"));
    },

    setIndexes() {
      const imageArray = this.images.length;
      this.images.forEach((slider, i) => (slider.zIndex = imageArray - i));
    }
  }
};
</script>

<style lang="scss" scoped>
.FBanner {
  &__container {
  }

  &__box {
  }

  &__slider-image {
  }

  &__buttons {
  }
}
</style>
