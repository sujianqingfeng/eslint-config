import type { EslintCommentsRules, FlatESLintConfigItem, ImportRules, MergeIntersection } from '@antfu/eslint-define-config'

export type OptionsConfig = {
  typescript?: boolean
  jsonc?: boolean
  yaml?: boolean
  vue?: boolean
  gitignore?: boolean
  prettier?: boolean
}


type Rules = MergeIntersection<ImportRules & EslintCommentsRules>


export type ConfigItem = Omit<FlatESLintConfigItem<Rules, false>, 'plugins'> & {
  name?: string
  plugins?: Record<string, any>
}
