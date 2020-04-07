import Vue from 'vue'
import FluxStyleGuide from '@/index.esm.js'
import { isSSR } from '@/plugins/Platform.js'

import './styles/index.scss';

if (!isSSR) {
  Vue.use(FluxStyleGuide)
}
