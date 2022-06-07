const route = require('koa-route')
const crypto = require('crypto')
const payout = require('./payout')

const sessions = {}

function createUser() {
  const balance = 100
  return { balance }
}

async function init(ctx) {
  const sessionId = crypto.randomUUID()
  const user = createUser()
  sessions[sessionId] = user
  ctx.body = { sessionId, user }
}

async function play(ctx) {
  const bet = 1
  const { sessionId } = ctx.request.body
  const user = sessions[sessionId]
  if (!user) {
    ctx.status = 400
    ctx.body = { message: 'bad sessionId' }
    return
  }
  if (user.balance - bet < 0) {
    ctx.status = 400
    ctx.body = { user, message: 'not enough balance' }
    return
  }
  const round = payout.calculate(bet)
  user.balance = Math.round((user.balance - bet + round.win) * 1000) / 1000
  ctx.body = { user, round }
}

const routes = [
  route.post('/session/init', init),
  route.post('/session/play', play),
]

module.exports = { routes }