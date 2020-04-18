const listExamples = require('./listExamples')

const removeExample = f => {
  let s = f.split('/')
  return s[s.length - 1].replace('.example.vue', '')
}

const groups = [
  'components',
  'plugins',
  'directives',
  'mixins',
  'stories',
  'utils'
]

const getGroup = i => {
  let group = groups.filter(c => i.includes(c))
  return group[0] || ''
}

const getSubgroup = s => {
  let split = s.split('/')
  let file = removeExample(s)
  let folder = split[split.length - 2]

  return file.includes(folder) ? folder : ''
}

const captalize = s => s.charAt(0).toUpperCase() + s.slice(1)

const loadExamples = () => {
  return listExamples().map(f => {
    const name = removeExample(f)
    const group = getGroup(f)
    const path = `/${group ? `${group}/${name}` : name}`
    const component = f.replace('./', '')

    return {
      path,
      name: captalize(name),
      component: () => import('@/' + component),
      meta: { group: captalize(group), subgroup: getSubgroup(component) }
    }
  })
}

module.exports = loadExamples
