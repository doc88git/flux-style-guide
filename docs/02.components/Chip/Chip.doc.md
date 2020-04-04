# FChip API

## Props

| Prop name | Description | Type           | Values | Default   |
| --------- | ----------- | -------------- | ------ | --------- |
| label     |             | string         | -      |           |
| value     |             | string\|number | -      |           |
| color     |             | string         | -      | 'primary' |
| iconColor |             | string         | -      | 'white'   |
| textColor |             | string         | -      |           |
| icon      |             | string         | -      |           |
| removable |             | boolean        | -      |           |
| disable   |             | boolean        | -      |           |
| selected  |             | boolean        | -      | null      |

## Events

| Event name      | Type      | Description |
| --------------- | --------- | ----------- |
| remove          | undefined |
| update:selected | undefined |
| click           | undefined |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| icon    |             |          |
| default |             |          |
| close   |             |          |
