import { sum } from './utils'

import type { A } from './types'

export function allSettle() {
  const a: A = 'a'
  sum(1, 2)
  console.log(a)
}
