const db = require('./db')
const crypto = require('crypto')

db.set(96)

function calculate(bet) {
  const { mult } = db.get()
  const horses = crypto.randomInt(10) + 1
  const win = horses % 2
    ? mult * bet
    : 0
  return { bet, win, horses }
}

module.exports = { calculate }