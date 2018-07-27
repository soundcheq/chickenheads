const { Users } = require('../models')

module.exports = {
  test: async (req, res) => {
    const users = await Users.findAll()

    if (!req.session.test) {
      req.session.test = true
    }

    res.send({ test: true, users, session: req.session })
  }
}
