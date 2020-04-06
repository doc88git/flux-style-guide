import VueRouter from 'vue-router'

import PageNotFound from './components/404'
import loadExamples from './loadExamples'

const routes = [
  {
    path: '*',
    component: PageNotFound
  }
]

export default Vue => {
  Vue.use(VueRouter)

  let examples = []

  examples = loadExamples().map(c => {
    return {
      ...c,
      component: () => import('@/components/' + c.component)
    }
  })

  console.log(examples)

  return new VueRouter({
    routes: [...routes, ...examples]
  })
}
