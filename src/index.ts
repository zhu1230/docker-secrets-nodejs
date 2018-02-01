import * as fs from 'fs'
import * as path from 'path'

let SECRETS_DIR = '/run/secrets'
let config = null

const init = () => {
  if (fs.existsSync(SECRETS_DIR)) {
    const files = fs.readdirSync(SECRETS_DIR)
    config = files.reduce((resultObject, file) =>
      resultObject[file] = fs.readFileSync(path.join(SECRETS_DIR, file), 'utf8').toString().trim()
      , {})
  } else {
    config = {}
  }
}

export const setupSecretsDir = (url: string) => {
  SECRETS_DIR = url
  init()
}

export const get = (key) => {
  if (config === null) {
    init()
  }
  return config[key.toLowerCase()] || process.env[key.toUpperCase()]
}
