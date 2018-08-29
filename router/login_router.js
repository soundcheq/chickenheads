const Router = require('express').Router()
const login_controller = require('../controllers').login_controller
const login_middleware = require('../middlewares').login_middleware

Router.get(
  '/user',
  login_middleware.checkUserSession,
  login_controller.login_user
)

Router.post(
  '/venue',
  login_middleware.validateVenueContact,
  login_controller.login_venue_contact
)

module.exports = Router
