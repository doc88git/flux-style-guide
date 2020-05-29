### Props

| Prop name         | Description                                              | Type    | Values | Default |
| ----------------- | -------------------------------------------------------- | ------- | ------ | ------- |
| options           | Array of options to be displayed                         | array   | -      |         |
| displayClear      | Whether or not the display the "Clear selection" section | boolean | -      | false   |
| selectAll         | Whether or not the display the "Select all" section      | boolean | -      | false   |
| trackBy           | The property to use as the option's trackBy value        | string  | -      |         |
| displayNullOption |                                                          | boolean | -      | false   |
| isNullSelected    |                                                          | boolean | -      | false   |
| nullOptionIcon    |                                                          | string  | -      | ''      |
| nullOptionText    |                                                          | string  | -      | ''      |

### Events

| Event name         | Type      | Description |
| ------------------ | --------- | ----------- |
| toggle-null-option |           |
| clear              |           |
| select-all         |           |
| input              | undefined |

### Slots

| Name         | Description | Bindings                                                                 |
| ------------ | ----------- | ------------------------------------------------------------------------ |
| list-prepend |             |                                                                          |
| option       |             | [<br> {<br> "name": "option"<br> },<br> {<br> "name": "index"<br> }<br>] |
