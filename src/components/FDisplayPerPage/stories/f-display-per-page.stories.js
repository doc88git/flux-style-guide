import { storiesOf } from "@storybook/vue";
// import { text, boolean } from "@storybook/addon-knobs";
import FDisplayPerPage from "../FDisplayPerPage.vue";

const options = [
  { label: 10, value: 1, selected: true },
  { label: 25, value: 2, selected: false },
  { label: 50, value: 3, selected: false }
];

storiesOf("Components|DisplayPerPage", module)
  .add(
    "Default",
    () => ({
      components: { FDisplayPerPage },
      data: () => ({
        options
      }),
      methods: {
        handleChange: value => {
          const elem = document.querySelector('.selected');
          elem.classList.remove('selected');
          value.target.classList.add('selected');
          console.log(value.target.value);
        }
      },
      template: `
        <div>
          <f-display-per-page :options="options" :change="handleChange" theme="secondary"></f-display-per-page>
        </div>
      `
    })
  )
