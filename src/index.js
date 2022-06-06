const server = require('./server')
const game = require('./game')
const settings = require('./settings')

server.expose(game.routes)
server.expose(settings.routes)
server.start()