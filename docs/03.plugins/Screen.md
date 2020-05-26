# Screen

## Instalation

```
/*
 * No installation step is necessary.
 * It gets installed by default.
 */
```

## Usage

Notice `$f.screen` below. This is just a simple usage example.

```js
// script part of a Vue component
export default {
  computed: {
    buttonColor () {
      return this.$f.screen.lt.md
        ? 'primary'
        : 'secondary'
    }
  }
}
```

We can also use the Screen plugin outside of a Vue component:

```js
import { Screen } from '@doc88/flux-style-guide'

// Screen.gt.md
// Screen.md
// Screen.name ('xs', 'sm', ...)

```

## Configuration

There are a few methods that can be used to tweak how Screen plugin works:

| Method                | Description                                                       | Example                            |
|-----------------------|-------------------------------------------------------------------|------------------------------------|
| `setDebounce(Number)` | Change the default 100ms debounce to some other value.            | `setDebounce(500) // 500ms`        |
| `setSizes(Object)`    | Change window breakpoints; does NOT also changes CSS breakpoints. | `setSizes({ lg: 1024, xl: 2000 })` |


## Screen API

### Injection

```js
$f.screen
```