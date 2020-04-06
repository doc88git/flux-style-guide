const path = require('path')

module.exports = {
  componentsRoot: 'src/components',
  components: '(**|**/**)/[A-Z]*.vue',
  outDir: 'docs/.vuepress/apiComponents',
  getDocFileName: componentPath => {
    const item = componentPath.replace(/\.vue$/, '.md')
    if (item.includes('.example.')) return ''
    return item
  },
  getDestFile: (file, config) => {
    const item = path.join(config.outDir, file).replace(/\.vue$/, '.doc.md')
    if (item.includes('.example.')) return ''
    return item
  },
  templates: {
    component: require('./docgen.components.template.js')
  }
}

// const path = require('path')

// module.exports = {
//   componentsRoot: 'src/components',
//   components: '(**|**/**)/[A-Z]*.vue',
//   outDir: 'docs/02.components',
//   getDocFileName: componentPath => {
//     let fileName = componentPath.replace(/\.vue$/, '.md')
//     return fileName.replace(/\/F/g, '/')
//   },
//   getDestFile: (file, config) => {
//     let destFile = path.join(config.outDir, file).replace(/\.vue$/, '.md')
//     return destFile.replace(/\/F/g, '/')
//   },
//   templates: {
//     component: require('./docgen.components.template.js')
//   }
// }
