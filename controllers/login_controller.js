module.exports = {
  login: (req, res) => {
    try {
      res.send({ hooked_up: true })
    } catch (err) {
      console.error('login failed in login_controller.js:', err)
      res.status(500).send(`login failed in login_controller.js: ${err}`)
    }
  }
}
