import VueRouter from 'vue-router'

import Home from './components/Home'
import PageNotFound from './components/404'
import loadExamples from './loadExamples'

const routes = [
  {
    path: '/',
    component: Home
  },
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
      component: function() {
        return import('@/components/' + c.component)
      }
    }
  })

  console.log(examples)

  return new VueRouter({
    routes: [...routes, ...examples]
  })
}
