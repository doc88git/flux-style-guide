# App Fullscreen

There are times when you want your website or App to run in fullscreen. FSG makes it easy by wrapping the [Web Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

## Instalation

```
/*
 * No installation step is necessary.
 * It gets installed by default.
 */
```

## Usage

::: tip
For an exhaustive list of properties and methods, please check out the API section.
:::

```js
// inside of a Vue file

// Requesting fullscreen mode:
this.$f.fullscreen.request()
  .then(() => {
    // success!
  })
  .catch(err => {
    // oh, no!!!
  })

// Exiting fullscreen mode:
this.$f.fullscreen.exit()
  .then(() => {
    // success!
  })
  .catch(err => {
    // oh, no!!!
  })
```

@[example](AppFullscreen)

## AppFullscreen API

### Injection

```js
$f.fullscreen
```

### Props

| Prop name | Description              | Type    | Values   | Default |
| --------- | ------------------------ | ------- | -------- | ------- |
| isCapable | Does browser support it? | Boolean |          | `false` |
