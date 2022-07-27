module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    '@hens/basic',
    '@hens/prettier',
    'plugin:vue/recommended',
  ],
  rules: {
    // 0 是 off  1 是 warning  2 是 error
    
    // sfc 顺序
    'vue/order-in-components': [
      2,
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
    'vue/max-attributes-per-line': 0,
    // 组件名多个单词
    'vue/multi-word-component-names': 0,

    // sfc 文件tag顺序
    'vue/component-tags-order': [
      2,
      {
        order: ['template', 'script', 'style']
      }
    ],

    // template script 标签必须换行
    'vue/block-tag-newline': [
      2,
      {
        singleline: 'always',
        multiline: 'always'
      }
    ],

    // 使用组件大驼峰命名
    'vue/component-name-in-template-casing': [2, 'kebab-case'],

    // 定义组件大驼峰命名
    'vue/component-options-name-casing': [2, 'PascalCase'],

    // emit事件 驼峰命名
    'vue/custom-event-name-casing': [2, 'camelCase'],

    // html 注释两边存在空格  - 排除
    'vue/html-comment-content-spacing': [
      2,
      'always',
      {
        exceptions: ['-']
      }
    ],

    // v-开头的指令不能使用冒号
    'vue/no-restricted-v-bind': [2, '/^v-/'],

    //v-bind必须绑定有意义的值
    'vue/no-useless-v-bind': 2,

    // v-text 和 v-html 不能出现在组件上面
    'vue/no-v-text-v-html-on-component': 2,

    // sfc tag 存在间隔
    'vue/padding-line-between-blocks': [2, 'always'],
  }
}
