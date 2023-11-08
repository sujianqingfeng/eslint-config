import type {
  EslintRules,
  FlatESLintConfigItem,
  ImportRules,
  JsoncRules,
  MergeIntersection,
  TypeScriptRules,
  VueRules,
  YmlRules,
  ReactHooksRules,
  ReactRules
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
  react?: boolean

  overrides?: {
    javascript?: ConfigItem['rules']
    typescript?: ConfigItem['rules']
    vue?: ConfigItem['rules']
    jsonc?: ConfigItem['rules']
    yaml?: ConfigItem['rules']
    prettier?: ConfigItem['rules']
    react?: ConfigItem['rules']
  }
} & OptionsComponentExts

type Rules = MergeIntersection<
  TypeScriptRules &
    ImportRules &
    EslintRules &
    YmlRules &
    JsoncRules &
    VueRules &
    ReactHooksRules &
    ReactRules
>

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
