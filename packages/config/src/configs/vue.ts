import type {
  ConfigItem,
  OptionsHasTypeScript,
  OptionsOverrides,
  OptionsVueVersion
} from '../types'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as parserTs from '@typescript-eslint/parser'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { default as pluginVue } from 'eslint-plugin-vue'
import { default as parserVue } from 'vue-eslint-parser'
import { GLOB_VUE } from '../globs'

export function vue(
  options: OptionsHasTypeScript & OptionsVueVersion & OptionsOverrides
): ConfigItem[] {
  const { typescript, version, overrides } = options

  const isVue3 = version === 3

  return [
    {
      plugins: {
        vue: pluginVue
      }
    },
    {
      files: [GLOB_VUE],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions: ['.vue'],
          parser: typescript ? (parserTs as any) : null,
          sourceType: 'module'
        }
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...(pluginVue.configs.base.rules as any),
        ...(isVue3
          ? {
              ...(pluginVue.configs['vue3-essential'].rules as any),
              ...(pluginVue.configs['vue3-strongly-recommended'].rules as any),
              ...(pluginVue.configs['vue3-recommended'].rules as any)
            }
          : {
              ...(pluginVue.configs['essential'].rules as any),
              ...(pluginVue.configs['strongly-recommended'].rules as any),
              ...(pluginVue.configs['recommended'].rules as any)
            }),

        // sfc 顺序
        'vue/order-in-components': [
          'error',
          {
            order: [
              'el',
              'name',
              'key',
              'parent',
              'functional',
              ['delimiters', 'comments'],
              ['components', 'directives', 'filters'],
              'extends',
              'mixins',
              ['provide', 'inject'],
              'ROUTER_GUARDS',
              'layout',
              'middleware',
              'validate',
              'scrollToTop',
              'transition',
              'loading',
              'inheritAttrs',
              'model',
              ['props', 'propsData'],
              'emits',
              'setup',
              'asyncData',
              'data',
              'fetch',
              'head',
              'computed',
              'watch',
              'watchQuery',
              'LIFECYCLE_HOOKS',
              'methods',
              ['template', 'render'],
              'renderError'
            ]
          }
        ],
        // 属性换行
        'vue/max-attributes-per-line': 'off',
        // 组件名多个单词
        'vue/multi-word-component-names': 'off',

        // sfc 文件tag顺序
        'vue/component-tags-order': [
          'error',
          {
            order: ['template', 'script', 'style']
          }
        ],

        // template script 标签必须换行
        'vue/block-tag-newline': [
          'error',
          {
            singleline: 'always',
            multiline: 'always'
          }
        ],

        // 使用组件大驼峰命名
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],

        // 定义组件大驼峰命名
        'vue/component-options-name-casing': ['error', 'PascalCase'],

        // emit事件 驼峰命名
        'vue/custom-event-name-casing': ['error', 'camelCase'],

        // html 注释两边存在空格  - 排除
        'vue/html-comment-content-spacing': [
          'error',
          'always',
          {
            exceptions: ['-']
          }
        ],

        // v-开头的指令不能使用冒号
        'vue/no-restricted-v-bind': ['error', '/^v-/'],

        //v-bind必须绑定有意义的值
        'vue/no-useless-v-bind': 'error',

        // v-text 和 v-html 不能出现在组件上面
        'vue/no-v-text-v-html-on-component': 'error',

        // sfc tag 存在间隔
        'vue/padding-line-between-blocks': ['error', 'always'],

        // 闭合
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'never'
            }
          }
        ],
        // 单行内容换行关闭
        'vue/singleline-html-element-content-newline': 'off',

        // indent
        'vue/html-indent': 'off',

        ...(isVue3
          ? {
              // sfc 文件tag顺序
              'vue/component-tags-order': [
                'error',
                {
                  order: ['script', 'template', 'style']
                }
              ],
              // 多个根元素
              'vue/no-multiple-template-root': 'off'
            }
          : {}),

        ...overrides
      }
    }
  ]
}
