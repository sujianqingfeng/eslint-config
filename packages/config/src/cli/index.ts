import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const instance = yargs(hideBin(process.argv))
  .scriptName('@sujian/eslint-config')
  .usage('')
  .command('*', 'initialization ...', (args) => {
    console.log('----args', args)
  })

instance.help().argv
