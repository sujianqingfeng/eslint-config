const basic = require('@sujian/eslint-config-basic')

module.exports = {
  extends: ['@sujian/basic', 'plugin:@typescript-eslint/recommended'],
  overrides: basic.overrides,
  rules: {
    '@typescript-eslint/indent': ['error', 2,],

    // off
    '@typescript-eslint/no-explicit-any': 'off',
  }
}