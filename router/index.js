const Router = require('express').Router()

Router.use('/test', require('./test_router'))
Router.use('/venues', require('./venues_router'))

module.exports = Router
