import { ethers } from "ethers"
import db from './db.js'

const provider = new ethers.JsonRpcProvider("https://polygon.llamarpc.com")

let tracker = {
  updateTxCountRandom: async () => {
    try {
      const pubs = await db.query('SELECT pub FROM catalogue ORDER BY RANDOM() LIMIT 1')
      const pub = pubs[0].pub
      let count = await provider.getTransactionCount(pub)
      console.log('TXCOUNT\t'+pub+'\t'+count)
      await db.query(`UPDATE catalogue SET tx_count = ${count} WHERE pub = '${pub}'`)
    } catch (error) {
      console.log('TXCOUNT ERROR')
    }
  }
}

export default tracker