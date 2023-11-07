import type { ConfigItem } from './types'
import { getPackageInfo } from 'local-pkg'

export function combine(
  ...configs: (ConfigItem | ConfigItem[])[]
): ConfigItem[] {
  return configs.flat()
}

export async function getVueVersion() {
  const info = await getPackageInfo('vue')
  if (!info) {
    return null
  }
  const { version } = info
  const v = version!.split('.')[0]
  return Number(v)
}
