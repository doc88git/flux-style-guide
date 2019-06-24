import { storiesOf } from "@storybook/vue";
import { text, boolean } from "@storybook/addon-knobs";
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
        },
        textColor: {
          default: text("textColor", "white", groupId)
        },
        small: {
          default: boolean("small", false, groupId)
        },
        bigger: {
          default: boolean("bigger", false, groupId)
        }
      },
      template: `
        <div class="p-8">
          <f-button :label="label" :icon="icon" :color="color" :text-color="textColor" :small="small" :bigger="bigger" />
        </div>
      `
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
      template: `
        <div class="p-8">
          <f-button flat :label="label" :icon="icon" :color="color" />
        </div>
      `
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
      template: `
        <div class="p-8">
          <f-button outline :label="label" :icon="icon" :color="color" />
        </div>
      `
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
        },
        textColor: {
          default: text("textColor", "white", groupId)
        }
      },
      template: `
        <div class="p-8">
          <f-button :label="label" :icon="icon" :color="color" :text-color="textColor" />
        </div>
      `
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
      template: `
        <div class="p-8">
          <f-button :label="label" :icon="icon" :color="color" flat />
        </div>
      `
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
          default: text("label", "Button", groupId)
        },
        icon: {
          default: text("icon", "", groupId)
        },
        color: {
          default: text("color", "white", groupId)
        },
        textColor: {
          default: text("textColor", "white", groupId)
        }
      },
      template: `
        <div class="p-8">
          <f-button :label="label" :icon="icon" :text-color="textColor" :color="color">{{ text }}</f-button>
        </div>
      `
    }),
    {
      info: { summary }
    }
  );
