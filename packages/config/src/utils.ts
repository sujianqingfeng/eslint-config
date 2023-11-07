import { ConfigItem } from "./types";

export function combine(...configs: (ConfigItem | ConfigItem[])[]): ConfigItem[] {
  return configs.flat()
}

