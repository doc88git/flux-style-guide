### Props

| Prop name    | Description                                              | Type    | Values | Default |
| ------------ | -------------------------------------------------------- | ------- | ------ | ------- |
| options      | Array of options to be displayed                         | array   | -      |         |
| displayClear | Whether or not the display the "Clear selection" section | boolean | -      | false   |
| selectAll    | Whether or not the display the "Select all" section      | boolean | -      | false   |
| trackBy      | The property to use as the option's trackBy value        | string  | -      |         |

### Events

| Event name | Type | Description |
| ---------- | ---- | ----------- |
| clear      |      |
| select-all |      |

### Slots

| Name   | Description | Bindings                                                                 |
| ------ | ----------- | ------------------------------------------------------------------------ |
| option |             | [<br> {<br> "name": "option"<br> },<br> {<br> "name": "index"<br> }<br>] |
