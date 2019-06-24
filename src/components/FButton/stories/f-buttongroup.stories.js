import { storiesOf } from "@storybook/vue";
// import { text, boolean } from "@storybook/addon-knobs";
import FButtonGroup from "../FButtonGroup.vue";

const options = [
  { label: "Tab 1", value: 1 },
  { label: "Tab 2", value: 2 },
  { label: "Tab 3", value: 3 }
];

// const groupId = "BUTTON-OPTIONS-ID1";
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
    "Button Group: Default",
    () => ({
      components: { FButtonGroup },
      data: () => ({
        options
      }),
      methods: {
        change: value => {
          console.log({ value });
        }
      },
      template: `
        <div class="p-8">
          <f-button-group :default="1" :options="options" @change="change" />\
        </div>
      `
    }),
    {
      info: { summary }
    }
  )
  .add(
    "Button Group: Outline",
    () => ({
      components: { FButtonGroup },
      data: () => ({
        options
      }),
      methods: {
        change: value => {
          console.log({ value });
        }
      },
      template: `
        <div class="p-8">
          <f-button-group :default="1" outline :options="options" @change="change" />
        </div>
      `
    }),
    {
      info: { summary }
    }
  )
  .add(
    "Button Group: Tab",
    () => ({
      components: { FButtonGroup },
      data: () => ({
        options
      }),
      methods: {
        change: value => {
          console.log({ value });
        }
      },
      template: `
        <div class="p-8">
          <f-button-group :default="1" tab :options="options" @change="change" />
        </div>
      `
    }),
    {
      info: { summary }
    }
  );
