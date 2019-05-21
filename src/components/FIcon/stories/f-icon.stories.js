import { storiesOf } from "@storybook/vue";

import FIcon from "../FIcon.vue";

storiesOf("Template|Icon", module)
  .add(
    "Outlined",
    () => ({
      components: { FIcon },
      template: '<f-icon name="extension" type="outlined" lib="material" />'
    }),
    {
      info: "Componente de ícone"
    }
  )
  .add(
    "Sharp",
    () => ({
      components: { FIcon },
      template: '<f-icon name="extension" type="sharp" lib="material" />'
    }),
    {
      info: "Componente de ícone"
    }
  )
  .add(
    "TwoTone",
    () => ({
      components: { FIcon },
      template: '<f-icon name="extension" type="twoTone" lib="material" />'
    }),
    {
      info: "Componente de ícone"
    }
  )
  .add(
    "Round",
    () => ({
      components: { FIcon },
      template: '<f-icon name="extension" type="round" lib="material" />'
    }),
    {
      info: "Componente de ícone"
    }
  )
  .add(
    "Default",
    () => ({
      components: { FIcon },
      template: '<f-icon name="extension" type="default" lib="material" />'
    }),
    {
      info: "Componente de ícone"
    }
  );
