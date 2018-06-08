import * as fs from 'fs'
import * as path from 'path'

let SECRETS_DIR = '/run/secrets'
let config = null

const init = () => {
  if (fs.existsSync(SECRETS_DIR)) {
    const files = fs.readdirSync(SECRETS_DIR)
    config = files.reduce((resultObject, file) => {
      let file_path = path.join(SECRETS_DIR, file)
      if(fs.statSync(file_path).isFile()) {
          resultObject[file] = fs.readFileSync(file_path, 'utf8').toString().trim();    
      }
      return resultObject
    }, {})
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
