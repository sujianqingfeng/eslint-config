import type { ConfigItem } from '../types'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as pluginImport from 'eslint-plugin-import'

export function imports(): ConfigItem[] {
  return [
    {
      plugins: {
        import: pluginImport
      },
      rules: {
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
