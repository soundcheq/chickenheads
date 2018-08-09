const Router = require('express').Router()
const register_controller = require('../controllers').register_controller

Router.post('/user', register_controller.register_user)
Router.post('/venue/contact', register_controller.register_venue_contact)
Router.post('/venue', register_controller.register_venue)

module.exports = Router
