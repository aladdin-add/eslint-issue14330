var path = require('path')
module.exports = {
  files: ['src/**/*.js'],
  parserOptions: { ecmaVersion: 10 },
  excludedFiles: require('./eslintrc-legacy').files,
  rules: {
    eqeqeq: 'error',
  },
}
