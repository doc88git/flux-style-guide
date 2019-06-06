import { storiesOf } from "@storybook/vue";

import { FLink } from "@/components/FLink";

storiesOf("Components|Link", module)
  .add(
    "Router",
    () => ({
      components: { FLink },
      template: `
        <f-link to="/">Link</f-link>`
    }),
    {
      info: {
        sumary: "Link component"
      }
    }
  )
  .add(
    "Link",
    () => ({
      components: { FLink },
      template: `
        <f-link link="http://" label="http://">`
    }),
    {
      info: {
        sumary: "Link component"
      }
    }
  );
