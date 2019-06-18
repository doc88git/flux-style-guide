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
          rounded: "Rounded all coners",
          roundedT: "Rounded on top coners",
          roundedB: "Rounded on bottom coners",
          roundedTl: "Rounded on top left coner",
          roundedTr: "Rounded on top right coner",
          roundedBl: "Rounded on bottom left coner",
          roundedBr: "Rounded on bottom right coner"
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
          rounded: "Rounded all coners",
          roundedT: "Rounded on top coners",
          roundedB: "Rounded on bottom coners",
          roundedTl: "Rounded on top left coner",
          roundedTr: "Rounded on top right coner",
          roundedBl: "Rounded on bottom left coner",
          roundedBr: "Rounded on bottom right coner"
        }
      }
    }),
    {
      info: {
        sumary: "Image component"
      }
    }
  );
