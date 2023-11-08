# @sujian/eslint-config

- javascript
- typescript
- vue
- react
- json
- yaml
- sort
- prettier


## usage

```
pnpm i @sujian/eslint-config -D
```

```js
// file: eslint.config.js

import { defineConfig } from '@sujian/eslint-config'

export default defineConfig({
  // ...options
})

[options](https://github.com/sujianqingfeng/eslint-config/blob/161221d8b90490853d078e6d7d29ec3611eef473/packages/config/src/types.ts#L18)
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
    "json5",
    "package.json"
  ],
  "eslint.experimental.useFlatConfig": true,
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

