### Props

| Prop name         | Description                                                                  | Type    | Values | Default |
| ----------------- | ---------------------------------------------------------------------------- | ------- | ------ | ------- |
| options           | Array of options to be displayed                                             | array   | -      |         |
| displayClear      | Whether or not the display the "Clear selection" section                     | boolean | -      | false   |
| selectAll         | Whether or not the display the "Select all" section                          | boolean | -      | false   |
| trackBy           | The property to use as the option's trackBy value                            | string  | -      |         |
| displayNullOption | Whether or not to display an option to indicate that the field will be empty | boolean | -      | false   |
| isNullSelected    |                                                                              | boolean | -      | false   |
| nullOptionIcon    | NullOption's icon, if any                                                    | string  | -      | ''      |
| nullOptionText    | NullOption's label text                                                      | string  | -      | ''      |

### Events

| Event name         | Type | Description |
| ------------------ | ---- | ----------- |
| toggle-null-option |      |
| clear              |      |
| select-all         |      |

### Slots

| Name         | Description | Bindings                                                                 |
| ------------ | ----------- | ------------------------------------------------------------------------ |
| list-prepend |             |                                                                          |
| option       |             | [<br> {<br> "name": "option"<br> },<br> {<br> "name": "index"<br> }<br>] |
