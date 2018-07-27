const Router = require('express').Router()

Router.use('/test', require('./test_router'))

module.exports = Router
