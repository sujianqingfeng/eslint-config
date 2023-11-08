import * as pluginYaml from 'eslint-plugin-yml'
import { default as parserYaml } from 'yaml-eslint-parser'
import { GLOB_YAML } from '../globs'
import { ConfigItem, OptionsOverrides } from '../types'

export function yaml(options: OptionsOverrides): ConfigItem[] {
  const { overrides } = options
  return [
    {
      plugins: {
        yaml: pluginYaml as any
      }
    },
    {
      files: [GLOB_YAML],
      languageOptions: {
        parser: parserYaml
      },
      rules: {
        'style/spaced-comment': 'off',

        'yaml/block-mapping': 'error',
        'yaml/block-sequence': 'error',
        'yaml/no-empty-key': 'error',
        'yaml/no-empty-sequence-entry': 'error',
        'yaml/no-irregular-whitespace': 'error',
        'yaml/plain-scalar': 'error',

        'yaml/vue-custom-block/no-parsing-error': 'error',
        ...overrides
      }
    }
  ]
}
