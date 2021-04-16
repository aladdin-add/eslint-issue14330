const path = require('path')
module.exports = {
  files: ['src/legacy/**/*.js'],
  extends: [path.join(__dirname, './eslintrc.js')],
  rules: {
    eqeqeq: 'off',
  },
}
