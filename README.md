# @sujian/eslint-config

- prettier
- json
- html


## usage

### vue3
```
pnpm i @sujian/eslint-config-vue3 -D
```

.eslintrc.json

```json
{
  "extends": "@sujian/vue3"
}
```

### vue3-ts
```
pnpm i @sujian/eslint-config-vue3-ts -D
```

.eslintrc.json

```json
{
  "extends": "@sujian/vue3-ts"
}
```

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

### ts
```
pnpm i @sujian/eslint-config-typescript -D
```

.eslintrc.json

```json
{
  "extends": "@sujian/typescript"
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

## Tips

> 使用pnpm可能出现包找不到问题，是pnpm的安全策略问题，如果没有显式声明包，是不能够使用幽灵依赖。所以有两种解决方案。
- 一种是显式声明依赖。
- 另一种是依赖提升。

```
# .npmrc 推荐使用public-hoist-pattern来匹配提升。
public-hoist-pattern[]=*eslint*
```
