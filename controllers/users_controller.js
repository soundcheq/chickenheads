module.exports = {
    get_one: async (req, res) => {
        try {
            const UsersModel = req.app.get('models').Users
            const { id } = req.params
            const user = await UsersModel.findById(id)
            res.send(user)
        } catch (err) {
            console.error('get_one failed in users_controller.js:', err)
            res.status(500).send(err)
        }
    }
}