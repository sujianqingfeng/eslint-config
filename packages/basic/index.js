module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended', 
    'plugin:jsonc/recommended-with-jsonc'
  ],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
      },
    },
  ],
  rules: {
    // 0 是 off  1 是 warning  2 是 error
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