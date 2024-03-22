import db from './db.js'


async function main() {
  await db.init()

  let id = 86
  let endId = 141

  let godId = 14
  while (id <= endId) {
    console.log(id)
    if (godId < 1)
      godId = 14
    let filename = ''
    let css = `background-size: contain; background-image: url(''./bgs/gods_${godId}_b.png''); background-position: center;`
    await db.query(`
      UPDATE catalogue
      SET css = '${css}'
      WHERE id = ${id}
    `)
    id++
    godId--
  }
}

async function fix() {
  await db.init()

  let id = 112
  let endId = 141

  while (id <= endId) {
    console.log(id)
    let res = await db.query(`SELECT css FROM catalogue WHERE id = ${id}`)
    let css = res[0].css
    css = css.replace('contain', 'cover')
    css = css.replace(/'/g, "''")
    await db.query(`UPDATE catalogue SET css = '${css}' WHERE id = ${id}`)
    id++
  }
}