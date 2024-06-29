import type { A } from './types'
import { sum } from './utils'

export function allSettle() {
  const a: A = 'a'
  sum(1, 2)
  console.log(a)
}
