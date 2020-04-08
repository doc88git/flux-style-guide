const parseExampleArgs = require('./parse-example-args')
const parseExample = require('./parse-example')
const buildExampleAttrs = require('./build-example-attrs')

module.exports = function buildExampleComponent(args) {
  const { fileBaseName, attrs } = parseExampleArgs(args)
  const example = parseExample(fileBaseName)
  let exampleArgs = buildExampleAttrs(fileBaseName, example, attrs)

  return `<ClientOnly>
            <style-guide-example ${exampleArgs} />
          </ClientOnly>`
}
