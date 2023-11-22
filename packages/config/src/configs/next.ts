import { ConfigItem, OptionsOverrides } from '../types'

export function next(options: OptionsOverrides): ConfigItem[] {
  const { overrides } = options

  return [
    {
      rules: {
        ...overrides
      }
    }
  ]
}
