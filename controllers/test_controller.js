const { users } = require('../models')

module.exports = {
  test: async (req, res) => {
    const users_data = await users.findAll()

    if (!req.session.test) {
      req.session.test = true
    }

    res.send({ test: true, users: users_data, session: req.session })
  }
}
