import { storiesOf } from "@storybook/vue";
import FMenu from "../FMenu";

storiesOf("Components|Menu", module).add("Default", () => ({
  components: { FMenu },
  data: () => ({}),
  props: {},
  template: `
      <div class="p-8">
        <f-menu :action="showSidebar" />
      </div>
    `,
  methods: {
    showSidebar(payload) {
      console.log(payload);
      this.$emit("click", payload);
    },
    showMenu() {
      console.log("Menu is open");
    },
    showNavbar() {
      console.log("Navbar visible");
    }
  }
}));
