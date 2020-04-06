const listExamples = require('./listExamples')

const removeExample = f => {
  let s = f.split('/')
  return s[s.length - 1].replace('.example.vue', '')
}

module.exports = () =>
  listExamples().map(f => ({
    path: `/${removeExample(f)}`,
    name,
    component: f.replace('./', '')
  }))
