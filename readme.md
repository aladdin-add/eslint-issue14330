# eslint

## repro

```bash
➜  eslint-issue14330 git:(master) ✗ npm i && npm run lint

up to date in 2s

57 packages are looking for funding
  run `npm fund` for details

> node@0.0.0 lint
> eslint .


Oops! Something went wrong! :(

ESLint: 7.24.0

Error: ESLint configuration in .eslintrc.js#overrides[1] » /Users/weiran/repo/dian/eslint-issue14330/config/eslintrc.js is invalid:
        - Unexpected top-level property "files".

Referenced from: /Users/weiran/repo/dian/eslint-issue14330/.eslintrc.js
    at ConfigValidator.validateConfigSchema (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/shared/config-validator.js:271:19)
    at ConfigArrayFactory._normalizeConfigData (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/config-array-factory.js:644:19)
    at ConfigArrayFactory._loadConfigData (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/config-array-factory.js:609:21)
    at ConfigArrayFactory._loadExtendedShareableConfig (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/config-array-factory.js:889:21)
    at ConfigArrayFactory._loadExtends (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/config-array-factory.js:781:25)
    at ConfigArrayFactory._normalizeObjectConfigDataBody (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/config-array-factory.js:720:25)
    at _normalizeObjectConfigDataBody.next (<anonymous>)
    at ConfigArrayFactory._normalizeObjectConfigData (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/config-array-factory.js:665:20)
    at _normalizeObjectConfigData.next (<anonymous>)
    at ConfigArrayFactory._normalizeObjectConfigDataBody (/Users/weiran/repo/dian/eslint-issue14330/node_modules/@eslint/eslintrc/lib/config-array-factory.js:758:25)
```

