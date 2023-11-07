// @ts-ignore
import js from '@eslint/js'
import { ConfigItem } from '../types'

export function javascript(): ConfigItem[] {
  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          node: true,
          es6: true,
          browser: true
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
        'prefer-template': 'error'
      }
    }
  ]
}
