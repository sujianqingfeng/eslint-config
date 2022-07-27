module.exports = {
  extends:[
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {

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
  }
}