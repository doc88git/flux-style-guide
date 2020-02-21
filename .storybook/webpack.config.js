const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src'),
    '~': path.resolve(__dirname, '..')
  }

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import "@/assets/settings/settings.scss";
					`
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  let rule = config.module.rules.find(
    r =>
      // it can be another rule with file loader
      // we should get only svg related
      r.test &&
      r.test.toString().includes('svg') &&
      // file-loader might be resolved to js file path so "endsWith" is not reliable enough
      r.loader &&
      r.loader.includes('file-loader')
  )
  rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: 'html-loader'
  })

  return config
}
