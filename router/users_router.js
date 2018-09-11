const Router = require('express').Router()
const users_controller = require('../controllers').users_controller

Router.get('/', users_controller.get_all)
Router.get('/user', users_controller.get_user)
Router.get('/id/:id', users_controller.get_one_by_id)


module.exports = Router