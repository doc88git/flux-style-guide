const path = require('path')
const fs = require('fs')
const { parse } = require('@vue/component-compiler-utils')
const VueTemplateCompiler = require('vue-template-compiler')

module.exports = function parseExample(fileBaseName) {
  const filePathString = `../examples/${fileBaseName}.example.vue`
  const filePath = path.resolve(__dirname, filePathString)
  const componentSource = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { template, script, styles } = parse({
    filename: filePath,
    source: componentSource,
    compiler: VueTemplateCompiler,
    needMap: false
  })

  return {
    html: template ? template.content : '',
    js: script ? script.content : '',
    css: styles.length ? styles[0].content : ''
  }
}
