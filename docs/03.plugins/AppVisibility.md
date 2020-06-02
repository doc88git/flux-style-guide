# App Visibility

## Instalation

```
/*
 * No installation step is necessary.
 * It gets installed by default.
 */
 ```

## Usage

@[example](AppVisibility)

### Watching for status change

```html
<template>...</template>

<script>
export default {
  watch: {
    '$q.appVisible' (val) {
      console.log(val ? 'App became visible' : 'App went in the background')
    }
  }
}
</script>
```

## AppVisibility API

### Injection

```js
$f.appVisible
```

### Props

| Prop name | Description              | Type    | Values   | Default |
| --------- | ------------------------ | ------- | -------- | ------- |
| appVisible | Does the app have user focus? Or the app runs in the background / another tab has the user's attention | Boolean |          | `false` |
