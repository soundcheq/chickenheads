const Router = require('express').Router()
const venues_controller = require('../controllers/venues_controller')

Router.get('/', venues_controller.get_all)
Router.get('/id/:id', venues_controller.get_one_by_id)
Router.get('/name/:name', venues_controller.get_one_by_name)
Router.get('/soundtypes/:id', venues_controller.get_all_sound_types)
Router.get('/:state/:city', venues_controller.get_by_location)
Router.get('/count', venues_controller.get_all_count)

module.exports = Router
