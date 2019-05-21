const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			'vue-style-loader',
      'css-loader',
      'postcss-loader',
			{
				loader: 'sass-loader',
				options: {
					data: `
						@import "@/assets/f-style-guide.scss";
					`
				}
      }
		],
  })

	config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    options: {
      docgenOptions: {
        alias: config.resolve.alias
      }
    },
    enforce: 'post'
  })

  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre'
  })

	return config
}