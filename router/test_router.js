const Router = require('express').Router()
const { test_controller } = require('../controllers')
const { test_middleware } = require('../middlewares')

Router.get('/', test_middleware.test, test_controller.test)

Router.get('/count', test_controller.count)
Router.get('/logout', test_controller.logout)

module.exports = Router
