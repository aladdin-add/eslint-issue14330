var path = require('path')
module.exports = {
  files: ['src/**/*.js'],
  excludedFiles: require('./eslintrc-legacy').files,
  parserOptions: { ecmaVersion: 10 },
  rules: {
    eqeqeq: 'error',
  },
}
