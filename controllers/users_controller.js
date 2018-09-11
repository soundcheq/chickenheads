module.exports = {
  get_all: async (req, res) => {
    try {
      const UsersModel = req.app.get('models').Users
      const users = await UsersModel.findAll()

      res.send(users)
    } catch (err) {
      console.error('get_all failed in users_controller.js:', err)
    }
  },
  get_user: async (req, res) => {
    try {
      const UsersModel = req.app.get('models').Users
      const { id } = req.user
      const user = await UsersModel.findOne({ where: { auth0: id } })
      res.send(user)
    } catch (err) {
      console.error('get_user failed in users_controller.js:', err)
      res.status(500).send(err)
    }
  },
  get_one_by_id: async (req, res) => {
    try {
        const UsersModel = req.app.get('models').Users
    } catch (err) {
      console.error('get_one_by_id failed in users_controller.js:', err)
    }
  }
}
