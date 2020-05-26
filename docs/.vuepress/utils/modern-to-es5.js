const { transformSync } = require('@babel/core')

module.exports = function modernToEs5(code) {
  let result = transformSync(code, {
    filename: 'file.js',
    ast: true,
    code: true,
    presets: ['@babel/env']
  })
  return result.code.replace(/\bthis\$1\b/g, 'vm')
}
