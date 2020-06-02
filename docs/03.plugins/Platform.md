# Platform

Helpers are built into Flux Style Guide to detect the Platform (and its capabilities) within the context of which the code is running.

::: tip
Based on your needs, you might also want to check the Style & Identity > Visibility page to see how you can achieve the same effect using CSS alone. This latter method will render your DOM elements or components regardless of platform though, so choose wisely on how you want to handle the performance of your app.
:::

## Instalation

```
/*
 * No installation step is necessary.
 * It gets installed by default.
 */
```

## Usage

Usage inside a Vue component JS:

```js
this.$f.platform.is.mobile
```

Usage inside a Vue component template:

```js
$f.platform.is.desktop
```

You must import it when you use it outside of a Vue component :

```js
import { Platform } from '@doc88/flux-style-guide'
```

`Platform.is` by itself returns an object containing details about the current platform. For example when running Chrome on a MacOS desktop machine, `Platform.is` would return something similar to:

```js
{
  chrome: true,
  desktop: true,
  mac: true,
  name: "chrome",
  platform: "mac",
  version: "70.0.3538.110",
  versionNumber: 70,
  webkit: true
}
```

Now, let’s say we want to render different components or DOM elements, based on the platform that the code is running under. We want to show something on desktop and something else on mobile. We would proceed like this:

```html
<div v-if="$f.platform.is.desktop">
  I'm only rendered on desktop!
</div>
```

```html
<div v-if="$f.platform.is.mobile">
  I'm only rendered on mobile!
</div>
```

@[example](Platform)

## Platform API

### Injection

```js
$f.platform
```