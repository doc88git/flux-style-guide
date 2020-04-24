const path = require('path')

const isDotExample = s => s.includes('.example.')

module.exports = {
  componentsRoot: 'src/components',
  components: '(**|**/**)/[A-Z]*.vue',
  outDir: 'docs/.vuepress/apiComponents',
  getDocFileName: componentPath => {
    const item = componentPath.replace(/\.vue$/, '.md')
    if (isDotExample(item)) return ''

    return item
  },
  getDestFile: (file, config) => {
    const item = path.join(config.outDir, file).replace(/\.vue$/, '.doc.md')
    if (isDotExample(item)) return ''

    return item
  },
  templates: {
    component: require('./docgen.components.template.js')
  }
}
