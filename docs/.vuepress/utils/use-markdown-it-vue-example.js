const customBlock = require('markdown-it-custom-block')
const buildExampleComponent = require('./build-example-component')
const buildImportMd = require('./build-import-md')

module.exports = function useMarkdownItVueExample(md) {
  md.use(customBlock, {
    example(args) {
      return buildExampleComponent(args)
    },
    import(args) {
      return buildImportMd(args)
    }
  })
}
