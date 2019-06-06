import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FButton from "../FButton.vue";

const groupId = "BUTTON-OPTIONS-ID1";
const summary = `
## Label
- Use label or slot

## Theme
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
        icon: {
          default: text("icon", "", groupId)
        },
        color: {
          default: text("color", "primary", groupId)
        }
      },
      template: `<f-button :label="label" :icon="icon" :color="color" />`
    }),
    {
      info: { summary }
    }
  )
  .add(
    "Button: Flat",
    () => ({
      components: { FButton },
      props: {
        label: {
          default: text("label", "Button", groupId)
        },
        icon: {
          default: text("icon", "", groupId)
        },
        color: {
          default: text("color", "primary", groupId)
        }
      },
      template: `<f-button flat :label="label" :icon="icon" :color="color" />`
    }),
    {
      info: { summary }
    }
  )
  .add(
    "Button: Outline",
    () => ({
      components: { FButton },
      props: {
        label: {
          default: text("label", "Button", groupId)
        },
        icon: {
          default: text("icon", "", groupId)
        },
        color: {
          default: text("color", "primary", groupId)
        }
      },
      template: `<f-button outline :label="label" :icon="icon" :color="color" />`
    }),
    {
      info: { summary }
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
        icon: {
          default: text("icon", "home", groupId)
        },
        color: {
          default: text("color", "primary", groupId)
        }
      },
      template: `<f-button :label="label" :icon="icon" :color="color" />`
    }),
    {
      info: { summary }
    }
  )
  .add(
    "Button: Icon Flat",
    () => ({
      components: { FButton },
      props: {
        label: {
          default: text("label", "Button", groupId)
        },
        icon: {
          default: text("icon", "home", groupId)
        },
        color: {
          default: text("color", "primary", groupId)
        }
      },
      template: `<f-button :label="label" :icon="icon" :color="color" flat />`
    }),
    {
      info: { summary }
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
        icon: {
          default: text("icon", "", groupId)
        }
      },
      template: `<f-button :label="label" :icon="icon">{{ text }}</f-button>`
    }),
    {
      info: { summary }
    }
  );
