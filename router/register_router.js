const Router = require('express').Router()
const passport = require('passport')
const register_controller = require('../controllers').register_controller
const register_middleware = require('../middlewares').register_middleware

const { SUCCESS_REDIRECT, FAILURE_REDIRECT } = process.env

Router.get('/user', function(req, res, next) {
  passport.authenticate('auth0', function(err, user, info) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect(FAILURE_REDIRECT)
    }
    req.login(user, async function(err) {
      if (err) {
        return next(err)
      }

      // console.log(user)
      //wait for the user to be added to the database
      await register_controller.register_user(req, res)
      //redirect to dashboard
      return res.redirect(SUCCESS_REDIRECT)
    })
  })(req, res, next)
})

Router.post(
  '/venue/contact',
  register_middleware.sanitizeVenueContact,
  register_controller.register_venue_contact
)

Router.post('/venue', register_controller.register_venue)

module.exports = Router
