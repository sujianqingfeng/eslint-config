import type {
  ConfigItem,
  OptionsComponentExts,
  OptionsOverrides
} from '../types'
import pluginTs from '@typescript-eslint/eslint-plugin'
import * as parserTs from '@typescript-eslint/parser'
import { GLOB_SRC } from '../globs'

export function typescript(
  options: OptionsComponentExts & OptionsOverrides
): ConfigItem[] {
  const { componentExts = [], overrides = {} } = options ?? {}
  return [
    {
      plugins: {
        '@typescript-eslint': pluginTs
      }
    },
    {
      files: [GLOB_SRC, ...componentExts.map((ext) => `**/*.${ext}`)],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map((ext) => `.${ext}`),
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

        ...overrides
      }
    }
  ]
}
