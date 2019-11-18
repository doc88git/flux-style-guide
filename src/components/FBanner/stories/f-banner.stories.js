import { storiesOf } from "@storybook/vue";
// import { boolean, text } from "@storybook/addon-knobs";
import FBanner from "../FBanner.vue";

storiesOf("Components|Banners", module).add(
  "Default",
  () => ({
    components: { FBanner },
    data: () => ({}),
    methods: {},
    props: {},
    template: `
      <div class="p-8">
        <f-banner/>
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
);
