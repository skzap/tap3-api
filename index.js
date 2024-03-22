import db from './db.js'
import api from './api.js'

main()

async function main() {
  await db.init()
  await api()
}
