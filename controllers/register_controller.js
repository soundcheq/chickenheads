module.exports = {
  register_user: (req, res) => {
    try {
      res.send({ hooked_up: true })
    } catch (err) {
      console.error('register_user failed in login_controller.js:', err)
      res
        .status(500)
        .send(`register_user failed in login_controller.js: ${err}`)
    }
  },

  register_venue_contact: (req, res) => {
    try {
      res.send({ hooked_up: true })
    } catch (err) {
      console.error(
        'register_venue_contact failed in login_controller.js:',
        err
      )
      res
        .status(500)
        .send(`register_venue_contact failed in login_controller.js: ${err}`)
    }
  },

  register_venue: (req, res) => {
    try {
      res.send({ hooked_up: true })
    } catch (err) {
      console.error('register_venue failed in login_controller.js:', err)
      res
        .status(500)
        .send(`register_venue failed in login_controller.js: ${err}`)
    }
  }
}
