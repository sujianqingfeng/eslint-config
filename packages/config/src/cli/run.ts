import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import c from 'picocolors'
import {
  WARN,
  ARROW,
  CHECK,
  version,
  eslintVersion,
  vscodeSettingsString
} from './constants'

export async function run() {
  const cwd = process.cwd()

  const pathFlatConfig = path.join(cwd, 'eslint.config.js')
  const pathPackageJSON = path.join(cwd, 'package.json')

  if (fs.existsSync(pathFlatConfig)) {
    console.log(c.yellow(`${WARN} eslint.config.js already exists`))
    return process.exit(0)
  }

  console.log(c.cyan(`${ARROW} bumping @sujian/eslint-config to v${version}`))

  const pkgContent = await fsp.readFile(pathPackageJSON, 'utf-8')
  const pkg: Record<string, any> = JSON.parse(pkgContent)
  pkg.devDependencies ??= {}
  pkg.devDependencies['@sujian/eslint-config'] = `^${version}`
  if (!pkg.devDependencies.eslint) {
    pkg.devDependencies.eslint = eslintVersion
  }

  await fsp.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2))
  console.log(c.green(`${CHECK} updated package.json`))

  // eslint.config.js

  let eslintConfigContent = ''
  if (pkg.type === 'module') {
    eslintConfigContent = `
import { defineConfig } from '@sujian/eslint-config'

export default defineConfig()`.trimStart()
  } else {
    eslintConfigContent = `
const { defineConfig } = require('@sujian/eslint-config')

module.exports = defineConfig()`.trimStart()
  }

  await fsp.writeFile(pathFlatConfig, eslintConfigContent)
  console.log(c.green(`${CHECK} created eslint.config.js`))

  // vscode settings
  const dotVscodePath: string = path.join(cwd, '.vscode')
  const settingsPath: string = path.join(dotVscodePath, 'settings.json')

  if (!fs.existsSync(dotVscodePath)) {
    await fsp.mkdir(dotVscodePath, { recursive: true })
  }

  if (!fs.existsSync(settingsPath)) {
    await fsp.writeFile(settingsPath, `{${vscodeSettingsString}}`, 'utf-8')
  } else {
    let settingsContent = await fsp.readFile(settingsPath, 'utf8')

    settingsContent = settingsContent.trim().replace(/\s*}$/, '')
    settingsContent +=
      settingsContent.endsWith(',') || settingsContent.endsWith('{') ? '' : ','
    settingsContent += `${vscodeSettingsString}}\n`

    await fsp.writeFile(settingsPath, settingsContent, 'utf-8')
    console.log(c.green(`${CHECK} updated .vscode/settings.json`))
  }

  console.log(c.green(`${CHECK} migration completed`))
}
