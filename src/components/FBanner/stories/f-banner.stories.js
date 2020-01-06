import { storiesOf } from '@storybook/vue'
// import { boolean, text } from "@storybook/addon-knobs";
import FBanner from '../FBanner.vue'

const images = ''
// const images = [
//   "https://www.webdesignerdepot.com/cdn-origin/uploads/2017/03/getting_started_with_vue_banner.png",
//   "https://miro.medium.com/max/1500/1*XRzDO0hdmXGQw_CmNvrL3w.jpeg"
// ];

storiesOf('Components|Banners', module)
  .add(
    'Banner: Slider',
    () => ({
      components: { FBanner },
      data: () => ({ images }),
      methods: {},
      props: {},
      template: `
        <div class="p-8">
          <f-banner :images="images"/>
        </div>
      `
    }),
    {
      info: {
        summary: `
          # Banner
        `
      }
    }
  )
  .add(
    'Banner: Slider with Bullet',
    () => ({
      components: { FBanner },
      data: () => ({ images }),
      methods: {},
      props: {},
      template: `
        <div class="p-8">
          <f-banner bullet :images="images"/>
        </div>
      `
    }),
    {
      info: {
        summary: `
          # Banner
        `
      }
    }
  )
  .add(
    'Banner: Out Slider',
    () => ({
      components: { FBanner },
      data: () => ({ images }),
      methods: {},
      props: {},
      template: `
        <div class="p-8">
          <f-banner out-slider :images="images"/>
        </div>
      `
    }),
    {
      info: {
        summary: `
          # Banner
        `
      }
    }
  )
  .add(
    'Banner: Out Slider with Bullet',
    () => ({
      components: { FBanner },
      data: () => ({ images }),
      methods: {},
      props: {},
      template: `
        <div class="p-8">
          <f-banner out-slider bullet :images="images"/>
        </div>
      `
    }),
    {
      info: {
        summary: `
          # Banner
        `
      }
    }
  )
