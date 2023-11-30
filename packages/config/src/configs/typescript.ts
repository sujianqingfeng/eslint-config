import type {
  ConfigItem,
  OptionsComponentExts,
  OptionsOverrides
} from '../types'
import { GLOB_SRC } from '../globs'

export async function typescript(
  options: OptionsComponentExts & OptionsOverrides
): Promise<ConfigItem[]> {
  const { componentExts = [], overrides = {} } = options ?? {}

  const pluginTs = (await import('@typescript-eslint/eslint-plugin')).default
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const parserTs = await import('@typescript-eslint/parser')

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
