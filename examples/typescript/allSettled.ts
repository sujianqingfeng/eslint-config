export function allSettle(promises: Promise<any>[]) {
  return new Promise<any>((resole) => {
    const results: any[] = []
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = { status: 'fulfilled', value: val }
        })
        .catch((error) => {
          results[index] = { status: 'rejected', value: error }
        })
        .finally(() => {
          results.length === promises.length && resole(results)
        })
    })
  })
}
