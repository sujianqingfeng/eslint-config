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
  // ...option
})
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
    "html",
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

