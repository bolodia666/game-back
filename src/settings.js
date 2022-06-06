const route = require('koa-route')
const db = require('./db')

async function set(ctx) {
  const { rtp } = ctx.request.body
  if (isNaN(rtp) || rtp > 100 || rtp < 0) {
    ctx.status = 400
    ctx.body = { message: 'wrong RTP value' }
    return
  }
  db.set(rtp)
  ctx.body = 'ok'
}

async function get(ctx) {
  const { rtp } = db.get()
  ctx.body = { rtp }
}

const routes = [
  route.post('/settings/get', get),
  route.post('/settings/set', set),
]

module.exports = { routes }