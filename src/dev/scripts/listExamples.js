module.exports = () =>
  require.context(`../../components`, true, /.example.vue$/).keys()
