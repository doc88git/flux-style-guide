# Local Storage

Flux Style Guide provides a wrapper over [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

::: tip
Web Storage API only retrieves strings. FSG retrieves data with its original data type. You tell it to store a Number then to retrieve it and it will still be a Number, not a string representation of the number as with Web Storage API. Same for JSON, Regular Expressions, Dates, Booleans and so on.
:::

## Instalation

```
/*
 * No installation step is necessary.
 * It gets installed by default.
 */
```

::: danger Note about SSR
When running the code server-side on SSR builds, this feature can’t work. Web Storage is a browser API only. You can however make use of it on the client-side with SSR.
:::

## Usage

```js
Usage
// outside of a Vue file
import { LocalStorage, SessionStorage } from '@doc88/flux-style-guide'

LocalStorage.set(key, value)
let value = LocalStorage.getItem(key)

SessionStorage.set(key, value)
let value = SessionStorage.getItem(key)
```

```js
// inside of a Vue file

this.$f.localStorage.set(key, value)
let value = this.$f.localStorage.getItem(key)

this.$f.sessionStorage.set(key, value)
let value = this.$f.sessionStorage.getItem(key)
```

For a bulletproof approach when setting a value, it’s best to also catch any potential errors raised by the underlying Local/Session Storage Web API, like when exceeding quota:

```js
try {
  this.$f.localStorage.set(key, value)
} catch (e) {
  // data wasn't successfully saved due to
  // a Web Storage API error
}
```

::: tip
For an exhaustive list of methods, please check the API section.
:::

## Data Types
FSG Storage supports (but not limited to) the following data types out of the box. If you store one of these types, the retrieved data will have the same data type.

- Dates
- Regular Expressions
- Numbers
- Booleans
- Strings
- Plain Javascript Objects

If you store any other data type, the returned value will be a String.

So you can even store functions, but be careful that you need to eval() the returned value (which is a String representation of the function).

## LocalStorage API

### Injection

```js
$f.localStorage
```

## SessionStorage API

### Injection

```js
$f.sessionStorage
```