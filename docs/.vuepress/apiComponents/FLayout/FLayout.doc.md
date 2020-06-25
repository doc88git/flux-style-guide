### Props

| Prop name         | Description | Type    | Values | Default   |
| ----------------- | ----------- | ------- | ------ | --------- |
| menuItems         |             | array   | -      | []        |
| hasMenu           |             | boolean | -      | false     |
| menuSelected      |             | string  | -      | 'home'    |
| menuSubItemsLimit |             | number  | -      | 1         |
| color             |             | string  | -      | 'primary' |
| mainTitle         |             | string  | -      | ''        |
| align             |             | string  | -      | 'center'  |
| weight            |             | string  | -      | '500'     |
| styles            |             | string  | -      | null      |
| iconLib           |             | string  | -      | 'flux'    |

### Events

| Event name      | Type      | Description |
| --------------- | --------- | ----------- |
| menu-item-click | undefined |

### Slots

| Name         | Description | Bindings                              |
| ------------ | ----------- | ------------------------------------- |
| logo         |             | [<br> {<br> "name": "slot"<br> }<br>] |
| settings     |             | [<br> {<br> "name": "slot"<br> }<br>] |
| menu-prepend |             | [<br> {<br> "name": "slot"<br> }<br>] |
| content      |             |                                       |
