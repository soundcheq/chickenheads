const Router = require('express').Router()
const { test_controller } = require('../controllers')
const { test_middleware } = require('../middlewares')

Router.get('/', test_middleware.test, test_controller.test)

module.exports = Router
