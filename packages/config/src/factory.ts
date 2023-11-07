import type {ConfigItem, OptionsConfig} from './types'
import fs from 'node:fs'
import gitignore from 'eslint-config-flat-gitignore'
import { isPackageExists } from 'local-pkg'
import { ignores,javascript, typescript } from './configs'
import prettier from './configs/prettier'
import { combine } from './utils'

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]

export function defineConfig(options: OptionsConfig, ...userConfigs: (ConfigItem | ConfigItem[])[]) {
  const {
    gitignore: enableGitignore = true,
    typescript: enableTypeScript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
    prettier: enablePrettier = true
  }  = options

  const configs: ConfigItem[][] = []

  if (enableGitignore) {
      if (fs.existsSync('.gitignore')){
        configs.push([gitignore()])
      }
  }


  configs.push(
    ignores(),
    javascript()
  )
  


  if(enableTypeScript){
    configs.push(typescript())
  }

  if(enablePrettier){
    configs.push(prettier())
  }

  const merged = combine(
    ...configs,
    ...userConfigs,
  )


  return merged
}