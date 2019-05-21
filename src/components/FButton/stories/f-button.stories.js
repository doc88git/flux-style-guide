import { storiesOf } from "@storybook/vue";
import { select, text } from "@storybook/addon-knobs";
import FButton from "../FButton.vue";

const label = "Button Type";
const defaultValue = "default";
const options = {
  Default: "default",
  Outline: "outline",
  Flat: "flat"
};
const groupId = "BUTTON-OPTIONS-ID1";
const summary = `
## Label
- Use label or slot

## Types
- outlined
- flat
- default

## Icon
- Pass icon name as FIcon
`;

storiesOf("Components|Button", module)
  .add(
    "Button",
    () => ({
      components: { FButton },
      props: {
        label: {
          default: text("label", "Button", groupId)
        },
        type: {
          default: select(label, options, defaultValue, groupId)
        },
        icon: {
          default: text("icon", "", groupId)
        }
      },
      template: `<f-button :label="label" :type="type" :icon="icon" />`
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "Button: Icon",
    () => ({
      components: { FButton },
      props: {
        label: {
          default: text("label", "Button", groupId)
        },
        type: {
          default: select(label, options, defaultValue, groupId)
        },
        icon: {
          default: text("icon", "home", groupId)
        }
      },
      template: `<f-button :label="label" :type="type" :icon="icon" />`
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "Button: Slot",
    () => ({
      components: { FButton },
      props: {
        text: {
          default: text("text", "Button", groupId)
        },
        label: {
          default: text("label", "", groupId)
        },
        type: {
          default: select(label, options, defaultValue, groupId)
        },
        icon: {
          default: text("icon", "", groupId)
        }
      },
      template: `<f-button :label="label" :type="type" :icon="icon">{{ text }}</f-button>`
    }),
    {
      info: {
        summary
      }
    }
  );
