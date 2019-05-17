import Vue from "vue";
import { storiesOf } from "@storybook/vue";

storiesOf("Template|Icon", module)
  .add(
    "type outlined",
    () => '<f-icon name="extension" type="outlined" lib="material" />',
    {
      info: "Componente de ícone"
    }
  )
  .add(
    "type sharp",
    () => '<f-icon name="extension" type="sharp" lib="material" />'
  )
  .add(
    "type twoTone",
    () => '<f-icon name="extension" type="twoTone" lib="material" />'
  )
  .add(
    "type round",
    () => '<f-icon name="extension" type="round" lib="material" />'
  )
  .add(
    "type default",
    () => '<f-icon name="extension" type="default" lib="material" />'
  );
