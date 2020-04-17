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

const lazyLoad = c => () => import('@/' + c)

export default Vue => {
  Vue.use(VueRouter)
  const loadComponents = c =>
    c.map(i => {
      return {
        ...i,
        component: lazyLoad(i.component),
        dir: '@/' + i.component
      }
    })

  const examples = loadExamples().map(i => ({
    ...i,
    name: i.name.charAt(0).toUpperCase() + i.name.slice(1),
    children: loadComponents(i.children)
  }))

  return new VueRouter({
    mode: 'history',
    routes: [...routes, ...examples]
  })
}
