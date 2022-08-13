const basic = require('@sujian/eslint-config-basic')

module.exports = {
  extends: ['@sujian/basic', 'plugin:@typescript-eslint/recommended'],
  overrides: basic.overrides,
  rules: {
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        'allowDestructuring': false, // Disallow `const { props, state } = this`; true by default
        'allowedNames': ['self', 'that'] // Allow `const self = this`; `[]` by default
      }
    ],

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2,],

    // off
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}