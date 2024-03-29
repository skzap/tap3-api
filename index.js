import db from './db.js'
import api from './api.js'
import tracker from './tracker.js'

main()

async function main() {
  await db.init()
  await api()
  setInterval(async () => {
    await tracker.updateTxCountRandom()
  }, 5000)
  
}
