module.exports = () => {
  const req = require.context('../components', true, /.example.vue$/)

  const files = req.keys().map(f => {
    let s = f.split('/')
    let name = s[s.length - 1].replace('.example.vue', '')

    return {
      path: `/${name}`,
      name,
      component: f.replace('./', '')
    }
  })

  return files
}
