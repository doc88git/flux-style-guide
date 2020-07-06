const path = require('path')
const requireContext = require('./require-context')

const getFileName = f => {
  let s = f.split('/')
  return s[s.length - 1]
}

module.exports = function getExamples() {
  const resolveSrc = _path => path.resolve(__dirname, _path)
  const examplesDir = resolveSrc('../../../src/')
  const outuptExamples = resolveSrc('../components/examples/')
  const files = requireContext(examplesDir, true, /.example.vue$/).keys()

  return files.map(item => ({
    from: item,
    to: `${outuptExamples}/${getFileName(item)}`,
    toType: 'file'
  }))
}
