module.exports = {
  test: async (req, res) => {
    const UsersModel = req.app.get('models').Users

    const users = await UsersModel.findAll()

    if (!req.session.test) {
      req.session.test = true
    }

    res.send({ test: true, users, session: req.session })
  },
  count: (req, res) => {
    if (req.session.count === undefined) {
      req.session.count = 0
    } else {
      req.session.count += 1
    }

    res.send({ session: req.session })
  },
  logout: async (req, res) => {
    await req.session.destroy()

    res.send('destroyed')
  }
}
