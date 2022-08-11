# @sujian/eslint-config

- prettier
- json
- html


## usage

### vue2
```
pnpm i @sujian/eslint-config-vue2 -D
```

.eslintrc.json

```json
{
  "extends": "@sujian/vue2"
}
```

### js
```
pnpm i @sujian/eslint-config-basic -D
```

.eslintrc.json

```json
{
  "extends": "@sujian/basic"
}
```


## package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Vscode 

Create .vscode/settings.json

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "json",
    "jsonc",
    "json5"
  ],
}
```