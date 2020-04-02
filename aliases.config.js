const path = require('path')

const resolveSrc = _path => path.join(__dirname, _path)

const aliases = {
  '@store': 'docs/.vuepress/store.js'
}

module.exports = {
  webpack: {}
}

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
}
