module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    // 0 是 off  1 是 warning  2 是 error

    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "semi": false,
        "vueIndentScriptAndStyle": false,
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "arrowParens": "always",
        "requirePragma": false,
        "insertPragma": false,
        "htmlWhitespaceSensitivity": "ignore"
      },
      {
        "usePrettierrc": false
      }
    ],

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

    // extension rules

    // 定义数组空格 关闭
    'array-bracket-spacing': [2, 'never'],

    // 箭头函数空格
    'arrow-spacing': [2, { before: true, after: true }],

    // 方法体空格
    'block-spacing': [2, 'always'],

    // 方法体花括号不换行
    'brace-style': [2, '1tbs', { allowSingleLine: true }],

    // 逗号间隔
    'comma-spacing': [2, { before: false, after: true }],

    // 逗号跟在值后 不换行
    'comma-style': [2, 'last'],

    // .属性的时候 .的位置在换行下
    'dot-location': [2, 'property'],

    // if 必须使用大括号
    curly: [2, 'all'],

    // 使用单引号
    quotes: [1, 'single'],

    // 不要分号
    semi: [2, 'never'],

    // 两个空格缩进
    'indent': ['error', 2],

    // 对象空格
    'object-curly-spacing': [2, 'always'],

    // 对象换行限制
    'object-curly-newline': [2, { multiline: true, consistent: true }],

    // 对象的属性允许在一行
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],

    // 数组新行分号开头
    'no-unexpected-multiline': 0,

    // key 空格
    'key-spacing': [2, { beforeColon: false, afterColon: true }],

    // 如 if 空格
    'keyword-spacing': [2, { before: true, after: true }],

    // 如解构为空报错
    'no-empty-pattern': 2,
    // 数组空格
    'no-sparse-arrays': 2,

    // 操作符可下移
    // 'operator-linebreak': [2, 'before'],

    // 字符串拼接使用 模板
    'prefer-template': 2,

    // 如-- 不需要空格
    'space-unary-ops': [2, { words: true, nonwords: false }],

    // 数组对象换行
    'array-bracket-newline': [2, { multiline: true }],

    // 只有一个空行
    'no-multiple-empty-lines': [2, { max: 1 }],

    // 代码块前空格
    'space-before-blocks': [2, 'always'],

    // 分号后空格 比如for循环
    'semi-spacing': 2
  }
}
