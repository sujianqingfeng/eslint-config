const basic = require('@sujian/eslint-config-basic')

module.exports = {
  extends: ['@sujian/basic', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: basic.overrides,
  plugins: ['import', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self', 'that'] // Allow `const self = this`; `[]` by default
      }
    ],

    // off
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 导入排序
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'index'
        ],
        'newlines-between': 'ignore',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: []
      }
    ]
  }
}
