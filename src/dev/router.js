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

  const examples = loadExamples().map(c => ({
    ...c,
    component: () => import('@/components/' + c.component)
  }))

  return new VueRouter({
    mode: 'history',
    routes: [...routes, ...examples]
  })
}
