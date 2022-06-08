const DB = {
  rtp: 1,
  mult: 1,
}

function set(rtp) {
  DB.rtp = rtp
  DB.mult = rtp * 2 / 100
}

function get() {
  const { rtp, mult } = DB
  return { rtp, mult }
}

module.exports = { set, get }