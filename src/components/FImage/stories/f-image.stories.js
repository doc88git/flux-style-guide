import { storiesOf } from "@storybook/vue";

import { FImage } from "@/components/FImage";
import { FContainer } from "@/components/FContainer";

storiesOf("Components|Image", module)
  .add(
    "Default",
    () => ({
      components: { FContainer, FImage },
      template: `
        <f-container style="width: 600px" class="m-8">
          <f-image src="https://altitude-community.aircanada.com/app/webroot/img/default-bg-card.png" />
        </f-container>`,
      propsDescription: {
        FImage: {
          rounded: "Rounded all corners",
          roundedT: "Rounded on top corners",
          roundedB: "Rounded on bottom corners",
          roundedTl: "Rounded on top left corner",
          roundedTr: "Rounded on top right corner",
          roundedBl: "Rounded on bottom left corner",
          roundedBr: "Rounded on bottom right corner"
        }
      }
    }),
    {
      info: {
        sumary: "Image component"
      }
    }
  )
  .add(
    "Rounded",
    () => ({
      components: { FContainer, FImage },
      template: `
        <f-container style="width: 600px" class="m-8">
          <f-image rounded src="https://altitude-community.aircanada.com/app/webroot/img/default-bg-card.png" />
        </f-container>`,
      propsDescription: {
        FImage: {
          rounded: "Rounded all corners",
          roundedT: "Rounded on top corners",
          roundedB: "Rounded on bottom corners",
          roundedTl: "Rounded on top left corner",
          roundedTr: "Rounded on top right corner",
          roundedBl: "Rounded on bottom left corner",
          roundedBr: "Rounded on bottom right corner"
        }
      }
    }),
    {
      info: {
        sumary: "Image component"
      }
    }
  );
