const path = require('path')
const fs = require('fs')
const { parse } = require('@vue/component-compiler-utils')
const VueTemplateCompiler = require('vue-template-compiler')

const resultBase = {
  html: '',
  js: '',
  css: ''
}

const getComponents = dir => {
  try {
    const filePath = path.resolve(__dirname, dir)
    const content = fs.readFileSync(filePath, { encoding: 'utf8' })
    return { filePath, content }
  } catch (e) {
    return null
  }
}

module.exports = function parseExample(fileBaseName) {
  const pathComponents = `../components/examples/${fileBaseName}.example.vue`
  const componentSource = getComponents(pathComponents)

  if (!componentSource) return resultBase

  const { filePath, content } = componentSource

  const { template, script, styles } = parse({
    filename: filePath,
    source: content,
    compiler: VueTemplateCompiler,
    needMap: false
  })

  return {
    html: template ? template.content : '',
    js: script ? script.content : '',
    css: styles.length ? styles[0].content : ''
  }
}
