import express from 'express'
import * as serveHttp from 'http'
import db from './db.js'
import cors from 'cors'
import config from './config.js'

const http_port = config.http.port
const http_host = config.http.host
const app = express()
app.use(cors())

export default () => {
    function fourOhFour(res) {
      res.status(404).json({
        error: '404 - Not Found',
        message: 'The requested resource does not exist',
      })
    }

    app.get('/catalogue/:cardId', async (req, res) => {
      let cardId = Number(req.params.cardId)
      if (isNaN(cardId) || typeof cardId != 'number' || cardId < 0) {
        fourOhFour(res)
        return
      }
      let query = `SELECT id_model, css, svg from catalogue WHERE id = ${cardId}`
      let qRes = await db.query(query)
      res.status(200).send(qRes)
    })

    app.get('*', function (req, res) {
        fourOhFour(res)
    })

    const server = serveHttp.createServer(app)
    server.listen(http_port, http_host, () => {
        console.log('API ready @ http://' + http_host + ':' + http_port)
    })
}
