// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { default as pluginReact } from 'eslint-plugin-react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { default as pluginReactHook } from 'eslint-plugin-react-hooks'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { default as pluginReactRefresh } from 'eslint-plugin-react-refresh'

import globals from 'globals'


import type { ConfigItem, OptionsOverrides } from '../types'

export function react(options: OptionsOverrides): ConfigItem[] {
  const { overrides = {} } = options
  return [
    {
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHook,
        'react-refresh': pluginReactRefresh
      }
    },
    {
      languageOptions: {
        // ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly'
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          // ecmaVersion: 2022,
          // sourceType: 'module'
        }
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHook.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true }
        ],

        ...overrides
      }
    }
  ]
}
