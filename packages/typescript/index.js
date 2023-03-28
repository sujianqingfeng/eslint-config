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
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 代码块空格
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error',

    // 类型空格
    '@typescript-eslint/type-annotation-spacing': 'error',

    // 关键字前后空格
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": "error"
  }
}