# Colors

Flux Style Guide offers a wide selection of colors out of the box.

## Color List

Here’s the list of colors provided out of the box. Within your app’s `*.vue` files you can use them as CSS classes (in HTML templates) or as SCSS variables.

@[example](Colors, result-only)

## Using as CSS Classes

Use `color--text--` or `color--background--` prefixes as class names to change the color of text or the color of the background.

```html
<!-- changing background color -->
<p class="color--background--primary">....</p>
```

```html
<!-- changing text color -->
<p class="color--text--red">...</p>
```

## Using SCSS/CSS Variables

In your app’s `*.vue` files you can use the colors as `$primary`, `$red`, and so on. Note that for SCSS or CSS Variables you will need `@doc88/flux-style-guide` v2.0+.

```html
<!-- Notice lang="scss" -->
<style lang="scss">
div {
  color: $red;
  background-color: $green;
}
</style>
```

```html
<!-- Notice CSS Variables -->
<style lang="scss">
div {
  color: var(--color--text--red);
  background-color: var(--color--text--green);
}
</style>
```

## Adding Your Own Colors
If you want to use your own colors for your components (let’s say we are adding a color named `brand`) all you need to do is add the following CSS into your app:

```css
.text-brand {
  color: #a2aa33;
}
.bg-brand {
  background: #a2aa33;
}
```

Now we can use this color for Quasar components:

```html
<f-button color="brand" ... />
```

## Dynamic Change of Brand Colors

::: warning
This is only supported on [browsers that support CSS Variables ](https://caniuse.com/#feat=css-variables) (Custom Properties). It is not going to work on IE11, but it will fall back to the brand colors from the CSS theme.
:::


You can dynamically customize the brand colors during run-time: `primary`, `secondary`, `gray`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`. That means you can have one build of your application with a default color theme but show it with a runtime selected one.

The main color configuration is done using CSS custom properties, stored on the root element (:root). Each property has a name of `--color-${name} `(example: `--color-primary`, `--color-secondary`) and should have a valid CSS color as value.

The CSS Custom properties use the same inheritance rules as normal CSS, so you can only redefine your desired colors and the rest will be inherited from the parent elements.

The recommended workflow is to set your customized color properties on the html (document.documentElement) or body (document.body) elements. This will allow you to revert to the default color by just deleting your custom one.

More info on CSS custom properties (variables) on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).