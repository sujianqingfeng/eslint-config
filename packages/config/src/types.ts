import type {
  EslintCommentsRules,
  FlatESLintConfigItem,
  ImportRules,
  MergeIntersection
} from '@antfu/eslint-define-config'

export interface OptionsComponentExts {
  componentExts?: string[]
}

export type OptionsConfig = {
  typescript?: boolean
  jsonc?: boolean
  yaml?: boolean
  vue?: boolean
  gitignore?: boolean
  prettier?: boolean
} & OptionsComponentExts

type Rules = MergeIntersection<ImportRules & EslintCommentsRules>

export type ConfigItem = Omit<FlatESLintConfigItem<Rules, false>, 'plugins'> & {
  name?: string
  plugins?: Record<string, any>
}

export type OptionsHasTypeScript = {
  typescript?: boolean
}

export type OptionsOverrides = {
  overrides?: ConfigItem['rules']
}

export type OptionsVueVersion = {
  version: number
}
