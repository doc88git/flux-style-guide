const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src'),
    '~': path.resolve(__dirname, '..')
  };

  config.module.rules
    .push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', {
        loader: 'sass-loader',
        options: {
          data: `
          @import "@/assets/f-variables.scss";
          `
        }
      }],
      include: path.resolve(__dirname, '../'),
    });

  config.module.rules
    .push({
      test: /\.vue$/,
      loader: 'storybook-addon-vue-info/loader',
      enforce: 'post'
    });

  config.module.rules
    .push({
      test: /\.stories\.js$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre'
    })

	return config
}