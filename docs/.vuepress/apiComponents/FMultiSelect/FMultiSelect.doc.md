### Props

| Prop name     | Description                                                                      | Type    | Values | Default |
| ------------- | -------------------------------------------------------------------------------- | ------- | ------ | ------- |
| value         | Current value, must be an array if it is multiple                                |         | -      |         |
| label         | The field's label                                                                | string  | -      | ''      |
| options       | Array of Option objects.                                                         | array   | -      | []      |
| type          | Defines the variation of the MultiSelect item's                                  | string  | -      | 'base'  |
| displayBy     | Defines the property of the option object to use to be<br>displayed as the label | string  | -      | 'label' |
| selectAll     | Defines the property of the option object to select all items                    | boolean | -      | false   |
| trackBy       | Defines the property of the option object to use as the value                    | string  | -      | 'value' |
| multiple      | Whether or not the select is multiple.                                           | boolean | -      | true    |
| searchRequest | Emit search to parent.                                                           | boolean | -      | false   |

### Events

| Event name | Type      | Description |
| ---------- | --------- | ----------- |
| input      | undefined |
| blur       |           |
| request    | undefined |

### Slots

| Name           | Description | Bindings                                                                                                                                       |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| slotName       |             |                                                                                                                                                |
| option         |             | [<br> {<br> "name": "option"<br> },<br> {<br> "name": "index"<br> },<br> {<br> "name": "isSelected"<br> }<br>]                                 |
| option-prepend |             | [<br> {<br> "name": "slot"<br> },<br> {<br> "name": "option"<br> },<br> {<br> "name": "index"<br> },<br> {<br> "name": "isSelected"<br> }<br>] |
| option-append  |             | [<br> {<br> "name": "slot"<br> },<br> {<br> "name": "option"<br> },<br> {<br> "name": "index"<br> },<br> {<br> "name": "isSelected"<br> }<br>] |
