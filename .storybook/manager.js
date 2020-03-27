import 'storybook-addon-vue-info/lib/register'
import '@storybook/addon-a11y/register'
import '@storybook/addon-knobs/register'
import '@storybook/addon-backgrounds/register'
import '@storybook/addon-storysource/register'
// import '@storybook/addon-viewport/register'

import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

import logo from '../src/assets/flux-logo.png'

addons.setConfig({
  isFullscreen: false,
  showAddonsPanel: true,
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: 'Flux Style Guide',
    brandImage: logo,
    gridCellSize: 12
  }),
})
