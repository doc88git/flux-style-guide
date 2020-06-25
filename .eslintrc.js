module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0,
    'comma-dangle': ['error', 'never']
  },
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  overrides: [
    {
      files: [`docs/.vuepress/components/**/*`, `docs/.vuepress/store.js`],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
      },
      env: {
        browser: true
      }
    }
  ]
}
