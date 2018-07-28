module.exports = {
  test: async (req, res) => {
    const UsersModel = app.get('models').Users

    const users = await UsersModel.findAll()

    if (!req.session.test) {
      req.session.test = true
    }

    res.send({ test: true, users, session: req.session })
  }
}
