import pluginPrettier from 'eslint-plugin-prettier'
import { ConfigItem, OptionsOverrides } from '../types'

export function prettier(options: OptionsOverrides): ConfigItem[] {
  const { overrides } = options
  return [
    {
      plugins: {
        prettier: pluginPrettier
      }
    },
    {
      rules: {
        ...pluginPrettier.configs.recommended.rules,
        'prettier/prettier': [
          'error',
          {
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
            semi: false,
            vueIndentScriptAndStyle: false,
            singleQuote: true,
            trailingComma: 'none',
            bracketSpacing: true,
            arrowParens: 'always',
            requirePragma: false,
            insertPragma: false,
            htmlWhitespaceSensitivity: 'ignore'
          },
          {
            usePrettierrc: true
          }
        ],
        ...overrides
      }
    }
  ]
}
