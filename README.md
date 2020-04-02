# Flux Style Guide

@[example](examples/intro-attribute-binding)

Design by Doc88 for Vue.js

## Documentation

This documentation, at this moment, is found in the repository itself using the [StoryBook for Vue](https://storybook.js.org/docs/guides/guide-vue/).

``` bash
yarn storybook
```

## Instalation

``` bash
# Instalation
yarn add @doc88/flux-style-guide
```

You can use with `Vue.js 2.x` and `Nuxt.js 2.x`.

### Nuxt.js

We create the file `plugins/flux-style-guide.js`:

``` js
import Vue from 'vue'
import FluxStyleGuide from "@doc88/flux-style-guide"

Vue.use(FluxStyleGuide)
```

Then we add the file path inside the plugins key of our `nuxt.config.js`:

``` js
export default {
  plugins: ['~/plugins/flux-style-guide']
}
```

### Vue.js

``` js
import Vue from 'vue'
import FluxStyleGuide from "@doc88/flux-style-guide"

Vue.use(FluxStyleGuide)
```

## CSS Sass Configuration

To use a simple configuration

``` css
@import '~@doc88/flux-style-guide/src/assets/f-style-guide.scss';
```

To customize styles

``` css
@import '~@doc88/flux-style-guide/src/assets/f-variables';

/*
Custom variables
*/

@import '~@doc88/flux-style-guide/src/assets/f-reset';
@import '~@doc88/flux-style-guide/src/assets/f-root';
@import '~@doc88/flux-style-guide/src/assets/f-colors';
@import '~@doc88/flux-style-guide/src/assets/f-sizes';
@import '~@doc88/flux-style-guide/src/assets/f-transitions';
@import '~@doc88/flux-style-guide/src/assets/settings/settings';

@import '~@doc88/flux-style-guide/src/assets/f-base';

```

## Update

``` bash
# Update dependence
yarn upgrade-interactive --latest
```

## Contribuition

- 🇺🇸 Please read our [Contribution Guide](.github/en/CONTRIBUTING.md) before submitting a pull request.
- 🇧🇷 Por favor, leia o [Guia de Contribuição](.github/pt-br/CONTRIBUTING.md) antes de enviar um pull request.
