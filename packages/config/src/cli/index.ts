import process from 'node:process'
import c from 'picocolors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { CROSS } from './constants'
import { run } from './run'

const instance = yargs(hideBin(process.argv))
  .scriptName('@sujian/eslint-config')
  .usage('')
  .command('*', 'initialization ...', async () => {
    try {
      await run()
    } catch (error) {
      console.error(c.inverse(c.red(' Failed to migrate ')))
      console.error(c.red(`${CROSS} ${String(error)}`))
      process.exit(1)
    }
  })
  .showHelpOnFail(false)
  .alias('h', 'help')

instance.help().argv
