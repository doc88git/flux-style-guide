import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import { FField, FInput } from "..";

const groupId = "FIELD-OPTIONS-ID1";
const summary = `
## Label
`;

storiesOf("Form|Field", module)
  .add(
    "Field",
    () => ({
      components: { FField, FInput },
      props: {
        label: {
          default: text("label", "Nome", groupId)
        }
      },
      template: `<f-field :label="label"><f-input /></f-field >`
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "Field with error",
    () => ({
      components: { FField, FInput },
      props: {
        label: {
          default: text("label", "Nome", groupId)
        },
        hasError: {
          default: text("error", true, groupId)
        }
      },
      template: `<f-field :label="label" :hasError="hasError"><f-input /></f-field >`
    }),
    {
      info: {
        summary
      }
    }
  );
