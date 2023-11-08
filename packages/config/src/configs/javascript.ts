// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import js from '@eslint/js'
import globals from 'globals'
import { ConfigItem, OptionsOverrides } from '../types'

export function javascript(options: OptionsOverrides): ConfigItem[] {
  const { overrides = {} } = options
  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
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
          ecmaVersion: 2022,
          sourceType: 'module'
        }
      },
      rules: {
        ...js.configs.recommended.rules,
        // if 必须使用大括号
        curly: ['error', 'all'],

        // 数组新行分号开头
        'no-unexpected-multiline': 'off',

        // 如解构为空报错
        'no-empty-pattern': 'error',
        // 数组空格
        'no-sparse-arrays': 'error',
        // 字符串拼接使用 模板
        'prefer-template': 'error',
        ...overrides
      }
    }
  ]
}
