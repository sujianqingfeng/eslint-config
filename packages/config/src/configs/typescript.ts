import type { ConfigItem } from '../types'
import pluginTs from '@typescript-eslint/eslint-plugin'
import * as parserTs from '@typescript-eslint/parser'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as pluginImport from 'eslint-plugin-import'

import { GLOB_SRC } from '../globs'

export function typescript(): ConfigItem[] {
  return [
    {
      plugins: {
        '@typescript-eslint': pluginTs,
        import: pluginImport
      }
    },
    {
      files: [GLOB_SRC],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          sourceType: 'module'
        }
      },
      rules: {
        ...pluginTs.configs['eslint-recommended'].overrides![0].rules!,
        ...pluginTs.configs.strict.rules!,
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
  ]
}
