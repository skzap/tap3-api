import pg from 'pg'
import config from './config.js'

let db = {
    client: null,
    init: async () => {
        db.client = new pg.Client({
          host: config.db.host,
          port: config.db.port,
          database: config.db.database,
          user: config.db.user,
          password: config.db.password,
          ssl: {
            rejectUnauthorized: false,
            ca: config.db.cert,
          }
        })
        await db.client.connect()
        console.log('PostgreSQL ready')
    },
    query: async (q) => {
        console.log('DB: ' + q)
        return (await db.client.query(q)).rows
    },
    end: async () => {
        await db.client.end()
    }
}

export default db