const DB = {
  rtp: 1,
  mult: 1,
}

function set(rtp) {
  DB.mult = 1 + rtp / 100
  DB.rtp = rtp
}

function get() {
  const { rtp, mult } = DB
  return { rtp, mult }
}

module.exports = { set, get }