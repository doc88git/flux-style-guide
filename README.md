## Flux Style Guide

Design by Doc88 for Vue.js

### Documentation

This documentation, at this moment, is found in the repository itself using the [StoryBook for Vue](https://storybook.js.org/docs/guides/guide-vue/).
```
yarn storybook
```
### Instalation

``` bash
# Instalation
$ yarn add @doc88/flux-style-guide
```

You can use with `Vue.js 2.x` and `Nuxt.js 2.x`.

#### Nuxt.js

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

#### Vue.js

``` js
import Vue from 'vue'
import FluxStyleGuide from "@doc88/flux-style-guide"

Vue.use(FluxStyleGuide)
```

### Update

``` bash
# Update dependence
$ yarn upgrade-interactive --latest
```

## Contribuition

- 🇺🇸 Please read our [Contribution Guide](.github/en/CONTRIBUTING.md) before submitting a pull request.
- 🇧🇷 Por favor, leia o [Guia de Contribuição](.github/pt-br/CONTRIBUTING.md) antes de enviar um pull request.
