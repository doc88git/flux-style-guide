import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FHeader from '../FHeader';

storiesOf('Components|Header', module)
  .add('Default', () => ({
    components: { FHeader },
    props: {
      label: {
        default: text('label')
      }
    },
    template: `
      <f-header>
        <div>header</div>
      </f-header>
    `
  }));