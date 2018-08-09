const Router = require('express').Router()

Router.use('/test', require('./test_router'))
Router.use('/venues', require('./venues_router'))

// Login Route(s)
Router.use('/login', require('./login_router'))

// Register Route(s)
Router.use('/register', require('./register_router'))

module.exports = Router
