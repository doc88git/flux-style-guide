import VueRouter from 'vue-router'
import loadExamples from './scripts/loadExamples'

const routes = [
  {
    path: '/',
    component: () => import('./components/Home')
  },
  {
    path: '*',
    component: () => import('./components/404')
  }
]

export default Vue => {
  Vue.use(VueRouter)

  return new VueRouter({
    mode: 'history',
    routes: [...routes, ...loadExamples()]
  })
}
