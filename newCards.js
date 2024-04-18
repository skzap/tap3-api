// use this script to insert a new batch to database

import db from './db.js'
import fs from 'fs'

await db.init()
main()

async function main() {
  const text = fs.readFileSync('./batch.csv',{ encoding: 'utf8', flag: 'r' })
  let cards = text.split('\n')
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i].split(',')
    let pub = '0x'+base64ToHex(card[4].split('#')[1].split(':')[0])
    console.log(card)

    let sql = `INSERT INTO catalogue (id, ts, pw, id_model, url, pub)
              VALUES (${card[0]}, '${card[1]}', '${card[2]}', 2, '${card[4]}', '${pub}')`
    console.log(sql)
    await db.query(sql)
  }
}

function base64ToHex(str) {
  const raw = atob(str);
  let result = '';
  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += (hex.length === 2 ? hex : '0' + hex);
  }
  return result.toLowerCase();
}