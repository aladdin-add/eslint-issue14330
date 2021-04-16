var eslintrc = require('./config/eslintrc')
var eslintrcLegacy = require('./config/eslintrc-legacy')

module.exports = {
  overrides: [eslintrc, eslintrcLegacy],
}
