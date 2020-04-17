const listExamples = require('./listExamples')

const removeExample = f => {
  let s = f.split('/')
  return s[s.length - 1].replace('.example.vue', '')
}

const withChildrens = [
  'components',
  'plugins',
  'directives',
  'mixins',
  'stories',
  'utils'
]

const fathers = withChildrens.map(i => ({
  path: `/${i}/`,
  name: i,
  children: []
}))

const addToFather = (s, obj) =>
  fathers.forEach(i => {
    if (!s.includes(i.name)) return false

    // obj = {
    //   ...obj,
    //   path: `/${i.name}/${obj.path}/`
    // }

    i.children.push(obj)
  })

const loadExamples = () => {
  listExamples().forEach(f =>
    addToFather(f, {
      path: removeExample(f),
      name: removeExample(f),
      component: f.replace('./', '')
    })
  )

  return fathers
}

module.exports = loadExamples
