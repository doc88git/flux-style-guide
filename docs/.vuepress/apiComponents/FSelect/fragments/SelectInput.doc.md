### Props

| Prop name        | Description                                                                                          | Type    | Values | Default      |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------- | ------ | ------------ |
| label            | The floating label to be displayed on the input                                                      | string  | -      | ''           |
| placeholder      | The placeholder to be displayed when no value is selected and<br>the label is floating on the top    | string  | -      | 'Selecionar' |
| currentValue     | Current value to be displayed, in case it isn't a multiple select.                                   | object  | -      | {}           |
| displayBy        | The property name to use as the currentValue's label.                                                | string  | -      |              |
| isActive         | Whether the MultiSelect is active or not (whether the options list<br>is being displayed, basically) | boolean | -      | false        |
| numSelected      | Number of selected items, if it is multiple.                                                         | number  | -      | 0            |
| searchable       | Whether or not it is searchable                                                                      | boolean | -      | false        |
| searchQuery      | The search query in case it is searchable                                                            | string  | -      | ''           |
| showSelectedPics | Whether or not to show the selected option's pictures<br>(only works for `type="photo"`)             | boolean | -      | false        |
| isNullSelected   |                                                                                                      | boolean | -      | false        |
| nullOptionText   | NullOption's label text                                                                              | string  | -      | ''           |
| nullOptionIcon   | NullOption's icon, if any                                                                            | string  | -      | ''           |

### Events

| Event name     | Type      | Description |
| -------------- | --------- | ----------- |
| toggle-options |           |
| search         | undefined |
