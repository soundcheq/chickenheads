const Router = require('express').Router()
const login_controller = require('../controllers').login_controller

Router.post('/', login_controller.login)

module.exports = Router
