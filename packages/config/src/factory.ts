import type { ConfigItem, OptionsConfig } from './types'
import fs from 'node:fs'
import gitignore from 'eslint-config-flat-gitignore'
import { isPackageExists } from 'local-pkg'
import {
  ignores,
  javascript,
  typescript,
  imports,
  yaml,
  jsonc,
  react,
  vue,
  prettier,
  sortPackageJson,
  sortTsconfig
} from './configs'
import { combine, getVueVersion } from './utils'

const VuePackages = ['vue', 'nuxt', 'vitepress', '@slidev/cli']

const flatConfigProps: (keyof ConfigItem)[] = [
  'files',
  'ignores',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings'
]

export async function defineConfig(
  options: OptionsConfig & ConfigItem = {},
  ...userConfigs: (ConfigItem | ConfigItem[])[]
) {
  const {
    componentExts = [],
    gitignore: enableGitignore = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    react: enableReact = isPackageExists('react'),
    prettier: enablePrettier = true,
    overrides = {}
  } = options

  const configs: ConfigItem[][] = []

  if (enableGitignore) {
    if (fs.existsSync('.gitignore')) {
      configs.push([gitignore()])
    }
  }

  configs.push(
    ignores(),
    javascript({ overrides: overrides.javascript }),
    imports()
  )

  if (enableVue) {
    componentExts.push('vue')
  }

  if (enableTypeScript) {
    configs.push(
      typescript({
        componentExts,
        overrides: overrides.typescript
      })
    )
  }

  if (enableVue) {
    const v = await getVueVersion()
    configs.push(
      vue({
        typescript: !!enableTypeScript,
        version: v === null ? 3 : v,
        overrides: overrides.vue
      })
    )
  }

  if (enableReact) {
    configs.push(
      react({
        overrides: overrides.react
      })
    )
  }

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({ overrides: overrides.jsonc }),
      sortPackageJson(),
      sortTsconfig()
    )
  }

  if (options.yaml ?? true) {
    configs.push(yaml({ overrides: overrides.yaml }))
  }

  if (enablePrettier) {
    configs.push(prettier({ overrides: overrides.prettier }))
  }

  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options) {
      acc[key] = options[key] as any
    }
    return acc
  }, {} as ConfigItem)

  if (Object.keys(fusedConfig).length) {
    configs.push([fusedConfig])
  }

  const merged = combine(...configs, ...userConfigs)

  return merged
}
