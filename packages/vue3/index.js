const basic = require('@sujian/eslint-config-basic')

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@sujian/vue2',
    'plugin:vue/recommended',
  ],
  overrides: basic.overrides,
  rules: {
    // 0 是 off  1 是 warning  2 是 error
    
    // sfc 文件tag顺序
    'vue/component-tags-order': [
      2,
      {
        order: ['script', 'template', 'style']
      }
    ],
    // 多个根元素
    'vue/no-multiple-template-root': 0
  }
}
