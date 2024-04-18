import db from './db.js'
import api from './api.js'
import tracker from './tracker.js'
import config from './config.js'
import { refreshPrice } from './prices.js'

main()

async function main() {
  await db.init()
  await refreshPrice()
  await api()

  // routines

  // refresh matic price
  setInterval(async () => {
    await refreshPrice()
  }, config.intervals.tracker)

  // randomly track users tx count
  setInterval(async () => {
    await tracker.updateTxCountRandom()
  }, config.intervals.prices)
}
