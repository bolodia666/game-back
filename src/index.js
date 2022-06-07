const server = require('./server')
const session = require('./session')
const settings = require('./settings')

server.expose(session.routes)
server.expose(settings.routes)
server.start()