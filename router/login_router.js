const Router = require('express').Router()
const login_controller = require('../controllers').login_controller
const login_middleware = require('../middlewares').login_middleware

Router.post(
  '/venue',
  login_middleware.sanitizeVenueContact,
  login_controller.login_venue_contact
)

module.exports = Router
