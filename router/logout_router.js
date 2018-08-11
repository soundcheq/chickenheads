const Router = require('express').Router()
const logout_controller = require('../controllers').logout_controller

Router.get('/', logout_controller.logout)
Router.get('/user', logout_controller.logout_user)


module.exports = Router
