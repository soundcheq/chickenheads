const Router = require('express').Router()
const passport = require('passport')
const register_controller = require('../controllers').register_controller
const register_middleware = require('../middlewares').register_middleware

const { SUCCESS_REDIRECT, FAILURE_REDIRECT } = process.env

Router.get('/user', passport.authenticate('auth0', {
  successRedirect: SUCCESS_REDIRECT,
  failureRedirect: FAILURE_REDIRECT
}))

Router.post(
  '/venue/contact',
  register_middleware.sanitizeVenueContact,
  register_controller.register_venue_contact
)

Router.post('/venue', register_controller.register_venue)

module.exports = Router
