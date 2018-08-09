const Router = require('express').Router()
const register_controller = require('../controllers').register_controller
const register_middleware = require('../middlewares').register_middleware

Router.post('/user', register_controller.register_user)

Router.post(
  '/venue/contact',
  register_middleware.sanitizeVenueContact,
  register_controller.register_venue_contact
)

Router.post('/venue', register_controller.register_venue)

module.exports = Router
