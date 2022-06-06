const DB = {
  rtp: 1,
  mult: 1,
}

function set(rtp) {
  const margin = (100 - rtp) / 100
  DB.mult = 1 + (1 - margin / 2)
  DB.rtp = rtp
}

function get() {
  const { rtp, mult } = DB
  return { rtp, mult }
}

module.exports = { set, get }