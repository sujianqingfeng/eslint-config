import type { ConfigItem, OptionsConfig } from './types'
import fs from 'node:fs'
import gitignore from 'eslint-config-flat-gitignore'
import { isPackageExists } from 'local-pkg'
import { ignores, javascript, typescript } from './configs'
import { imports } from './configs/imports'
import { jsonc } from './configs/jsonc'
import prettier from './configs/prettier'
import { sortPackageJson, sortTsconfig } from './configs/sort'
import vue from './configs/vue'
import { yaml } from './configs/yaml'
import { combine, getVueVersion } from './utils'

const VuePackages = ['vue', 'nuxt', 'vitepress', '@slidev/cli']

export async function defineConfig(
  options: OptionsConfig,
  ...userConfigs: (ConfigItem | ConfigItem[])[]
) {
  const {
    componentExts = [],
    gitignore: enableGitignore = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some((i) => isPackageExists(i)),
    prettier: enablePrettier = true
  } = options

  const configs: ConfigItem[][] = []

  if (enableGitignore) {
    if (fs.existsSync('.gitignore')) {
      configs.push([gitignore()])
    }
  }

  configs.push(ignores(), javascript(), imports())

  if (enableVue) {
    componentExts.push('vue')
  }

  if (enableTypeScript) {
    configs.push(
      typescript({
        componentExts
      })
    )
  }

  if (enableVue) {
    const v = await getVueVersion()
    if (v) {
      configs.push(
        vue({
          typescript: !!enableTypeScript,
          version: v
        })
      )
    }
  }

  if (options.jsonc ?? true) {
    configs.push(jsonc(), sortPackageJson(), sortTsconfig())
  }

  if (options.yaml ?? true) {
    configs.push(yaml())
  }

  if (enablePrettier) {
    configs.push(prettier())
  }

  const merged = combine(...configs, ...userConfigs)

  return merged
}
