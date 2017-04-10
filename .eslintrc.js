module.exports = {
  parserOptions: {
    ecmaVersion: 8
  },
  extends: 'eslint:recommended',
  env: {
    'node': true
  },
  rules: {
    'no-constant-condition': ["error", { checkLoops: false }],
    'require-yield': 0,
    'no-var': "error",
    semi: 0
  },
  globals: {
    Promise: false,
    Map: false,
    WeakMap: false
  }
};
