const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa()
app.use(cors())
app.use(bodyparser())

function expose(routes) {
  for (const route of routes) {
    app.use(route)
  }
}

function start() {
  const port = process.env.PORT || 3000
  app.listen(port)
}

module.exports = { expose, start }
