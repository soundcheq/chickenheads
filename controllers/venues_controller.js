const Op = require('sequelize').Op

module.exports = {
  get_all: async (req, res) => {
    try {
      const VenuesModel = req.app.get('models').Venues
      const venues = await VenuesModel.findAll()

      res.send(venues)
    } catch (err) {
      console.error('get_all failed in venues_controller.js:', err)
      res.status(500).send(err)
    }
  },
  get_one_by_id: async (req, res) => {
    try {
      const VenuesModel = req.app.get('models').Venues
      const { id } = req.params
      const venue = await VenuesModel.findById(id)

      res.send(venue)
    } catch (err) {
      console.error('get_one_by_id failed in venues_controller.js:', err)
      res.status(500).send(err)
    }
  },
  get_one_by_name: async (req, res) => {
    try {
      const { name } = req.params
      const VenuesModel = req.app.get('models').Venues
      const venue = await VenuesModel.findOne({ where: { name } })
      res.status(200).send(venue)
    } catch (err) {
      console.log('Get_one_by_name failed in venues_controller.js:', err)
      res.status(500).send(err)
    }
  },
  get_all_sound_types: async (req, res) => {
    try {
      const { id } = req.params
      const VenuesModel = req.app.get('models').Venues
      const soundTypes = await VenuesModel.findOne({
        where: { id },
        attributes: ['stype1', 'stype2', 'stype3']
      })
      res.status(200).send(soundTypes)
    } catch (err) {
      console.log('get_all_sound_types failed in venues_controller.js:', err)
      res.status(500).send(err)
    }
  },
  get_by_location: async (req, res) => {
    try {
      const Venues = req.app.get('models').Venues
      const { state, city } = req.params
      const venues = await Venues.findAll({
        where: {
          [Op.and]: [{ state }, { city }]
        }
      })
      res.send(venues)
    } catch (err) {
      console.error('get_by_location failed in venues_controller.js', err)
      res.status(500).send(err)
    }
  },
  get_all_count: async (req, res) => {
    try {
      const VenuesModel = req.app.get('models').Venues
      const count = await VenuesModel.count()
      res.send({ count })
    } catch (err) {
      console.error('get_all_count failed in venues_controller.js:', err)
      res.status(500).send(err)
    }
  }
}
