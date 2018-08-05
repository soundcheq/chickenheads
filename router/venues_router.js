const Router = require('express').Router()
const venues_controller = require('../controllers').venues_controller
const venues_middleware = require('../middlewares').venues_middleware

Router.get('/', venues_controller.get_all)
Router.get('/id/:id', venues_controller.get_one_by_id)
Router.get('/name/:name', venues_controller.get_one_by_name)
Router.get('/soundtypes/:id', venues_controller.get_all_sound_types)
Router.get('/location/:state/:city', venues_controller.get_by_location)
Router.get('/count', venues_controller.get_all_count)
Router.get('/soundtype/:stype1', venues_controller.get_one_soundtype1)
Router.get('/capacity/:capacity', venues_controller.get_venues_by_capacity)

Router.post(
  '/update/name/:id',
  venues_middleware.checkForName,
  venues_controller.update_venue_name
)

module.exports = Router
